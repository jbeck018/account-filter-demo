import React, { type ForwardedRef, forwardRef, memo } from "react";

import { useCombobox } from "downshift";

import { Input } from "../../../input/input";
import { SelectorBox } from "../../../selector-box";
import { navy4 } from "../../../selector-box/selector-box.styles";
import type {
	AsyncSelect,
	SelectActions,
	SelectBaseProps,
	StaticSelect,
} from "../../helpers";
import {
	useLoadOptions,
	useOnHighlightedIndexChange,
	useSelectState,
} from "../../hooks";
import { SelectMenu as Menu } from "../menu/menu";

export type ControllerTransformer<
	TInput extends string = string,
	TOutput = any,
> = {
	transform?: {
		input: (value: TOutput) => TInput;
		output: (value: TInput) => TOutput;
	};
};

export type PropertySelectorProps<
	T extends Record<string, unknown> | string,
	IsAsync extends boolean = true,
> = SelectBaseProps<T> &
	(IsAsync extends true
		? AsyncSelect<T> & { isSearchable?: boolean }
		: StaticSelect<T> & { isSearchable?: never }) & {
		customZIndex?: number;
		defaultIsOpen?: boolean;
		disabled?: boolean;
		onChange: (items?: T | null) => void;
		onIsOpenChange?(props: { isOpen: boolean }): void;
		preOptions?: Array<{ id: string; name: string }>;
		renderMenuFooter?: (
			payload: { inputValue: string; selectedItem?: T } & SelectActions<T>,
		) => JSX.Element;
		renderMenuHeader?: (
			payload: { inputValue: string; selectedItem?: T } & SelectActions<T>,
		) => JSX.Element;
		renderValueContainer?: (selectedItem: T) => JSX.Element;
		searchPlaceholder?: string;
		style?: React.CSSProperties;
		transform?: ControllerTransformer["transform"];
		value?: T | null;
	};

const PropertySelectorInner = <
	T extends Record<"id", string>,
	IsAsync extends boolean = true,
>(
	props: PropertySelectorProps<T, IsAsync>,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_ref: ForwardedRef<unknown>,
) => {
	return props.isSearchable ? (
		<SearchablePropertySelector<T> {...(props as any)} />
	) : (
		<SimplePropertySelector<T> {...(props as any)} />
	);
};

const transformDefault: ControllerTransformer["transform"] = {
	output: (v) => v,
	input: (v) => v,
};

export const PropertySelector = memo(
	forwardRef(PropertySelectorInner),
) as typeof PropertySelectorInner;

function SearchablePropertySelector<T extends Record<"id", string>>({
	renderOption,
	renderSelectedItem = renderOption,
	renderValueContainer,
	renderMenuFooter,
	renderMenuHeader,
	onChange,
	loadOptions,
	preOptions,
	menuWidth,
	menuPlacement,
	menuIsWithArrow = true,
	placeholder = "Select an option",
	value: _value = null,
	emptyState,
	valueContainerWrapper,
	menuContentClassName,
	menuClassName,
	disabled,
	searchPlaceholder,
	transform = transformDefault,
	defaultIsOpen = false,
	onIsOpenChange,
}: PropertySelectorProps<T, true>) {
	const menuReferenceElement = React.useRef<HTMLDivElement>(null);
	const { onHighlightedIndexChange, scrollToIndexFunctionRef } =
		useOnHighlightedIndexChange();

	const value = transform?.output(_value as any);

	const { resetState, setState, state } = useSelectState<T>();

	const {
		getInputProps,
		getItemProps,
		getMenuProps,
		getToggleButtonProps,
		closeMenu,
		highlightedIndex,
		selectedItem,
		getComboboxProps,
		setInputValue,
		inputValue,
		selectItem,
		isOpen,
	} = useCombobox<T | null>({
		items: state.data,
		initialHighlightedIndex: 0,
		initialSelectedItem: value || null,
		selectedItem: value,
		defaultIsOpen,
		itemToString: () => "",

		onSelectedItemChange: ({ selectedItem }) => {
			const value = transform?.input(selectedItem) as unknown as T;
			onChange(value ?? null);
		},

		onIsOpenChange: ({ isOpen }) => {
			onIsOpenChange?.({ isOpen: Boolean(isOpen) });
			if (!isOpen) {
				setInputValue("");
				resetState();
			}
		},
		onInputValueChange: ({ inputValue: newValue }) =>
			setInputValue(newValue || ""),
		onHighlightedIndexChange: onHighlightedIndexChange,
		environment: window,
	});

	const { onLoadMore } = useLoadOptions({
		resetState,
		setState,
		nextToken: state.nextToken,
		inputValue,
		loadOptions,
		isOpen,
		skip: state.data.length,
		preOptions: preOptions as any,
	});

	const selectActions = React.useMemo(
		() => ({ closeMenu, selectItem, setInputValue, inputValue, selectedItem }),
		[closeMenu, inputValue, selectItem, selectedItem, setInputValue],
	);

	const menuHeader = React.useMemo(
		() => (
			<>
				{renderMenuHeader?.(selectActions as any)}

				<div
					style={{
						padding: 10,
						marginBottom: 10,
						background: navy4,
					}}
					data-attribute="select-menu-search"
				>
					<Input
						{...getInputProps({ autoFocus: true })}
						placeholder={searchPlaceholder || "Type Here..."}
					/>
				</div>
			</>
		),
		[getInputProps, renderMenuHeader, searchPlaceholder, selectActions],
	);

	const valueContainer = (
		<div ref={menuReferenceElement} style={{ width: "fit-content" }}>
			{renderValueContainer ? (
				renderValueContainer?.(selectedItem as any)
			) : selectedItem ? (
				renderSelectedItem?.(selectedItem as any)
			) : (
				<SelectorBox isEmpty={!selectedItem}>{placeholder}</SelectorBox>
			)}
		</div>
	);

	return (
		<div>
			<div {...getComboboxProps()}>
				<div {...getToggleButtonProps({ disabled })}>
					{valueContainerWrapper
						? valueContainerWrapper(valueContainer, { isOpen })
						: valueContainer}
				</div>
			</div>

			{isOpen ? (
				<Menu<T>
					emptyState={emptyState}
					getItemProps={getItemProps}
					getMenuProps={getMenuProps}
					hasMore={Boolean(state.nextToken)}
					highlightedIndex={highlightedIndex}
					isLoaded={state.isLoaded}
					items={state.data}
					menuClassName={menuClassName}
					menuContentClassName={menuContentClassName}
					menuFooter={renderMenuFooter?.(selectActions as any)}
					menuHeader={menuHeader}
					menuIsWithArrow={menuIsWithArrow}
					menuPlacement={menuPlacement}
					menuReferenceElement={menuReferenceElement}
					menuWidth={menuWidth || menuReferenceElement.current?.offsetWidth}
					renderOption={renderOption as any}
					scrollToIndex={scrollToIndexFunctionRef}
					selectedItem={selectedItem}
					onLoadMore={onLoadMore}
				/>
			) : (
				<div style={{ display: "none" }}>
					<ul {...getMenuProps()} />
					<input {...getInputProps()} />
				</div>
			)}
		</div>
	);
}

function SimplePropertySelector<T extends Record<"id", string>>({
	renderOption,
	renderSelectedItem = renderOption,
	renderValueContainer,
	renderMenuFooter,
	renderMenuHeader,
	onChange,
	loadOptions,
	options,
	preOptions,
	menuWidth,
	menuContentClassName,
	menuPlacement,
	menuIsWithArrow = true,
	placeholder = "Select an option",
	value: _value = null,
	emptyState,
	valueContainerWrapper,
	disabled,
	transform = transformDefault,
	defaultIsOpen = false,
	onIsOpenChange,
}: PropertySelectorProps<T>) {
	const menuReferenceElement = React.useRef<HTMLDivElement>(null);
	const { onHighlightedIndexChange, scrollToIndexFunctionRef } =
		useOnHighlightedIndexChange();
	const { resetState, setState, state } = useSelectState<T>();

	const value = transform?.output(_value as any);

	const {
		getItemProps,
		getMenuProps,
		getToggleButtonProps,
		closeMenu,
		highlightedIndex,
		selectedItem,
		inputValue,
		selectItem,
		isOpen,
		getComboboxProps,
		getInputProps,
	} = useCombobox<T | null>({
		items: options || state.data,
		initialHighlightedIndex: 0,
		initialSelectedItem: value || null,
		selectedItem: value,
		itemToString: () => "",
		defaultIsOpen,
		onSelectedItemChange: ({ selectedItem }) => {
			const value = transform?.input(selectedItem) as unknown as T;
			onChange(value ?? null);
		},
		onIsOpenChange: ({ isOpen }) => {
			onIsOpenChange?.({ isOpen: Boolean(isOpen) });
			if (!isOpen) resetState();
		},
		onHighlightedIndexChange: onHighlightedIndexChange,
		environment: window,
	});

	const selectActions = React.useMemo(
		() => ({ closeMenu, selectItem, inputValue }),
		[closeMenu, inputValue, selectItem],
	);

	const menuHeader = React.useMemo(
		() => <>{renderMenuHeader?.(selectActions)}</>,
		[renderMenuHeader, selectActions],
	);

	const valueContainer = (
		<div ref={menuReferenceElement} style={{ width: "fit-content" }}>
			{renderValueContainer ? (
				renderValueContainer?.(selectedItem as any)
			) : selectedItem ? (
				renderSelectedItem?.(selectedItem)
			) : (
				<SelectorBox isEmpty={!selectedItem}>{placeholder}</SelectorBox>
			)}
		</div>
	);

	const { onLoadMore } = useLoadOptions({
		resetState,
		setState,
		nextToken: state.nextToken,
		inputValue,
		loadOptions,
		isOpen,
		skip: state.data.length,
		preOptions: preOptions as any,
	});

	return (
		<div>
			<div {...getComboboxProps()}>
				<div {...getToggleButtonProps({ disabled })}>
					<input style={{ display: "none" }} type="text" {...getInputProps()} />
					{valueContainerWrapper
						? valueContainerWrapper(valueContainer, { isOpen })
						: valueContainer}
				</div>
			</div>

			{isOpen ? (
				<Menu<T>
					emptyState={emptyState}
					getItemProps={getItemProps}
					getMenuProps={getMenuProps}
					hasMore={Boolean(state.nextToken)}
					highlightedIndex={highlightedIndex}
					isLoaded={options ? true : state.isLoaded}
					items={options || state.data}
					menuContentClassName={menuContentClassName}
					menuFooter={renderMenuFooter?.(selectActions)}
					menuHeader={menuHeader}
					menuIsWithArrow={menuIsWithArrow}
					menuPlacement={menuPlacement}
					menuReferenceElement={menuReferenceElement}
					menuWidth={menuWidth || menuReferenceElement.current?.offsetWidth}
					renderOption={renderOption as any}
					scrollToIndex={scrollToIndexFunctionRef}
					selectedItem={selectedItem}
					onLoadMore={onLoadMore}
				/>
			) : (
				<div style={{ display: "none" }}>
					<ul {...getMenuProps()} />
					<input type="text" {...getInputProps()} />
				</div>
			)}
		</div>
	);
}
