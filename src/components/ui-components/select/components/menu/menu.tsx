import React, {
	memo,
	useCallback,
	useImperativeHandle,
	useMemo,
	useRef,
} from "react";
import ReactDOM from "react-dom";
import { usePopper } from "react-popper";
import { useDebounce } from "react-use";
import useIntersection from "react-use/lib/useIntersection";

import { useVirtualizer } from "@tanstack/react-virtual";
import type { VirtualItem } from "@tanstack/virtual-core";
import { isEmpty } from "lodash";

import type { MenuProps } from "../../helpers";
import { EmptyState } from "../empty-state";

import { Arrow, LI, MenuContent, MenuDiv, UL, arrowSize } from "./menu.styles";
import { modifiers } from "./utils";

const menuItemHeight = () => 35;

export const SelectMenu = memo(MenuInner) as <T>(
	props: MenuProps<T>,
) => JSX.Element;

function MenuInner<T extends Element>({
	checkIsAlreadySelected,
	getItemProps,
	getMenuProps,
	isLoaded,
	items,
	selectedItem,
	menuIsWithArrow,
	menuPlacement = "bottom-start" as const,
	menuReferenceElement,
	menuWidth: menuMinWidth,
	highlightedIndex,
	menuHeader,
	emptyState = <EmptyState />,
	scrollToIndex,
	menuFooter,
	hasMore,
	onLoadMore,
	renderOption: renderMenuItem,
	menuContentClassName,
	menuClassName,
	exceptSelectorPrefix = "",
	renderPrevSelectedItem,
	liHighligtedClassName,
}: MenuProps<T>) {
	const [menuElement, setMenuElement] = React.useState<HTMLElement | null>(
		null,
	);
	const { styles: popperStyles, attributes } = usePopper(
		menuReferenceElement?.current,
		menuElement,
		{
			placement: menuPlacement,
			modifiers: [
				...modifiers,
				{
					name: "offset",
					options: { offset: [0, 5 + (menuIsWithArrow ? arrowSize : 0)] },
				},
			],
		},
	);

	const ulRef = useRef<HTMLUListElement>(null);
	const rowVirtualizer = useVirtualizer({
		count: items?.length || 0,
		getScrollElement: () => ulRef.current,
		estimateSize: menuItemHeight,
		overscan: items?.length || 5,
	});

	const loadingContainerRef = useRef<HTMLDivElement>(null);
	const entry = useIntersection(loadingContainerRef, { threshold: 0.8 });
	useDebounce(
		() => {
			if (entry?.isIntersecting && hasMore) {
				onLoadMore?.();
			}
		},
		100,
		[entry?.isIntersecting, onLoadMore],
	);

	useImperativeHandle(scrollToIndex, () => rowVirtualizer.scrollToIndex, [
		rowVirtualizer.scrollToIndex,
	]);

	const menuArrow = (
		<Arrow data-popper-arrow style={popperStyles.arrow} {...attributes.arrow} />
	);

	const renderMenuItemWrapper = useCallback(
		(virtualItem: VirtualItem<T>) => {
			const item = items?.[virtualItem.index];
			let isPrevSelected = false;

			if (!item) return;
			if (checkIsAlreadySelected) {
				isPrevSelected = checkIsAlreadySelected(item);
			}

			return (
				<LI
					key={virtualItem.key}
					className={
						highlightedIndex === virtualItem.index && liHighligtedClassName
					}
					{...(getItemProps &&
						getItemProps({
							disabled: isPrevSelected,
							index: virtualItem.index,
							item,
							style: {
								margin: "3px 0",
								height: virtualItem.size,
								transform: `translateY(${virtualItem.start}px)`,
								...(isPrevSelected && { backgroundColor: "#EDF2F3" }),
								...((selectedItem as unknown as Record<"id", string>)?.id ===
									(item as unknown as Record<"id", string>).id && {
									background: "#E6FDF9",
								}),
								...(highlightedIndex === virtualItem.index && {
									background: "#EDF2F3",
								}),
							},
						}))}
				>
					{isPrevSelected && renderPrevSelectedItem
						? renderPrevSelectedItem(item)
						: renderMenuItem(item)}
				</LI>
			);
		},
		[
			items,
			checkIsAlreadySelected,
			selectedItem,
			highlightedIndex,
			liHighligtedClassName,
			getItemProps,
			renderPrevSelectedItem,
			renderMenuItem,
		],
	);

	const menuContent = useMemo(() => {
		const items = rowVirtualizer.getVirtualItems();

		if (isEmpty(items)) return emptyState;

		return (
			<>
				<li
					key="total-size"
					style={{ height: rowVirtualizer.getTotalSize() }}
				/>
				{items.filter(Boolean).map(renderMenuItemWrapper)}
				{hasMore && <div ref={loadingContainerRef}>Loading...</div>}
			</>
		);
	}, [emptyState, hasMore, renderMenuItemWrapper, rowVirtualizer]);

	return ReactDOM.createPortal(
		<MenuDiv
			ref={setMenuElement}
			className={menuClassName}
			data-except-selector={`${exceptSelectorPrefix}menu`}
			style={{
				...popperStyles.popper,
				width: menuMinWidth || menuReferenceElement?.current?.offsetWidth,
				overflow: "scroll",
			}}
			{...attributes.popper}
		>
			{menuIsWithArrow && menuArrow}
			<div
				{...(getMenuProps &&
					getMenuProps({
						ref: ulRef as any,
						style: { outlineColor: "transparent" },
					}))}
			>
				<MenuContent className={menuContentClassName}>
					<div data-attribute="select-menu-header">{menuHeader}</div>

					<UL data-attribute="select-menu-content">
						{isLoaded ? menuContent : <h4>Loading...</h4>}
					</UL>

					{menuFooter && (
						<div data-attribute="select-menu-footer" style={{ marginTop: 10 }}>
							{menuFooter}
						</div>
					)}
				</MenuContent>
			</div>
		</MenuDiv>,
		document.body,
	);
}
