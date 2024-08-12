export type InputProps<T> = {
	value: T;
	onChange: (value: T) => void;
};

type OptionType = { [x: string]: string };
type OptionsType = Array<OptionType>;

export type SelectProps = InputProps<Record<string, string>[]> & {
	options: OptionsType;
	isMultiSelect?: boolean;
};

export type BooleanSelectProps = InputProps<Record<string, string>[]> & {
	options: OptionsType;
	isMultiSelect?: boolean;
};
