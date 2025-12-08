
// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

import FilterSection from "~/components/sections/FilterSection";

export default function Home() {
  return (
    <>
      <div className="py-4">
        <FilterSection />
      </div>
    </>
  );
}
