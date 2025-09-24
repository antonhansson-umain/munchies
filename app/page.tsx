import FilterCards from "@/components/FilterCards";
import Filters from "@/components/Filters";
import Restaurants from "@/components/Restaurants";
import { makeAPIRequest } from "@/lib/makeAPIRequest";
import { FiltersResponse } from "@/types/FilterResponse";

export default async function Home() {
  const res = await makeAPIRequest<FiltersResponse>("/filter");
  return (
    <>
      <Filters categories={res?.filters} />
      <main className="flex flex-col gap-10 ">
        {res?.filters && <FilterCards categories={res.filters} />}
        <Restaurants />
      </main>
    </>
  );
}
