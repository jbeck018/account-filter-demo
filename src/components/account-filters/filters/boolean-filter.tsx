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
	booleanFilterMap,
	booleanOptions,
	booleanValueOptions,
} from "./filter-components";
import { FlexRow, TextItem } from "./fitler-utils";
import type { SharedFilterInputTypes } from "./types";

export const BooleanFilter = ({ name, value }: SharedFilterInputTypes) => {
	const key = Object.keys(value)[0] as keyof typeof booleanFilterMap;
	const Filter = booleanFilterMap[key];
	const option = useMemo(() => booleanOptions.find((i) => i.id === key), [key]);
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
						? item.map((i) => i["id"])
						: isObject(item)
							? item["id"]
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
		};

		return mapping[renderType];
	}, [handleValueChange, key, renderType, value]);

	return (
		<FlexRow>
			<TextItem>{startCase(name)}</TextItem>
			<PropertySelector
				loadOptions={async () => ({ data: booleanOptions })}
				value={option as never}
				renderSelectedItem={renderDropdownOption}
				renderOption={renderDropdownOption}
				onChange={handleOperatorChange}
			/>
			<Filter {...(generateRenderProps() as any)} />
		</FlexRow>
	);
};
