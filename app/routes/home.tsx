import { aptsList, citiesList, regionsList } from "~/api";
import AptSection from "~/components/sections/Aptsection";
import FilterSection from "~/components/sections/FilterSection";
import type { Route } from "./+types/home";
import { handleError } from "~/util";
import { Data, DataProvider } from "~/context";

export async function loader() {
	return {
		regions: handleError(await regionsList()).results,
		cities: handleError(await citiesList()).results,
		apts: handleError(await aptsList()).results
	};
}

export default function Home({ loaderData: {apts, cities, regions} }: Route.ComponentProps) {
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
				<FilterSection cities={cities} regions={regions} />
			</div>
			<div className="p-4">
				<DataProvider data={new Data(regions, cities)}>
					<AptSection apts={apts} />
				</DataProvider>
			</div>
		</>
	);
}
