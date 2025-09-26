import FilterCards from "@/components/FilterCards";
import FilterCardsSkeleton from "@/components/FilterCards/loading";
import Filters from "@/components/Filters";
import FiltersSkeleton from "@/components/Filters/loading";
import Restaurants from "@/components/Restaurants";
import RestaurantsSkeleton from "@/components/Restaurants/loading";
import { formatSearchParams } from "@/lib/formatSearchParams";
import { makeAPIRequest } from "@/lib/makeAPIRequest";
import { FiltersResponse } from "@/types/FilterResponse";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const filters = formatSearchParams(await searchParams);
  const categories = await makeAPIRequest<FiltersResponse>("/filter", 3600);
  return (
    <>
      <Filters categories={categories?.filters} />
      <main className="flex flex-col">
        {categories?.filters && <FilterCards categories={categories.filters} />}
        <Restaurants filters={filters} />
      </main>
    </>
  );
}
