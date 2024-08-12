import React, {
	type ReactNode,
	createContext,
	memo,
	useCallback,
	useContext,
	useMemo,
	useRef,
} from "react";
import usePrevious from "react-use/lib/usePrevious";
import useUpdateEffect from "react-use/lib/useUpdateEffect";

import { useCombobox, useMultipleSelection } from "downshift";
import { uniqBy } from "lodash";
import find from "lodash/find";
import isEqual from "lodash/isEqual";

import type { PillProps } from "../../../pill";
import {
	type Option,
	SelectorBox,
	type SelectorBoxProps,
} from "../../../selector-box";
import { gray } from "../../../selector-box/selector-box.styles";
import type {
	AsyncSelect,
	MultiSelectActions,
	RenderOptionParams,
	SelectBaseProps,
} from "../../helpers";
import {
	useLoadOptions,
	useOnHighlightedIndexChange,
	useRecursiveSelect,
	useSelectState,
} from "../../hooks";
import { SelectMenu as Menu } from "../menu/menu";

type Actions<O extends Option> = {
	inputValue: string;
	onBack: () => void;
	parent: O;
} & MultiSelectActions<O>;

type MultiSearchSelectOverrideProps<O extends Option> = {
	defaultIsOpen?: boolean;
	disabled?: boolean;
	exceptSelectorPrefix?: string;
	hideMenuOnSelect?: boolean;
	hideSelectedItems?: boolean;
	isHideExtras?: boolean;
	isShowingPlus?: boolean;
	onChange: (items: O[]) => void;
	onTabKey?: (payload: Actions<O> & { highlightedItem: O }) => void;
	options?: O[];
	placeholderElement?: JSX.Element;
	plusIcon?: JSX.Element;
	renderMenuFooter?: (payload: Actions<O>) => JSX.Element;
	renderMenuHeader?: (payload: Actions<O>) => JSX.Element;
	renderSelectedItem?: (item: O, actions?: Actions<O>) => JSX.Element;
	shouldRenderOptionAsPill?: boolean;
	value?: O[];
	isFullWidthInput?: boolean;
};

export type MultiSearchSelectProps<O extends Option> =
	MultiSearchSelectOverrideProps<O> &
		Omit<SelectBaseProps<O>, keyof MultiSearchSelectOverrideProps<O>> &
		Omit<AsyncSelect<O>, keyof MultiSearchSelectOverrideProps<O>> & {
			preOptions?: never;
		};

export const onChangeOnSelectContext = createContext({
	triggerOnChangeOnSelect: false,
});

/**
 * @description Use this, if you want to trigger onChange after selecting an option in multiSelector
 */
export const OnChangeOnSelectContextProvider = memo<{
	children: ReactNode;
	trigger?: boolean;
}>(({ children, trigger }) => {
	const value = useMemo(
		() => ({ triggerOnChangeOnSelect: trigger || false }),
		[trigger],
	);

	return (
		<onChangeOnSelectContext.Provider value={value}>
			{children}
		</onChangeOnSelectContext.Provider>
	);
});

export const MultiSearchSelector = memo(
	MultiSearchInner,
) as typeof MultiSearchInner;
// (MultiSearchSelector as FC).displayName = 'DownShiftMultiSearchSelector';

function MultiSearchInner<T extends Option>({
	checkIsAlreadySelectedFunction,
	renderSelectedItem,
	plusIcon,
	isFullWidthInput: _isFullWidth = false,
	renderOption: renderOptionOuter,
	renderMenuFooter,
	renderMenuHeader,
	renderPrevSelectedItem,
	placeholder,
	menuPlacement,
	menuWidth,
	menuIsWithArrow = false,
	options,
	loadOptions,
	onChange,
	onTabKey,
	value = [],
	emptyState,
	valueContainerWrapper,
	exceptSelectorPrefix,
	hideSelectedItems = true,
	disabled,
	defaultIsOpen = false,
	isShowingPlus = true,
	isHideExtras = false,
	shouldRenderOptionAsPill = false,
	hideMenuOnSelect = false,
	preOptions,
	placeholderElement: placeholderElementOuter,
}: MultiSearchSelectProps<T>) {
	const { triggerOnChangeOnSelect } = useContext(onChangeOnSelectContext);
	const menuReferenceElement = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const { onHighlightedIndexChange, scrollToIndexFunctionRef } =
		useOnHighlightedIndexChange();

	const {
		onSelect: onSelectParent,
		resetRecursiveState,
		currentItem: parentItem,
		onBack,
	} = useRecursiveSelect<T>();
	const { resetState, setState, state } = useSelectState<T>({
		parent: parentItem?.data,
	});

	const isRemovedItemWhileMenuOpen = useRef(false);
	const [selectedItems, setSelectedItems] = React.useState(value);
	const isFullWidthInput = _isFullWidth && selectedItems?.length === 0;
	const prevValue = usePrevious(value);
	useUpdateEffect(() => {
		if (!isEqual(value, prevValue)) setSelectedItems(value);
	}, [value]);

	const {
		getSelectedItemProps,
		getDropdownProps,
		addSelectedItem,
		removeSelectedItem,
	} = useMultipleSelection<T>({
		selectedItems,
		onSelectedItemsChange: ({ selectedItems = [] }) => {
			const uniqSelectedItems = hideSelectedItems
				? selectedItems
				: uniqBy(selectedItems, "id");

			if (!isOpen) return onChange(uniqSelectedItems);

			if (isOpen && triggerOnChangeOnSelect) {
				onChange(uniqSelectedItems);
			}

			setSelectedItems(uniqSelectedItems);
		},
	});

	const dropdownProps = getDropdownProps({
		onKeyDown: (event: { key: string; preventDefault: () => void }) => {
			if (onTabKey && event.key === "Tab" && isOpen && highlightedIndex > -1) {
				event.preventDefault();
				const highlightedItem = data[highlightedIndex];

				onTabKey({ highlightedItem, ...selectActions });
			}
		},
	});

	const data = React.useMemo(
		() =>
			hideSelectedItems
				? state.data.filter((item) => !find(selectedItems, { id: item.id }))
				: state.data,
		[hideSelectedItems, selectedItems, state.data],
	);

	const {
		isOpen,
		getToggleButtonProps,
		openMenu,
		getMenuProps,
		closeMenu,
		getInputProps,
		getComboboxProps,
		highlightedIndex,
		inputValue,
		setInputValue,
		getItemProps,
	} = useCombobox<T>({
		itemToString: () => "",
		items: data,
		defaultHighlightedIndex: 0, // after selection, highlight the first item.
		selectedItem: null,
		defaultIsOpen: defaultIsOpen,

		onIsOpenChange: ({ isOpen }) => {
			if (!isOpen) {
				resetRecursiveState();
				onChange(selectedItems);
				resetState();
				setInputValue("");
			}
		},
		onHighlightedIndexChange: onHighlightedIndexChange,
		stateReducer: (_state, actionAndChanges) => {
			const { changes, type, index } = actionAndChanges;

			const { InputKeyDownEnter, ItemClick, InputBlur } =
				useCombobox.stateChangeTypes;

			if (
				type === InputKeyDownEnter ||
				type === ItemClick ||
				type === InputBlur ||
				isRemovedItemWhileMenuOpen.current
			) {
				const newChanges = {
					...changes,
					highlightedIndex: hideSelectedItems ? 0 : index,
					isOpen:
						!hideMenuOnSelect &&
						(isRemovedItemWhileMenuOpen.current || !!changes.selectedItem), // keep the menu open after selection.
				};
				isRemovedItemWhileMenuOpen.current = false;

				return newChanges;
			}
			return changes;
		},

		onStateChange({ type, selectedItem }) {
			switch (type) {
				case useCombobox.stateChangeTypes.InputKeyDownEnter:
				case useCombobox.stateChangeTypes.ItemClick:
					if (selectedItem) {
						addSelectedItem(selectedItem);
					}
					break;
				default:
					break;
			}
		},
		environment: window,
	});

	const { onLoadMore } = useLoadOptions({
		resetState,
		setState,
		nextToken: state.nextToken,
		inputValue,
		loadOptions,
		isOpen,
		parent: parentItem?.data as any,
		preOptions,
		skip: state.data.length,
		options: options as never,
	});

	const renderOption = useCallback(
		(item: T, params?: { type: RenderOptionParams<T>["type"] }) => {
			const options: RenderOptionParams<T> = {
				onRecursiveSelect: (e) => {
					e.stopPropagation();
					onSelectParent(item, { searchTerm: inputValue });
					setInputValue("");
				},
				parent: parentItem?.data as any,
				type: params?.type || "menu",
			};

			return renderOptionOuter && renderOptionOuter(item, options);
		},
		[inputValue, onSelectParent, parentItem, renderOptionOuter, setInputValue],
	);

	const selectActions = React.useMemo<Actions<T>>(
		() => ({
			parent: parentItem?.data as any,
			inputValue,
			closeMenu,
			addSelectedItem,
			removeSelectedItem,
			setInputValue,
			onBack: () => {
				onBack();
				setInputValue(parentItem?.options?.searchTerm || "");
			},
		}),
		[
			addSelectedItem,
			closeMenu,
			inputValue,
			onBack,
			parentItem,
			removeSelectedItem,
			setInputValue,
		],
	);

	const renderSelectedItemWrapper = useCallback(
		(selectedItem: T, index: number) => {
			const renderItem = () => {
				if (!selectedItem) {
					return <></>;
				}

				if (renderSelectedItem)
					return renderSelectedItem(selectedItem as T, selectActions);

				const menuItem = renderOption(selectedItem as T, { type: "value" });

				try {
					if (shouldRenderOptionAsPill) {
						const selectedItemElem = React.cloneElement<PillProps>(
							menuItem as any,
							{
								isRemovable: !disabled,
								isRemovableOnHover: !disabled,
								onRemove: () => {
									if (isOpen) {
										isRemovedItemWhileMenuOpen.current = true;
										setTimeout(() => {
											inputRef?.current?.focus();
										}, 100);
									}
									removeSelectedItem(selectedItem);
								},
							},
						);

						return selectedItemElem;
					}

					const selectedItemElem = React.cloneElement<SelectorBoxProps>(
						menuItem as any,
						{
							isRemovable: !disabled,
							isRemovableOnHover: !disabled,
							variant: "hoverable",
							onRemove: () => {
								if (isOpen) {
									isRemovedItemWhileMenuOpen.current = true;
									setTimeout(() => {
										inputRef?.current?.focus();
									}, 100);
								}
								removeSelectedItem(selectedItem);
							},
						},
					);

					return selectedItemElem;
				} catch (e) {
					console.warn(e);
					return menuItem;
				}
			};

			const { style, ...props } = getSelectedItemProps({ selectedItem, index });
			return (
				<span
					key={`selected-item-${index}`}
					style={{ ...style, ...(isFullWidthInput && { width: "100%" }) }}
					{...props}
				>
					{renderItem()}
				</span>
			);
		},
		[
			disabled,
			getSelectedItemProps,
			isFullWidthInput,
			isOpen,
			removeSelectedItem,
			renderOption,
			renderSelectedItem,
			selectActions,
			shouldRenderOptionAsPill,
		],
	);

	const { style, ...toggleProps } = getToggleButtonProps();
	const placeholderElement =
		!isOpen &&
		(placeholderElementOuter ? (
			React.cloneElement(
				placeholderElementOuter,
				getToggleButtonProps({ disabled }),
			)
		) : (
			<span
				style={
					_isFullWidth
						? {
								width: "100%",
								height: 40,
								display: "flex",
								alignItems: "center",
								...style,
							}
						: {}
				}
				onClick={openMenu}
				{...toggleProps}
			>
				{placeholder ? placeholder : "Type here to start filtering..."}
			</span>
		));

	const renderSelectedItemsFunction = useMemo(() => {
		const selections = selectedItems || [];
		if (!isHideExtras) {
			return selections.map(renderSelectedItemWrapper);
		}

		if (selectedItems.length === 0) return <></>;

		const tooltipElements = (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "5px",
					padding: 10,
				}}
			>
				{selections.map(renderSelectedItemWrapper)}
			</div>
		);
		return <>{tooltipElements}</>;
	}, [isHideExtras, selectedItems, renderSelectedItemWrapper]);

	const plusJSX = useMemo(() => {
		if (!isShowingPlus || isOpen) return null;

		const props = getToggleButtonProps({ disabled });

		return plusIcon ? (
			React.cloneElement(plusIcon, props)
		) : (
			<span {...props}>
				<SelectorBox>
					<b>+</b>
				</SelectorBox>
			</span>
		);
	}, [disabled, getToggleButtonProps, isOpen, isShowingPlus, plusIcon]);

	const valueContainer = (
		<>
			{!_isFullWidth && selectedItems?.length === 0 && placeholderElement}
			<div
				style={{
					display: "flex",
					flexWrap: "nowrap",
					overflowY: "scroll",
					alignItems: "center",
					padding: 5,
					gap: "5px",
					...(_isFullWidth && {
						width: "100%",
						height: "inherit",
						minHeight: 40,
					}),
				}}
				{...getToggleButtonProps({ disabled })}
				onClick={openMenu}
			>
				{_isFullWidth && selectedItems?.length === 0 && placeholderElement}
				{selectedItems?.length > 0 && (
					<>
						{renderSelectedItemsFunction}

						{!_isFullWidth && plusJSX}
					</>
				)}
				<span
					style={_isFullWidth ? { minHeight: 40, border: "none" } : {}}
					{...getComboboxProps({ disabled })}
					onClick={openMenu}
				>
					{isOpen && (
						<input
							ref={dropdownProps.ref || inputRef}
							style={_isFullWidth ? { minHeight: 40, border: "none" } : {}}
							{...getInputProps(dropdownProps)}
							autoFocus
						/>
					)}
				</span>
			</div>
		</>
	);

	return (
		<>
			<div
				ref={menuReferenceElement}
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "nowrap",
					overflowY: "scroll",
					alignItems: "center",
					gap: "5px",
					...(_isFullWidth && {
						width: "100%",
						border: `1px solid ${gray}`,
						borderRadius: 4,
					}),
				}}
			>
				{valueContainerWrapper
					? valueContainerWrapper(valueContainer, { isOpen })
					: valueContainer}
			</div>

			{isOpen ? (
				<Menu<T>
					checkIsAlreadySelected={checkIsAlreadySelectedFunction}
					emptyState={emptyState}
					exceptSelectorPrefix={exceptSelectorPrefix}
					getItemProps={getItemProps}
					getMenuProps={getMenuProps}
					hasMore={Boolean(state.nextToken)}
					highlightedIndex={highlightedIndex}
					isLoaded={state.isLoaded}
					items={data}
					menuFooter={renderMenuFooter?.(selectActions)}
					menuHeader={renderMenuHeader?.(selectActions)}
					menuIsWithArrow={menuIsWithArrow}
					menuPlacement={menuPlacement}
					menuReferenceElement={menuReferenceElement}
					menuWidth={menuWidth}
					portalElement={document.body}
					renderOption={renderOption as any}
					renderPrevSelectedItem={renderPrevSelectedItem}
					scrollToIndex={scrollToIndexFunctionRef}
					onLoadMore={onLoadMore}
				/>
			) : (
				// package requires this function to be called anyway
				<span style={{ display: "none" }}>
					<ul {...getMenuProps()} />
					<input
						ref={dropdownProps.ref}
						style={isFullWidthInput ? { width: "100%", height: "100%" } : {}}
						{...getInputProps(dropdownProps)}
					/>
				</span>
			)}
		</>
	);
}
