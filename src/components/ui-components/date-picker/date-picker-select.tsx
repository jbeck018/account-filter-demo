import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import type { InputProps } from "../input/input";

export const DatePicker = (props: InputProps<Date>) => {
	const { value, onChange } = props;
	return (
		<ReactDatePicker
			selected={value}
			// onSelect={handleDateSelect}
			onChange={(date) => date && onChange(date)}
		/>
	);
};
