import { aptsList } from "~/api";
import AptSection from "~/components/sections/Aptsection";
import FilterSection from "~/components/sections/FilterSection";
import type { Route } from "./+types/home";
import { handleError } from "~/util";

export async function loader() {
	return handleError(await aptsList()).results;
}

export default function Home({ loaderData: apts }: Route.ComponentProps) {
	return (
		<div className="py-4">
			<FilterSection />
			<AptSection apts={apts} />
		</div>
	);
}
