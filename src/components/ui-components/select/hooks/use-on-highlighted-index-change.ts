import { useCallback, useRef } from "react";

//import { ScrollToIndex } from '../helpers';

export const useOnHighlightedIndexChange = () => {
	const scrollToIndexFunctionRef = useRef<any>(null);

	const onHighlightedIndexChange = useCallback(
		({ highlightedIndex = 0 }: { highlightedIndex?: number }) => {
			if (highlightedIndex > 0)
				scrollToIndexFunctionRef.current?.(highlightedIndex);
		},
		[],
	);

	return { onHighlightedIndexChange, scrollToIndexFunctionRef };
};
