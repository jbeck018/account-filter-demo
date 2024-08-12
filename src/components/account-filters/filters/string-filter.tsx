import { isArray, isObject, startCase } from "lodash";
import { useCallback, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { executeGraphql } from "../../../generated/execute";
import { AccountDataLoaders } from "../../../graphql/accounts/list-accounts";
import {
	type MultiSearchSelectProps,
	type Option,
	PropertySelector,
	SelectorBox,
	renderDropdownOption,
} from "../../ui-components";
import type { AccountFilterNoRelations } from "../utils";
import {
	type RenderTypeMap,
	RenderTypes,
	booleanValueOptions,
	stringFilterMap,
	textOptions,
} from "./filter-components";
import { FlexRow, TextItem } from "./fitler-utils";
import type { SharedFilterInputTypes } from "./types";

export const StringFilter = ({ name, value }: SharedFilterInputTypes) => {
	const key = Object.keys(value)[0] as keyof typeof stringFilterMap;
	const Filter = stringFilterMap[key];
	const option = useMemo(() => textOptions.find((i) => i.id === key), [key]);
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
			if (!item) return;
			const currentValues = getValues();
			reset({
				...currentValues,
				[name]: {
					[key]: isArray(item)
						? item.map((i) => i[typeof i.id === "boolean" ? "id" : "label"])
						: isObject(item)
							? item[typeof item.id === "boolean" ? "id" : "label"]
							: item,
				},
			});
		},
		[getValues, key, name, reset],
	);

	const loadOptions: MultiSearchSelectProps<Option>["loadOptions"] =
		useCallback(
			async (filter?: { nextToken?: string; searchTerm?: string }) => {
				const getData = await executeGraphql(AccountDataLoaders, {
					...(filter?.nextToken && { after: filter.nextToken }),
					first: 20,
					...(filter?.searchTerm && {
						filter: {
							[key]: { like: `%${filter.searchTerm}%` },
						},
					}),
				});

				return {
					data: getData?.data?.nodes.map((i) => ({
						id: String(i.id),
						label: i[name as keyof AccountFilterNoRelations],
					})) as Option[],
					nextToken: getData?.data?.pageInfo?.endCursor,
				};
			},
			[key, name],
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
			[RenderTypes.Input]: {
				value: value[key] as string,
				onChange: handleValueChange,
			},
			[RenderTypes.MultiSearch]: {
				loadOptions: loadOptions,
				onChange: handleValueChange,
				value: value[key] as string[],
				renderSelectedItem: (item: any) => {
					return <SelectorBox>{item.label ? item.label : item}</SelectorBox>;
				},
				renderOption: renderDropdownOption,
			},
			[RenderTypes.PropertySelector]: {
				loadOptions: loadOptions,
				value: value[key] as string,
				renderSelectedItem: (item: any) =>
					item && <SelectorBox>{item}</SelectorBox>,
				onChange: handleValueChange,
				renderOption: renderDropdownOption,
			},
		};

		return mapping[renderType];
	}, [handleValueChange, key, loadOptions, renderType, value]);

	return (
		<FlexRow>
			<TextItem>{startCase(name)}</TextItem>
			<PropertySelector
				loadOptions={async () => ({ data: textOptions })}
				value={option as never}
				renderSelectedItem={renderDropdownOption}
				renderOption={renderDropdownOption}
				onChange={handleOperatorChange}
			/>
			<Filter {...(generateRenderProps() as any)} />
		</FlexRow>
	);
};
