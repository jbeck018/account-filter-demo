import type React from "react";
import { type CSSProperties, type ForwardedRef, forwardRef, memo } from "react";

import { Icon } from "../icons";
import { PillDiv, RemoveIcon } from "./pill.styles";

export type PillProps = {
	bgColor?: string;
	border?: CSSProperties["border"];
	className?: string;
	color?: string;
	/**
	 * show remove icon when true
	 */
	isRemovable?: boolean;
	/**
	 * show remove icon when hover on
	 */
	isRemovableOnHover?: boolean;

	onClick?: (event?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;

	/**
	 * callback when click at remove icon
	 */
	onRemove?: (event?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;

	text?: React.ReactElement;

	textClassName?: string;
};

export const PillInner = (
	{
		textClassName = "",
		className,
		bgColor,
		color,
		text,
		onClick,
		border,
		isRemovable = false,
		isRemovableOnHover,
		onRemove,
	}: PillProps,
	ref?: ForwardedRef<HTMLDivElement>,
) => {
	return (
		<PillDiv
			color={color}
			bgColor={bgColor}
			ref={ref}
			className={className}
			style={{ border }}
			onClick={onClick}
		>
			<span className={textClassName}>{text}</span>

			{isRemovable && (
				<RemoveIcon
					isRemovableOnHover={isRemovableOnHover}
					onMouseDown={(event) => {
						event.stopPropagation();
						if (typeof onRemove === "function") {
							onRemove(event);
						}
					}}
				>
					<Icon.X
						style={{
							maxHeight: 14,
							maxWidth: 14,
							display: "flex",
							marginLeft: 5,
							marginRight: -5,
						}}
					/>
				</RemoveIcon>
			)}
		</PillDiv>
	);
};

export const Pill = memo(forwardRef(PillInner)) as typeof PillInner;
// (Pill as FC).displayName = 'Pill';
