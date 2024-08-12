import { isArray, isObject, startCase } from "lodash";
import { useCallback, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { AccountType } from "../../../generated/graphql";
import {
	type Option,
	PropertySelector,
	SelectorBox,
	renderDropdownOption,
} from "../../ui-components";
import {
	type RenderTypeMap,
	RenderTypes,
	booleanValueOptions,
	enumFilterMap,
	enumOptions,
} from "./filter-components";
import { FlexRow, TextItem } from "./fitler-utils";
import type { SharedFilterInputTypes } from "./types";

export const TypeFilter = ({ name, value }: SharedFilterInputTypes) => {
	const key = Object.keys(value)[0] as keyof typeof enumFilterMap;
	const Filter = enumFilterMap[key];
	const option = useMemo(() => enumOptions.find((i) => i.id === key), [key]);
	const renderType = option?.renders;
	const { reset, getValues } = useFormContext();

	const handleOperatorChange = useCallback(
		(item?: any) => {
			if (!item) return;
			const currentValues = getValues();
			reset({
				...currentValues,
				[name]: {
					[item.id]: undefined, //to not break table.
				},
			});
		},
		[getValues, name, reset],
	);

	const handleValueChange = useCallback(
		(item?: string | Option | Option[]) => {
			console.log(item);
			if (!item) return;
			const currentValues = getValues();
			reset({
				...currentValues,
				[name]: {
					[key]: isArray(item)
						? item.map((i) => i["id"])
						: isObject(item)
							? item["id"]
							: item,
				},
			});
		},
		[getValues, key, name, reset],
	);

	const accountTypeOptions = useMemo(
		() => [
			{
				id: AccountType.Customer,
				label: "Customer",
			},
			{
				id: AccountType.Churned,
				label: "Churned",
			},
			{
				id: AccountType.Lead,
				label: "Lead",
			},
			{
				id: AccountType.Prospect,
				label: "Prospect",
			},
		],
		[],
	);

	const generateRenderProps = useCallback(() => {
		if (!renderType) {
			return {
				value: "",
				onChange: console.log,
			};
		}

		const mapping: RenderTypeMap = {
			[RenderTypes.BooleanSelector]: {
				loadOptions: async () => ({ data: booleanValueOptions }),
				onChange: handleValueChange,
				value: booleanValueOptions.find((i) => i.id === value[key]),
				renderOption: renderDropdownOption,
				renderSelectedItem: renderDropdownOption,
			},
			[RenderTypes.MultiSearch]: {
				loadOptions: async () => ({ data: accountTypeOptions }),
				onChange: handleValueChange,
				value: value[key] as string[],
				renderSelectedItem: (item: any) => {
					return <SelectorBox>{item.label ? item.label : item}</SelectorBox>;
				},
				renderOption: renderDropdownOption,
			},
			[RenderTypes.PropertySelector]: {
				loadOptions: async () => ({ data: accountTypeOptions }),
				value: value[key] as string,
				renderSelectedItem: (item: any) =>
					item && <SelectorBox>{item}</SelectorBox>,
				onChange: handleValueChange,
				renderOption: renderDropdownOption,
			},
		};

		return mapping[renderType];
	}, [accountTypeOptions, handleValueChange, key, renderType, value]);

	return (
		<FlexRow>
			<TextItem>{startCase(name)}</TextItem>
			<PropertySelector
				loadOptions={async () => ({ data: enumOptions })}
				value={option as never}
				renderSelectedItem={renderDropdownOption}
				renderOption={renderDropdownOption}
				onChange={handleOperatorChange}
			/>
			<Filter {...(generateRenderProps() as any)} />
		</FlexRow>
	);
};
