import { useEffect, useRef } from "react";
import { useIntersection, useLatest } from "react-use";

export type TableInfiniteScrollProps = {
	columnCount: number;
	onLoadMore: () => void;
	hasMore: boolean;
};

export function TableInfiniteScroll({
	columnCount,
	onLoadMore,
	hasMore,
}: TableInfiniteScrollProps) {
	//   const styles = useStyles({ gap, hasMore });

	const promise = useRef<() => Promise<void>>();

	const loadingContainerRef = useRef<HTMLDivElement>(null);

	const entry = useIntersection(loadingContainerRef, { threshold: 0.3 });
	const scrollReachedBottom = entry?.isIntersecting;

	const onLoadMoreRef = useLatest(onLoadMore);

	useEffect(() => {
		if (promise.current) return;

		if (hasMore && scrollReachedBottom) {
			promise.current = async () => {
				await onLoadMoreRef.current?.();
				promise.current = undefined;
			};

			promise.current?.();
		}
	}, [hasMore, scrollReachedBottom, onLoadMoreRef]);

	return (
		hasMore && (
			<tr>
				<td colSpan={columnCount}>
					<div ref={loadingContainerRef}>Loading...</div>
				</td>
			</tr>
		)
	);
}
