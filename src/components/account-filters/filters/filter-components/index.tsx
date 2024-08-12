import {
	DatePicker,
	Input,
	type MultiSearchSelectProps,
	MultiSearchSelector,
	NumberInput,
	PropertySelector,
	type PropertySelectorProps,
} from "../../../ui-components";
import type { Option } from "../../../ui-components/selector-box";
import type { InputProps } from "./types";

type PropertySelectorOptionType = PropertySelectorProps<Option>;
type MultiPropertyType = MultiSearchSelectProps<Option>;

export enum RenderTypes {
	BooleanSelector = "BooleanSelector",
	PropertySelector = "PropertySelector",
	MultiSearch = "MultiSearch",
	Input = "Input",
	Number = "Number",
	Date = "Date",
}

export type RenderTypeMap = { [key in RenderTypes]?: Record<string, any> };

export const dateOptions = [
	{
		id: "equalTo",
		label: "On",
		renders: RenderTypes.Date,
	},
	{
		id: "greaterThan",
		label: "After",
		renders: RenderTypes.Date,
	},
	{
		id: "greaterThanOrEqualTo",
		label: "On or After",
		renders: RenderTypes.Date,
	},
	{
		id: "isNull",
		label: "Has No Value",
		renders: RenderTypes.BooleanSelector,
	},
	{
		id: "lessThan",
		label: "Before",
		renders: RenderTypes.Date,
	},
	{
		id: "lessThanOrEqualTo",
		label: "On or Before",
		renders: RenderTypes.Date,
	},
	{
		id: "notEqualTo",
		label: "Not On",
		renders: RenderTypes.Date,
	},
];

export const numberOptions = [
	{
		id: "equalTo",
		label: "=",
		renders: RenderTypes.Number,
	},
	{
		id: "greaterThan",
		label: ">",
		renders: RenderTypes.Number,
	},
	{
		id: "greaterThanOrEqualTo",
		label: ">=",
		renders: RenderTypes.Number,
	},
	{
		id: "isNull",
		label: "Has No Value",
		renders: RenderTypes.BooleanSelector,
	},
	{
		id: "lessThan",
		label: "<",
		renders: RenderTypes.Number,
	},
	{
		id: "lessThanOrEqualTo",
		label: "<=",
		renders: RenderTypes.Number,
	},
	{
		id: "notEqualTo",
		label: "!=",
		renders: RenderTypes.Number,
	},
];

//Date time filters
export const datetimeFilterMap = {
	/** Equal to the specified value. */
	equalTo: (props: InputProps<Date>) => <DatePicker {...props} />,
	/** Greater than the specified value. */
	greaterThan: (props: InputProps<Date>) => <DatePicker {...props} />,
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo: (props: InputProps<Date>) => <DatePicker {...props} />,
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull: (props: PropertySelectorOptionType) => (
		<PropertySelector {...props} />
	),
	/** Less than the specified value. */
	lessThan: (props: InputProps<Date>) => <DatePicker {...props} />,
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo: (props: InputProps<Date>) => <DatePicker {...props} />,
	/** Not equal to the specified value. */
	notEqualTo: (props: InputProps<Date>) => <DatePicker {...props} />,
};

//Int and Number Filters
export const numberFilterMap = {
	/** Equal to the specified value. */
	equalTo: (props: InputProps<number>) => <NumberInput {...props} />,
	/** Greater than the specified value. */
	greaterThan: (props: InputProps<number>) => <NumberInput {...props} />,
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo: (props: InputProps<number>) => (
		<NumberInput {...props} />
	),
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull: (props: PropertySelectorOptionType) => (
		<PropertySelector {...props} />
	),
	/** Less than the specified value. */
	lessThan: (props: InputProps<number>) => <NumberInput {...props} />,
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo: (props: InputProps<number>) => <NumberInput {...props} />,
	/** Not equal to the specified value. */
	notEqualTo: (props: InputProps<number>) => <NumberInput {...props} />,
};

export const textOptions = [
	{
		id: "equalTo",
		label: "Is",
		renders: RenderTypes.PropertySelector,
	},
	{
		id: "endsWithInsensitive",
		label: "Ends With",
		renders: RenderTypes.Input,
	},
	{
		id: "in",
		label: "Includes",
		renders: RenderTypes.MultiSearch,
	},
	{
		id: "isNull",
		label: "Has No Value",
		renders: RenderTypes.BooleanSelector,
	},
	{
		id: "includesInsensitive",
		label: "Contains",
		renders: RenderTypes.Input,
	},
	// {
	//   id: 'likeInsensitive',
	//   label: 'Like',
	// },
	{
		id: "notEndsWith",
		label: `Doesn't End With`,
		renders: RenderTypes.Input,
	},
	{
		id: "notEqualTo",
		label: "Is Not",
		renders: RenderTypes.PropertySelector,
	},
	{
		id: "notIn",
		label: `Doesn't Include`,
		renders: RenderTypes.MultiSearch,
	},
	{
		id: "notIncludesInsensitive",
		label: `Doesn't Contain`,
		renders: RenderTypes.Input,
	},
	// {
	//   id: 'notLikeInsensitive',
	//   label: 'Not Like',
	// },
	{
		id: "notStartsWithInsensitive",
		label: `Doesn't Start With`,
		renders: RenderTypes.Input,
	},
	{
		id: "startsWithInsensitive",
		label: "Starts With",
		renders: RenderTypes.Input,
	},
];

//String Filters
export const stringFilterMap = {
	/** Ends with the specified string (case-insensitive). */
	endsWithInsensitive: (props: InputProps<string>) => <Input {...props} />,
	/** Equal to the specified value. */
	equalTo: (props: PropertySelectorOptionType) => (
		<PropertySelector {...props} />
	),
	/** Included in the specified list. */
	in: (props: MultiPropertyType) => <MultiSearchSelector {...props} />,
	/** Contains the specified string (case-insensitive). */
	includesInsensitive: (props: InputProps<string>) => <Input {...props} />,
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull: (props: PropertySelectorOptionType) => (
		<PropertySelector {...props} />
	),
	/** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
	likeInsensitive: (props: InputProps<string>) => <Input {...props} />,
	/** Does not end with the specified string (case-sensitive). */
	notEndsWith: (props: InputProps<string>) => <Input {...props} />,
	/** Does not end with the specified string (case-insensitive). */
	notEndsWithInsensitive: (props: InputProps<string>) => <Input {...props} />,
	/** Not equal to the specified value. */
	notEqualTo: (props: PropertySelectorOptionType) => (
		<PropertySelector {...props} />
	),
	/** Not included in the specified list. */
	notIn: (props: MultiPropertyType) => <MultiSearchSelector {...props} />,
	/** Does not contain the specified string (case-insensitive). */
	notIncludesInsensitive: (props: InputProps<string>) => <Input {...props} />,
	/** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
	notLikeInsensitive: (props: InputProps<string>) => <Input {...props} />,
	/** Does not start with the specified string (case-insensitive). */
	notStartsWithInsensitive: (props: InputProps<string>) => <Input {...props} />,
	/** Starts with the specified string (case-insensitive). */
	startsWithInsensitive: (props: InputProps<string>) => <Input {...props} />,
};

export const booleanValueOptions = [
	{
		id: true,
		label: "True",
	},
	{
		id: false,
		label: "False",
	},
];

export const booleanOptions = [
	{
		id: "equalTo",
		label: "Is",
		renders: RenderTypes.BooleanSelector,
	},
	{
		id: "isNull",
		label: "Has No Value",
		renders: RenderTypes.BooleanSelector,
	},
	{
		id: "notEqualTo",
		label: "Is Not",
		renders: RenderTypes.BooleanSelector,
	},
];

export const booleanFilterMap = {
	/** Equal to the specified value. */
	equalTo: (props: PropertySelectorOptionType) => (
		<PropertySelector {...props} />
	),
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull: (props: PropertySelectorOptionType) => (
		<PropertySelector {...props} />
	),
	/** Not equal to the specified value. */
	notEqualTo: (props: PropertySelectorOptionType) => (
		<PropertySelector {...props} />
	),
};

export const enumOptions = [
	{
		id: "equalTo",
		label: "Is",
		renders: RenderTypes.PropertySelector,
	},
	{
		id: "in",
		label: "Includes",
		renders: RenderTypes.MultiSearch,
	},
	{
		id: "notEqualTo",
		label: "Is Not",
		renders: RenderTypes.PropertySelector,
	},
	{
		id: "isNull",
		label: "Has No Value",
		renders: RenderTypes.BooleanSelector,
	},
	{
		id: "notIn",
		label: `Doesn't Include`,
		renders: RenderTypes.MultiSearch,
	},
];

export const enumFilterMap = {
	/** Equal to the specified value. */
	equalTo: (props: PropertySelectorOptionType) => (
		<PropertySelector {...props} />
	),
	/** Included in the specified list. */
	in: (props: MultiPropertyType) => <MultiSearchSelector {...props} />,
	/** Is null (if `true`PropertySelectorOptionTypeis specified) or is not null (if `false` is specified). */
	isNull: (props: PropertySelectorOptionType) => (
		<PropertySelector {...props} />
	),
	/** Not equal to the specified value. */
	notEqualTo: (props: PropertySelectorOptionType) => (
		<PropertySelector {...props} />
	),
	/** Not included in the specified list. */
	notIn: (props: MultiPropertyType) => <MultiSearchSelector {...props} />,
};
