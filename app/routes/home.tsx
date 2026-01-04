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
		<>
			<div className="relative overflow-hidden px-4 py-16">
				<img
					className="absolute top-0 left-0 h-full w-full object-cover"
					alt=""
					srcSet="
					/public/sjdr.jpg 200w,
					/public/sjdr-xl.jpg 900w
					"
				/>
				<FilterSection />
			</div>
			<div className="p-4">
				<AptSection apts={apts} />
			</div>
		</>
	);
}
