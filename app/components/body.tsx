import React, { type ComponentProps } from "react";
import Nav from "./nav";
import NavBottom from "./nav-bottom";
import { cn } from "~/lib/utils";

export default function Body({ children, className }: ComponentProps<"div">) {
	return (
		<div
			className={cn("flex flex-col h-full max-md:overflow-hidden", className)}
		>
			<div className="overflow-auto grow">
				<Nav />
				{children}
			</div>
			<NavBottom className="shrink" />
		</div>
	);
}
