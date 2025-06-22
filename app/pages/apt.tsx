import { aptsRetrieve } from "~/api";
import type { Route } from "./+types/apt";
import { redirect } from "react-router";
import Body from "~/components/body";

export function meta() {
	return [{ title: "Salve" }, { name: "description", content: "ks" }];
}

export async function loader({ params: { apt } }: Route.LoaderArgs) {
	const data = (await aptsRetrieve({ path: { hashid: apt } })).data;
	if (data == null || data === undefined) {
		return redirect("/404");
	}
	return data;
}

export default function Apt({ loaderData }: Route.ComponentProps) {
	const { image, description } = loaderData;
	return (
		<Body>
			<div className="flex flex-col">
				<img alt="sorry" src={image} />
				<p className="text-base-content">{description}</p>
			</div>
		</Body>
	);
}
