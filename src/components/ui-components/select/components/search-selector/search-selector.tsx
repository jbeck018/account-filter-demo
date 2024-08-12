import React, { type ReactNode, memo, useCallback } from "react";

import { useCombobox } from "downshift";

import { Input } from "../../../input/input";
import { SelectorBox, type SelectorBoxProps } from "../../../selector-box";
import type {
	AsyncSelect,
	Option,
	RenderOptionParams,
	SelectActions,
} from "../../helpers";
import {
	useIsUnmounted,
	useLoadOptions,
	useOnHighlightedIndexChange,
	useRecursiveSelect,
	useSelectState,
} from "../../hooks";
import { SelectMenu as Menu } from "../menu/menu";

export type SearchSelectorActions<T extends Option> = {
	inputValue: string;
	onBack: () => void;
	onRemove?: (event?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
	parent: T;
} & SelectActions<T>;

export type SearchSelectorProps<T extends Option> = AsyncSelect<T> & {
	disabled?: boolean;
	isDefaultOpened?: boolean;
	isSearchable?: boolean;
	maxWidth100?: boolean;
	name?: string;
	onChange: (items?: T | null) => void;
	placeholderElement?: JSX.Element;
	preOptions?: Array<{ id: string; name: string }>;
	renderMenuFooter?: (payload: SearchSelectorActions<T>) => JSX.Element;
	renderMenuHeader?: (payload: SearchSelectorActions<T>) => JSX.Element;
	renderSelectedItem?: (
		item: T,
		actions?: SearchSelectorActions<T>,
	) => JSX.Element;
	showLabel?: boolean;
	suffix?: ReactNode;
	value?: T | null;
};

export const SearchSelector = memo(
	SearchSelectorInner,
) as typeof SearchSelectorInner;
// (SearchSelector as FC).displayName = 'DownShiftSearchSelector';

function SearchSelectorInner<T extends Option>({
	checkIsAlreadySelectedFunction,
	renderSelectedItem,
	renderOption: renderOptionOuter,
	renderMenuFooter,
	renderMenuHeader,
	renderPrevSelectedItem,
	onChange,
	onBlur,
	loadOptions,
	menuWidth,
	menuPlacement,
	menuIsWithArrow = false,
	placeholder = "Select an option",
	value = null,
	emptyState,
	formRef,
	valueContainerWrapper,
	disabled,
	placeholderElement,
	preOptions,
	isDefaultOpened = false,
}: SearchSelectorProps<T>) {
	const menuReferenceElement = React.useRef<HTMLDivElement>(null);
	const { onHighlightedIndexChange, scrollToIndexFunctionRef } =
		useOnHighlightedIndexChange();
	const isUnmounted = useIsUnmounted();
	const {
		onSelect: onSelectParent,
		resetRecursiveState,
		currentItem: parentItem,
		onBack,
	} = useRecursiveSelect<T>();
	const { resetState, setState, state } = useSelectState<T>({
		parent: parentItem?.data,
	});

	const {
		getInputProps,
		getItemProps,
		getMenuProps,
		openMenu,
		closeMenu,
		selectItem,
		highlightedIndex,
		selectedItem,
		getComboboxProps,
		setInputValue,
		inputValue,
		isOpen,
	} = useCombobox<T | null>({
		items: state.data,
		initialHighlightedIndex: 0,
		selectedItem: value,
		defaultIsOpen: isDefaultOpened,

		onSelectedItemChange: ({ selectedItem }) => {
			onChange(selectedItem ?? null);
		},

		onIsOpenChange: ({ isOpen }) => {
			if (!isOpen && !isUnmounted) {
				resetRecursiveState();
				setInputValue("");
				resetState();
			}

			onBlur?.();
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
		preOptions: preOptions as any,
		parent: parentItem?.data as any,
		skip: state.data.length,
	});

	const renderOption = useCallback(
		(item: T, params?: { type: RenderOptionParams<T>["type"] }) => {
			const options: RenderOptionParams<T> = {
				onRecursiveSelect: (e) => {
					e.stopPropagation();
					onSelectParent(item, { searchTerm: inputValue });
					setInputValue("");
				},
				// onRemove: () => selectItem(null),
				parent: parentItem?.data as any,
				type: params?.type || "menu",
			};

			return renderOptionOuter?.(item, options);
		},
		[inputValue, onSelectParent, parentItem, renderOptionOuter, setInputValue],
	);

	const selectActions = React.useMemo<SearchSelectorActions<T>>(
		() => ({
			closeMenu,
			inputValue,
			selectItem,
			setInputValue,
			parent: parentItem?.data as any,
			onBack: () => {
				onBack();
				setInputValue(parentItem?.options?.searchTerm || "");
			},
			onRemove: () => selectItem(null),
		}),
		[
			closeMenu,
			inputValue,
			onBack,
			parentItem?.data,
			parentItem?.options?.searchTerm,
			selectItem,
			setInputValue,
		],
	);

	const selectedItemEl = React.useMemo(() => {
		if (!selectedItem) {
			return <></>;
		}

		if (renderSelectedItem)
			return renderSelectedItem(selectedItem as T, selectActions);

		const menuItem = renderOption(selectedItem as T, { type: "value" });
		try {
			const selectedItemElement = React.cloneElement<SelectorBoxProps>(
				menuItem as any,
				{
					isRemovable: !disabled,
					isRemovableOnHover: !disabled,
					onRemove: () => selectItem(null),
					variant: "hoverable",
				},
			);

			return selectedItemElement;
		} catch (e) {
			console.warn(e);
			return menuItem;
		}
	}, [
		selectedItem,
		renderSelectedItem,
		selectActions,
		renderOption,
		disabled,
		selectItem,
	]);

	const valueContainer = selectedItem ? (
		selectedItemEl
	) : isOpen ? (
		// wrapping <Input /> with another element is essential here
		// because if you put input in <FieldWrapper /> component
		// it adds onFocus and onBlur methods to input to control it's focused state
		// and for some reasons it breaks the combobox
		<>
			<Input {...getInputProps({ disabled })} autoFocus />
		</>
	) : placeholderElement ? (
		React.cloneElement(placeholderElement, {
			onClick: disabled ? undefined : isOpen ? undefined : openMenu,
		})
	) : (
		<SelectorBox
			isEmpty={!selectedItem}
			onClick={disabled ? undefined : openMenu}
		>
			{placeholder}
		</SelectorBox>
	);
	//selector box for owner here
	return (
		<>
			{formRef && <span ref={formRef} tabIndex={0} onFocus={openMenu} />}
			<div>
				<div {...getComboboxProps({ disabled })}>
					<div ref={menuReferenceElement}>
						{valueContainerWrapper
							? valueContainerWrapper?.(valueContainer as any, { isOpen })
							: valueContainer}
					</div>
				</div>

				{isOpen ? (
					<Menu<T>
						checkIsAlreadySelected={checkIsAlreadySelectedFunction}
						emptyState={emptyState}
						getItemProps={getItemProps}
						getMenuProps={getMenuProps}
						hasMore={Boolean(state.nextToken)}
						highlightedIndex={highlightedIndex}
						isLoaded={state.isLoaded}
						items={state.data}
						menuFooter={renderMenuFooter?.(selectActions)}
						menuHeader={renderMenuHeader?.(selectActions)}
						menuIsWithArrow={menuIsWithArrow}
						menuPlacement={menuPlacement}
						menuReferenceElement={menuReferenceElement}
						menuWidth={menuWidth || menuReferenceElement.current?.offsetWidth}
						renderOption={renderOption as any}
						renderPrevSelectedItem={renderPrevSelectedItem}
						scrollToIndex={scrollToIndexFunctionRef}
						onLoadMore={onLoadMore}
					/>
				) : (
					<div style={{ display: "none" }}>
						<ul {...getMenuProps()} />
						<input {...getInputProps()} />
					</div>
				)}
			</div>
		</>
	);
}
