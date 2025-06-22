import type { ComponentProps } from "react";

function Button({ type = "button", ...props }: ComponentProps<"button">) {
	return <button {...props} />;
}

export default Button;
