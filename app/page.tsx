import FilterCards from "@/components/FilterCards";
import Filters from "@/components/Filters";
import Restaurants from "@/components/Restaurants";
import { makeAPIRequest } from "@/lib/makeAPIRequest";
import { FiltersResponse } from "@/types/FilterResponse";

export default async function Home() {
  const res = await makeAPIRequest<FiltersResponse>("/filter");
  if (!res) return <>No filters found</>;
  const categories = res.filters;
  return (
    <>
      <Filters categories={categories} />
      <main className="flex flex-col gap-10 ">
        <FilterCards categories={categories} />
        <Restaurants />
      </main>
    </>
  );
}
