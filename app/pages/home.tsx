// import { Showcase, Slide } from "~/components/showcase-slides";
import type { Route } from "./+types/home";
import Card from "~/components/card";
import Nav from "~/components/nav";
import NavBottom from "~/components/nav-bottom";
import { aptsList } from "~/api";
import Body from "~/components/body";

export function meta(_: Route.MetaArgs) {
	return [{ title: "Salve" }, { name: "description", content: "ks" }];
}

export async function loader({ params }: Route.LoaderArgs) {
	const r = await aptsList();
	return r.data?.results ?? [];
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<Body>
			{
				// <Showcase className="w-full">
				// 	{carrousel.map((c) => (
				// 		<Slide className="w-full" key={c}>
				// 			<img className="object-cover size-full" src={c} alt="uga" />
				// 		</Slide>
				// 	))}
				// </Showcase>
			}
			<main className="p-1 grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] items-center gap-2">
				{loaderData.map(Card)}
			</main>
		</Body>
	);
}
