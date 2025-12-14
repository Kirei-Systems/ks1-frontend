import { aptsList } from "~/api";
import AptSection from "~/components/sections/Aptsection";
import FilterSection from "~/components/sections/FilterSection";
import { useLoaderData } from "react-router";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

export async function loader() {
  try {
    const apts = await aptsList()
    const results = apts.data?.results

    if (!Array.isArray(results)) {
      throw new Error("Resposta inesperada da API");
    }

    return { apts: results }
  } catch {
    throw new Response("Falha ao carregar imóveis", { status: 500 });
  }
}




export default function Home() {
  const { apts } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="py-4">
        <FilterSection />
        <AptSection apts={apts}/>
      </div>
    </>
  );
}
