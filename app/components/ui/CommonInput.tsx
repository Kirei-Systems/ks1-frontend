import type { ComponentProps } from "react";

export interface CommonInputProps extends ComponentProps<"div"> {
	label: string;
	name?: string;
	onChange?: any;
}

export default function CommonInput({
	label,
	name,
	children,
	...props
}: CommonInputProps) {
	const extraClass = "grid grid-rows-2 items-center";
	return (
		<div className={`gap-1 ${extraClass}`} {...props}>
			{label && (
				<label htmlFor={name} className="text-sm font-bold">
					{label}
				</label>
			)}
			{children}
		</div>
	);
}
