import React, {
	type CSSProperties,
	type ForwardedRef,
	forwardRef,
	memo,
	useCallback,
	useState,
} from "react";
import { Icon } from "../icons";
import { IconStyle, RemoveIcon, SelectorBoxDiv } from "./selector-box.styles";

export type OnClickPropsType = {
	id?: string;
};

export type SelectorBoxProps = {
	/**
	 * element which need to styled
	 */
	children?: React.ReactNode | JSX.Element | JSX.Element[];
	/**
  /**
   * additional class
   */
	className?: string;
	classes?: {
		content?: string;
	};
	/**
	 * add custom attributes on element
	 */
	customAttributes?: Record<string, string>;
	/**
	 * font color if not default
	 */
	fontColor?: string;
	/**
	 * Icon
	 */
	icon?: JSX.Element;
	/**
	 * id element id
	 */
	id?: string;
	/**
	 * is editable
	 */
	isEditable?: boolean;

	isEllipsis?: boolean;
	/**
	 * send true for disabled state
	 */
	isEmpty?: boolean;

	/**
	 * show remove icon when true
	 */
	isRemovable?: boolean;

	/**
	 * show remove icon when hover on
	 */
	isRemovableOnHover?: boolean;

	/**
	 * callback when click at selector box
	 */
	onClick?: (
		event?: React.MouseEvent<HTMLSpanElement, MouseEvent>,
		props?: OnClickPropsType,
	) => void;
	/**
	 * callback when click at remove icon
	 */
	onRemove?: (event?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
	/**
	 * inline styles
	 */
	style?: CSSProperties;
	suffix?: JSX.Element;

	/**
	 * variant
	 */
	variant?: "default" | "hoverable";
	viewVariant?: string;
};

const SelectorBoxInner = (
	{
		children,
		suffix,
		icon,
		isRemovable,
		isRemovableOnHover = false,
		isEditable,
		isEmpty,
		variant = "hoverable",
		onClick,
		id,
		onRemove,
		className: outerClassName,
		style,
		fontColor,
		customAttributes,
		classes = {},
		viewVariant,
		isEllipsis = true,
	}: SelectorBoxProps,
	ref?: ForwardedRef<HTMLDivElement>,
) => {
	const isIcon = Boolean(icon);
	const [isHovered, setIsHovered] = useState(false);
	const [isRemoving, setIsRemoving] = useState(false);

	const handleClick = useCallback(
		(event: React.MouseEvent<HTMLSpanElement, MouseEvent> | undefined) => {
			if (isRemoving) return;
			onClick?.(event, { id });
		},
		[id, isRemoving, onClick],
	);

	return (
		<SelectorBoxDiv
			ref={ref}
			isEditable={isEditable}
			isRemovableOnHover={isRemovableOnHover}
			isEmpty={isEmpty}
			isRemovable={isRemovable}
			className={outerClassName}
			data-variation={variant}
			style={style}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			{...customAttributes}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					overflow: "hidden",
				}}
				data-variation={variant}
				onClick={handleClick}
			>
				{isIcon && (
					<IconStyle>
						{React.cloneElement(icon as React.ReactElement)}
					</IconStyle>
				)}
				{children && (
					<div
						className={classes.content}
						color={fontColor}
						style={
							isEllipsis
								? {
										width: "100%",
										whiteSpace: "nowrap",
										overflow: "hidden",
										textOverflow: "ellipsis",
									}
								: {}
						}
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-ignore
						variant={viewVariant || "normal-bold-13/24-fira"}
					>
						{children}
					</div>
				)}

				{suffix && suffix}
			</div>

			{isHovered && isRemovable && (
				<RemoveIcon
					isRemovableOnHover={isRemovableOnHover}
					data-except-selector="x-span"
					onMouseDown={(event) => {
						event.stopPropagation();
						event.preventDefault();
						if (typeof onRemove === "function") {
							onRemove(event);
						}
					}}
					onMouseEnter={() => setIsRemoving(true)}
					onMouseLeave={() => setIsRemoving(false)}
				>
					<Icon.X />
				</RemoveIcon>
			)}
		</SelectorBoxDiv>
	);
};

export const SelectorBox = memo(
	forwardRef(SelectorBoxInner),
) as typeof SelectorBoxInner;
