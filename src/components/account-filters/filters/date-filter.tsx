import { isArray, isObject, startCase } from "lodash";
import { useCallback, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import {
	type Option,
	PropertySelector,
	renderDropdownOption,
} from "../../ui-components";
import {
	type RenderTypeMap,
	RenderTypes,
	booleanValueOptions,
	dateOptions,
	datetimeFilterMap,
} from "./filter-components";
import { FlexRow, TextItem } from "./fitler-utils";
import type { SharedFilterInputTypes } from "./types";

export const DateFilter = ({ name, value }: SharedFilterInputTypes) => {
	const key = Object.keys(value)[0] as keyof typeof datetimeFilterMap;
	const Filter = datetimeFilterMap[key];
	const option = useMemo(() => dateOptions.find((i) => i.id === key), [key]);
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
			[RenderTypes.Date]: {
				value: value[key] as Date,
				onChange: handleValueChange,
			},
		};

		return mapping[renderType];
	}, [handleValueChange, key, renderType, value]);

	return (
		<FlexRow>
			<TextItem>{startCase(name)}</TextItem>
			<PropertySelector
				loadOptions={async () => ({ data: dateOptions })}
				value={option as never}
				renderSelectedItem={renderDropdownOption}
				renderOption={renderDropdownOption}
				onChange={handleOperatorChange}
			/>
			<Filter {...(generateRenderProps() as any)} />
		</FlexRow>
	);
};
