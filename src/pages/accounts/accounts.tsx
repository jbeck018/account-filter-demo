import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { isArray, isString, uniqBy } from "lodash";
import { useCallback, useMemo, useState } from "react";
import { AccountTable } from "../../components";
import { AccountFilters } from "../../components/account-filters";
import type { AccountFilterNoRelations } from "../../components/account-filters/utils";
import { executeGraphql } from "../../generated/execute";
import type {
	Account,
	AccountFilter,
	AccountsOrderBy,
} from "../../generated/graphql";
import { AccountListQueryDocument } from "../../graphql/accounts/list-accounts";

export const Accounts = () => {
	const [filters, setFilters] = useState<Partial<AccountFilterNoRelations>>({});
	const sorting: AccountsOrderBy[] = useMemo(() => [], []);
	// const [cursor, setCursor] = useState<string>();
	const variables = useMemo(
		() => ({
			...(Object.keys(filters)?.length > 0 && {
				filter: filters as AccountFilter,
			}),
			...(sorting.length > 0 && { orderBy: sorting }),
			first: 100,
		}),
		[filters, sorting],
	);

	const { data, isFetching, isLoading, fetchNextPage, hasNextPage } =
		useInfiniteQuery({
			queryKey: ["accounts", variables],
			queryFn: () => executeGraphql(AccountListQueryDocument, variables),
			initialPageParam: null,
			getNextPageParam: (lastPage) =>
				lastPage?.allAccounts?.pageInfo?.hasNextPage
					? lastPage?.allAccounts?.pageInfo?.endCursor
					: null,
			placeholderData: keepPreviousData,
		});

	const accounts = useMemo(
		() =>
			data?.pages?.flatMap((page) =>
				page?.allAccounts?.nodes.map((account) => ({
					...account,
					opportunitiesByAccountId: account.opportunitiesByAccountId?.nodes,
					usersByAccountId: account.usersByAccountId.nodes,
				})),
			) || [],
		[data?.pages],
	);

	const handleFilterUpdates = useCallback(
		(data: Partial<AccountFilterNoRelations>) => {
			const startKeys = Object.keys(data);
			if (startKeys.length === 0) {
				setFilters({});
			}
			const inValidateData = Object.keys(data)
				.flatMap((i) => {
					const innerKeys = Object.keys(
						data[i as keyof Partial<AccountFilterNoRelations>],
					);
					if (innerKeys.length === 0) return false;
					return innerKeys.flatMap((j) => {
						const val =
							data[i as keyof Partial<AccountFilterNoRelations>][j as any];
						if (isArray(val) && val.length === 0) return false;
						if (isString(val) && val.length === 0) return false;

						return true;
					});
				})
				.some((i) => i !== true);
			if (!inValidateData) {
				setFilters(data);
			}
		},
		[],
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h3 style={{ marginBottom: 10 }}>Filters: </h3>
			<AccountFilters
				initialValue={filters}
				handleChanges={handleFilterUpdates}
			/>
			<AccountTable
				fetchMore={fetchNextPage}
				hasNextPage={Boolean(hasNextPage)}
				isLoading={isLoading}
				isLoadingMore={isFetching}
				data={uniqBy(accounts || [], "id") as unknown as Account[]}
			/>
			<div>
				({uniqBy(accounts || [], "id").length} of{" "}
				{data?.pages?.[0]?.allAccounts?.totalCount || 0} rows fetched)
			</div>
		</div>
	);
};
