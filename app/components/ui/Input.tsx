import type { CommonInputProps } from "./CommonInput";
import CommonInput from "./CommonInput";

interface InputProps extends CommonInputProps {
	className?: string;
	type?: string;
	placeholder?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
	name,
	className = "",
	type = "text",
	value,

	placeholder,
	onChange,
	...props
}: InputProps) {
	const baseStyle = `w-full input `;

	return (
		<CommonInput name={name} {...props}>
			<input
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={`${baseStyle} ${className}`}
			/>
		</CommonInput>
	);
}
