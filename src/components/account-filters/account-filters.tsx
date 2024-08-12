// import { AccountFilter } from "../../generated/graphql"
import { isEmpty, omit } from "lodash";
import { useCallback, useEffect } from "react";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { AccountStatus, AccountType } from "../../generated/graphql";
import { type Option, renderDropdownOption } from "../ui-components";
import { Container, Form, InputSelect } from "./account-filters.styles";
import {
	type AccountFilterNoRelations,
	availableFields,
	fieldMappings,
} from "./utils";

export type AccountFiltersProps = {
	initialValue: Partial<AccountFilterNoRelations>;
	handleChanges: (values: Partial<AccountFilterNoRelations>) => void;
};
export const AccountFilters = ({
	initialValue,
	handleChanges,
}: AccountFiltersProps) => {
	const form = useForm<AccountFilterNoRelations>({
		defaultValues: initialValue,
		mode: "onChange",
	});

	const { handleSubmit, watch, reset, getValues } = form;
	const onSubmit: SubmitHandler<AccountFilterNoRelations> = useCallback(
		(data) => handleChanges(data),
		[handleChanges],
	);
	const values = watch();

	useEffect(() => {
		const subscription = watch(() => handleSubmit(onSubmit)());
		return () => subscription.unsubscribe();
	}, [handleSubmit, onSubmit, watch]);

	const handleAddAnotherOption = (values: { id: string; label: string }[]) => {
		const currentValues = getValues();
		if (values.length === 0) {
			return reset({});
		}
		const newItems = values
			.filter(
				(item) => !currentValues[item.id as keyof AccountFilterNoRelations],
			)
			.reduce(
				(acc, next) => ({
					...acc,
					[next.id]: {},
				}),
				{},
			);
		const removedItems = Object.keys(currentValues).filter(
			(key) => !values.map((item) => item.id).includes(key),
		);

		reset({ ...omit(currentValues, removedItems), ...newItems });
	};

	const generateValue = (name: string) => {
		if (name.includes("StringFilter")) {
			return {
				equalTo: "",
			};
		}

		if (name.includes("NumberFilter")) {
			return {
				equalTo: 0,
			};
		}

		if (name.includes("BooleanFilter")) {
			return {
				equalTo: true,
			};
		}

		if (name.includes("DateFilter")) {
			return {
				equalTo: new Date(),
			};
		}

		if (name.includes("StatusFilter")) {
			return {
				equalTo: AccountStatus.Active,
			};
		}

		if (name.includes("TypeFilter")) {
			return {
				equalTo: AccountType.Lead,
			};
		}
	};

	const renderItem = useCallback(
		(item: Option) => {
			const Component = fieldMappings[item.id as keyof typeof values];

			const baseValue = values[item.id as keyof typeof values];

			return (
				<Component
					key={item.id}
					value={
						isEmpty(baseValue) ? generateValue(Component.toString()) : baseValue
					}
					name={item.id}
				/>
			) as JSX.Element;
		},
		[values],
	);

	return (
		<FormProvider {...form}>
			<Container>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputSelect
						isFullWidthInput
						options={
							availableFields.filter(
								(i) => !Object.keys(values).includes(i.id),
							) as any
						}
						value={Object.keys(values).map((i) => ({ id: i, label: i })) as any}
						renderOption={renderDropdownOption}
						renderSelectedItem={renderItem}
						onChange={handleAddAnotherOption as any}
					/>
				</Form>
			</Container>
		</FormProvider>
	);
};
