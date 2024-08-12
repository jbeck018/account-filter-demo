import { useMemo } from "react";

import type { MultiSearchSelectProps } from "../components";
import type { Option } from "../helpers";

type UseBaseRenderOptionProps<T extends Option> = {
	getItemProps?: (item: T) => {
		hasChild?: boolean;
	};
	renderOption: (item: T) => JSX.Element;
};

export function useBaseRenderOption<T extends Option>({
	renderOption,
}: UseBaseRenderOptionProps<T>): {
	baseRenderOption: MultiSearchSelectProps<T>["renderOption"];
} {
	return useMemo(
		() => ({
			baseRenderOption: (item, options = {}) => {
				const element = renderOption(item);

				if (options.type === "value") return element;

				return (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: "100%",
						}}
					>
						<div>{element}</div>
					</div>
				);
			},
		}),
		[renderOption],
	);
}
