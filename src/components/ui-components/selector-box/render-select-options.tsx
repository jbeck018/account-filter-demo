import { SelectorBox } from "./selector-box";

export type Option = Record<"id", string> & {
	label?: any;
};

export const renderDropdownOption = (item: Option) => (
	<SelectorBox id={item.id}>{item.label}</SelectorBox>
);
