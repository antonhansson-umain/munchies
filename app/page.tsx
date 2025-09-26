import { getRestaurants } from "@/actions/getRestaurants";
import FilterCards from "@/components/FilterCards";
import Filters from "@/components/Filters";
import Restaurants from "@/components/Restaurants";
import { formatSearchParams } from "@/lib/formatSearchParams";
import { makeAPIRequest } from "@/lib/makeAPIRequest";
import { FiltersResponse } from "@/types/FilterResponse";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const filters = formatSearchParams(await searchParams);
  const restaurants = await getRestaurants(filters);
  const categories = await makeAPIRequest<FiltersResponse>("/filter", 3600);
  return (
    <>
      <Filters categories={categories?.filters} />
      <main className="flex flex-col">
        {categories?.filters && <FilterCards categories={categories.filters} />}
        <Restaurants restaurants={restaurants} />
      </main>
    </>
  );
}
