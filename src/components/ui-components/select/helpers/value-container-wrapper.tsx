import type { CSSProperties, ReactNode } from "react";

export function valueContainerWrapper(options: {
	className: string | undefined;
	errorMessage?: string;
	fieldContainerClassName?: string | undefined;
	hint?: string | undefined;
	label?: string | undefined;
	maxWidth100?: boolean;
	size?: "small" | "default";
	style?: CSSProperties;
	suffix?: ReactNode;
	variation?: "inlineSpace" | "inlinePacked" | "stacked";
}) {
	return (valueContainer: JSX.Element) => (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				gap: 5,
			}}
		>
			{valueContainer}
			{options?.suffix}
		</div>
	);
}
