import { last } from "lodash";
import { useMemo, useState } from "react";
import type { Option } from "../../selector-box";

type OnSelectOptions = Partial<{
	searchTerm: string;
}>;

export type RecursiveStateItem<T extends Option = Option> = {
	data: T;
	options: OnSelectOptions;
};

export function useRecursiveSelect<T extends Option = Option>() {
	const [items, setItems] = useState<RecursiveStateItem<T>[]>([]);

	return useMemo(() => {
		const currentItem = last(items);

		const onSelect = (item: T, options?: OnSelectOptions) =>
			setItems((prev) => [...prev, { data: item, options }] as any[]);

		return {
			onSelect,
			currentItem,
			resetRecursiveState: () => setItems([]),
			onBack: () => setItems((prev) => prev.slice(0, -1)),
		};
	}, [items]);
}
