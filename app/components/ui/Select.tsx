import type { CommonInputProps } from "./CommonInput";
import CommonInput from "./CommonInput";

interface SelectOption {
	value: string | number;
	label: string;
}

interface SelectProps extends CommonInputProps {
	className?: string;
	value?: string | number;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	options: SelectOption[];
}

export default function Select({
	name,
	className = "",
	value,

	onChange,
	options,
	...props
}: SelectProps) {
	const baseStyle = `select`;

	return (
		<CommonInput name={name} {...props}>
			<select
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				className={`${baseStyle} ${className}`}
			>
				{options.map((opt) => (
					<option key={opt.value} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>
		</CommonInput>
	);
}
