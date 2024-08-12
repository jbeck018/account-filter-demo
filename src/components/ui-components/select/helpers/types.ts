import type { BaseSyntheticEvent, RefObject } from "react";
import type { RefCallBack } from "react-hook-form";

import type { Placement } from "@popperjs/core";
import type { useVirtualizer } from "@tanstack/react-virtual";
import type { UseComboboxPropGetters } from "downshift";

export type ScrollToIndex = ReturnType<typeof useVirtualizer>["scrollToIndex"];

export type MenuBaseProps = {
	emptyState?: JSX.Element;
	menuClassName?: string;
	menuContentClassName?: string;
	menuIsWithArrow?: boolean;
	menuPlacement?: Placement;
	menuWidth?: number;
};

export type MultiSelectActions<T> = {
	addSelectedItem: (item: T) => void;
	closeMenu: () => void;
	removeSelectedItem: (item: T) => void;
	setInputValue: (inputValue: string) => void;
};

export type SelectActions<T> = {
	closeMenu: () => void;
	selectItem: (item: T | null) => void;
	setInputValue?: (inputValue: string) => void;
};

export type RenderOptionParams<T> = {
	onRecursiveSelect: (e: BaseSyntheticEvent) => void;
	parent: T;
	type: "value" | "menu";
};

export type SelectBaseProps<T> = MenuBaseProps & {
	checkIsAlreadySelectedFunction?: (item: T) => boolean;
	formRef?: RefCallBack;
	onBlur?: () => void;
	placeholder?: string;
	portalElement?: Element;
	renderOption?: (
		item: T,
		options?: Partial<RenderOptionParams<T>>,
	) => JSX.Element;
	renderPrevSelectedItem?: (item: T) => JSX.Element;
	renderSelectedItem?: (item: T) => JSX.Element;
	renderValueContainer?: (item: T) => JSX.Element;
	valueContainerWrapper?: (
		valueContainer: JSX.Element,
		options: { isOpen: boolean },
	) => JSX.Element;
};

export type AsyncSelect<T> = SelectBaseProps<T> & {
	loadOptions?: (filter?: {
		nextToken?: string;
		parent?: T;
		searchTerm?: string;
		skip?: number;
	}) => Promise<{ data: T[]; nextToken?: string }>;
	options?: never;
};

export type StaticSelect<T> = SelectBaseProps<T> & {
	loadOptions?: never;
	options: T[];
};

export type MenuProps<T> = MenuBaseProps & {
	checkIsAlreadySelected?: (item: T) => boolean;
	customZIndex?: number;
	exceptSelectorPrefix?: string;
	getItemProps?: UseComboboxPropGetters<T>["getItemProps"];
	getMenuProps?: UseComboboxPropGetters<T>["getMenuProps"];
	hasMore?: boolean;
	highlightedIndex?: number;
	isLoaded?: boolean;
	items?: T[];
	liHighligtedClassName?: string;
	menuFooter?: JSX.Element;
	menuHeader?: JSX.Element;
	menuReferenceElement?: RefObject<HTMLDivElement>;
	onLoadMore?: VoidFunction;
	portalElement?: Element;
	renderOption: (item: T) => JSX.Element;
	renderPrevSelectedItem?: (item: T) => JSX.Element;
	scrollToIndex?: RefObject<ScrollToIndex>;
	selectedItem?: T | null;
};

export type WithPartial<T, K extends PropertyKey = PropertyKey> = Partial<
	Pick<T, Extract<keyof T, K>>
> &
	Omit<T, K> extends infer O
	? { [P in keyof O]: O[P] }
	: never;
