import React, { useMemo } from "react";

import "../../index.css";

import { startCase } from "lodash";

import {
	type AccessorFn,
	type ColumnDef,
	type OnChangeFn,
	type Row,
	type SortingState,
	//   ColumnDef,
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";

import { useVirtualizer } from "@tanstack/react-virtual";
import type { Account } from "../../generated/graphql";
import {
	TableInfiniteScroll,
	type TableInfiniteScrollProps,
} from "../table-infinite-scroll/table-infinite-scroll";
import {
	StyledTable,
	TableBody,
	TableContainer,
	TableData,
	TableHead,
	TableHeadGroup,
	TableRow,
	VirtualizedTableRow,
} from "./account-table.styles";

export type AccountTableProps = {
	data: Account[];
	isLoading: boolean;
	fetchMore: () => void;
	isLoadingMore: boolean;
	hasNextPage: boolean;
};

export const AccountTable = ({
	data,
	isLoading,
	isLoadingMore,
	fetchMore,
	hasNextPage,
}: AccountTableProps) => {
	//we need a reference to the scrolling element for logic down below
	const tableContainerRef = React.useRef<HTMLDivElement>(null);

	const [sorting, setSorting] = React.useState<SortingState>([]);
	const columnHelper = createColumnHelper<Account>();

	const columns = useMemo(
		() =>
			data?.length > 0
				? (Object.keys(data?.[0] || [])
						.map((key) => {
							if (
								key === "usersByAccountId" ||
								key === "opportunitiesByAccountId"
							) {
								return;
								//  columnHelper.accessor(key as unknown as AccessorFn<Account>, { id: key, cell: info => info.getValue() })
							}

							// if (key === 'opportunitiesByAccountId') {
							//   return columnHelper.accessor(key as unknown as AccessorFn<Account>, { id: key, cell: info => info.getValue() });
							// }

							return columnHelper.accessor(
								key as unknown as AccessorFn<Account>,
								{
									id: key,
									cell: (info) => info.getValue(),
									header: startCase(key),
								},
							);
						})
						.filter(Boolean) as ColumnDef<Account, any>[])
				: [],
		[columnHelper, data],
	);

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
		},
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		manualSorting: true,
		debugTable: true,
	});

	const handleSortingChange: OnChangeFn<SortingState> = (updater) => {
		setSorting(updater);
		if (table.getRowModel().rows.length) {
			rowVirtualizer.scrollToIndex?.(0);
		}
	};

	table.setOptions((prev) => ({
		...prev,
		onSortingChange: handleSortingChange,
	}));

	const { rows } = table.getRowModel();

	const rowVirtualizer = useVirtualizer({
		count: rows.length,
		estimateSize: () => 33,
		getScrollElement: () => tableContainerRef.current,
		measureElement:
			typeof window !== "undefined" &&
			navigator.userAgent.indexOf("Firefox") === -1
				? (element) => element?.getBoundingClientRect().height
				: undefined,
		overscan: rows.length || 5,
	});

	const tableInfiniteScrollProps: TableInfiniteScrollProps = {
		hasMore: hasNextPage,
		columnCount: columns.length,
		onLoadMore: fetchMore,
	};

	if (isLoading) {
		return <>Loading...</>;
	}

	return (
		<TableContainer className="container" ref={tableContainerRef}>
			<StyledTable>
				<TableHead>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<TableHeadGroup
										key={header.id}
										style={{
											width: header.getSize(),
										}}
									>
										<div
											{...{
												className: header.column.getCanSort()
													? "cursor-pointer select-none"
													: "",
												onClick: header.column.getToggleSortingHandler(),
											}}
										>
											{flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)}
											{{
												asc: " 🔼",
												desc: " 🔽",
											}[header.column.getIsSorted() as string] ?? null}
										</div>
									</TableHeadGroup>
								);
							})}
						</TableRow>
					))}
				</TableHead>
				<TableBody
					style={{
						height: `${rowVirtualizer.getTotalSize()}px`,
					}}
				>
					{rowVirtualizer.getVirtualItems().map((virtualRow) => {
						const row = rows[virtualRow.index] as Row<Account>;
						return (
							<VirtualizedTableRow
								data-index={virtualRow.index}
								ref={(node) => rowVirtualizer.measureElement(node)}
								key={row.id}
								style={{
									transform: `translateY(${virtualRow.start}px)`,
								}}
							>
								{row.getVisibleCells().map((cell) => {
									return (
										<TableData
											key={cell.id}
											style={{
												width: cell.column.getSize(),
											}}
										>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableData>
									);
								})}
							</VirtualizedTableRow>
						);
					})}
				</TableBody>
				{hasNextPage && <TableInfiniteScroll {...tableInfiniteScrollProps} />}
			</StyledTable>
			{isLoadingMore && <div>Fetching More...</div>}
		</TableContainer>
	);
};
