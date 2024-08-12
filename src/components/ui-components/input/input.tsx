import { useState } from "react";
import { useDebounce } from "react-use";

export type InputProps<T> = {
	value: T;
	onChange: (value: T) => void;
	[x: string]: any;
};

export const Input = (props: InputProps<string>) => {
	const { value, onChange: handleChange } = props;
	const [innerValue, setInnerValue] = useState<string>(value || "");

	useDebounce(() => handleChange(innerValue), 400, [innerValue]);
	return (
		<input
			value={value}
			style={{ height: "inherit", maxHeight: 20, width: "100%", minWidth: 75 }}
			placeholder={"Enter a Value"}
			onChange={(e) => setInnerValue(e.target.value)}
			type="text"
		/>
	);
};

export const NumberInput = (props: InputProps<number>) => {
	const { value, onChange: handleChange } = props;
	const [innerValue, setInnerValue] = useState<number>(value || 0);

	useDebounce(() => handleChange(innerValue), 400, [innerValue]);

	return (
		<input
			style={{ height: "inherit", maxHeight: 20, width: "100%", minWidth: 40 }}
			value={value}
			placeholder={"Enter a Number"}
			onChange={(e) => {
				setInnerValue(Number(e.target.value));
			}}
			type="number"
		/>
	);
};
