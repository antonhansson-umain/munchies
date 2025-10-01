import FilterCards from "@/components/FilterCards";
import Filters from "@/components/Filters";
import Restaurants from "@/components/Restaurants";
import RestaurantsSkeleton from "@/components/Restaurants/loading";
import { formatSearchParams } from "@/lib/formatSearchParams";
import { makeAPIRequest } from "@/lib/makeAPIRequest";
import { FiltersResponse } from "@/types/FilterResponse";
import { Suspense } from "react";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const filters = formatSearchParams(params);
  const categories = await makeAPIRequest<FiltersResponse>("/filter", 3600);
  const key = Object.entries(filters).flat().join("");
  return (
    <>
      <Filters categories={categories?.filters} isActive={key !== ""} />
      <main className="flex flex-col">
        {categories?.filters && <FilterCards categories={categories.filters} />}
        <Suspense
          key={key || "/"} // force re-render on new "search"
          fallback={<RestaurantsSkeleton />}
        >
          <Restaurants filters={filters} />
        </Suspense>
      </main>
    </>
  );
}
