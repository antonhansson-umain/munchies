import { getRestaurants } from "@/actions/getRestaurants";
import FilterCards from "@/components/FilterCards";
import Filters from "@/components/Filters";
import Restaurants from "@/components/Restaurants";
import RestaurantsSkeleton from "@/components/Restaurants/loading";
import { formatSearchParams } from "@/lib/formatSearchParams";
import { makeAPIRequest } from "@/lib/makeAPIRequest";
import { FiltersResponse } from "@/types/FilterResponse";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const filters = formatSearchParams(params);
  const restaurants = await getRestaurants(filters);
  const categories = await makeAPIRequest<FiltersResponse>("/filter", 3600);
  return (
    <>
      <Filters categories={categories?.filters} />
      <main className="flex flex-col">
        {categories?.filters && <FilterCards categories={categories.filters} />}
        <Suspense
          key={Object.values(filters).join("")}
          fallback={<RestaurantsSkeleton />}
        >
          <Restaurants restaurants={restaurants} />
        </Suspense>
      </main>
    </>
  );
}
