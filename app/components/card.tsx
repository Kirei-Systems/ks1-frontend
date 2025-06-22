import type { Component, ComponentProps, ReactElement, ReactNode } from "react";
import * as icons from "lucide-react";
import { cn } from "~/lib/utils";
import type { AptReadable, PropertyTypeEnum } from "~/api";
import { Link } from "react-router";

function Badge({
	value,
	icon,
	color,
	...props
}: {
	value: ReactNode;
	icon: ReactNode;
	color: string;
} & ComponentProps<"p">) {
	return (
		<div
			className={cn("badge badge-sm badge-primary shrink badge-outline", color)}
			{...props}
		>
			{icon}
			{value}
		</div>
	);
}

const property_type_label: {
	[key in PropertyTypeEnum]: string;
} = {
	HOUSE: "casa",
	APARTMENT: "apartamento",
};

export default function Card({
	hashid,
	description,
	property_type,
	address,
	image,
	value,
	size,
}: AptReadable): ReactElement {
	const badges = [
		// { value: address, icon: <icons.Locate />, color: "badge-primary" },
		{ value: value, icon: <icons.DollarSign />, color: "badge-accent" },
		{ value: size, icon: <icons.Grid />, color: "badge-secondary" },
	];
	const tp = property_type_label[property_type];
	console.log(hashid);
	return (
		<Link key={`${hashid}`} to={`/imovel/${hashid}`}>
			<div className="card h-80 card-border">
				<figure className="h-[75%]">
					<img alt="sorry" className="object-cover size-full" src={image} />
				</figure>
				<div className="card-body">
					<p className="text-base-content">{description}</p>
					<p className="text-base-content/70">{tp}</p>
					<div className="flex flex-row gap-1 flex-wrap">
						{badges.map((b, i) => (
							<Badge key={`${i + 0}`} {...b} />
						))}
					</div>
				</div>
			</div>
		</Link>
	);
}
