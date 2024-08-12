import {
	type Dispatch,
	type SetStateAction,
	useCallback,
	useState,
} from "react";

import { isFunction } from "lodash";

import type { Option } from "../select";

export const DEFAULT_STATE = {
	data: [],
	nextToken: "",
	isLoaded: false,
};

type UseSelectState<T> = {
	parent?: T;
};

type State<T> = Record<
	string | "root",
	{
		data: T[];
		isLoaded: boolean;
		nextToken?: string;
	}
>;

export const useSelectState = <T extends Option>({
	parent,
}: UseSelectState<T> = {}) => {
	const id = parent?.id || "root";

	const [state, _setState] = useState<State<T>>({ [id]: DEFAULT_STATE });

	const resetState = useCallback(() => {
		_setState({ [id]: DEFAULT_STATE });
	}, [id]);

	const setState: Dispatch<SetStateAction<State<T>[string]>> = useCallback(
		(cb) => {
			if (isFunction(cb)) {
				return _setState((prev) => ({ ...prev, [id]: cb(prev[id]) }));
			}

			return _setState((prev) => ({ ...prev, [id]: cb }));
		},
		[id],
	);

	return { state: state[id] || DEFAULT_STATE, setState, resetState };
};
