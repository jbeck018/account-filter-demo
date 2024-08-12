import { useCallback } from "react";
import useDebounce from "react-use/lib/useDebounce";

import union from "lodash/union";

type LoadOptionsWrapperProps = {
	nextToken?: string;
	searchTerm?: string;
	skip?: number;
};

export function useLoadOptions({
	loadOptions,
	inputValue,
	isOpen,
	setState,
	nextToken,
	resetState,
	parent = null,
	options = null,
	skip = 0,
	preOptions = null,
}) {
	const loadOptionsWrapper = useCallback(
		async (
			{ searchTerm, nextToken, skip }: LoadOptionsWrapperProps,
			isLoadMore = false,
		) => {
			if (!loadOptions && !options) {
				return;
			}

			if (options) {
				setState({
					data: (options as any[]).filter((item) =>
						searchTerm?.trim()
							? item.label?.toLowerCase()?.includes(searchTerm.trim())
							: item,
					),
					isLoaded: true,
				});
				return;
			}

			if (loadOptions) {
				const response = await loadOptions({
					searchTerm,
					nextToken,
					parent,
					skip,
				});
				setState((prevData) => {
					//checking for duplicates is necessary for adding No Type and No Status to selector options.
					const data = isLoadMore
						? union(prevData.data, response.data)
						: [
								...((preOptions as unknown as any[])?.filter((i) =>
									i?.label?.toLowerCase()?.includes(searchTerm),
								) || []),
								...(response.data || []),
							];

					return {
						data,
						nextToken: response.nextToken || response.endCursor,
						isLoaded: true,
					};
				});
			}
		},
		[loadOptions, options, setState, parent, preOptions],
	);

	const onLoadMore = useCallback(
		() => loadOptionsWrapper({ searchTerm: inputValue, nextToken, skip }, true),
		[loadOptionsWrapper, inputValue, nextToken, skip],
	);

	useDebounce(
		async () => {
			if (!isOpen || (!loadOptions && !options)) return;

			resetState();
			await loadOptionsWrapper({ searchTerm: inputValue });
		},
		500,
		[inputValue, isOpen, loadOptionsWrapper, loadOptions, options],
	);

	return { onLoadMore };
}
