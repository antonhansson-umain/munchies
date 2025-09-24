import H1 from "./Headings/H1";
import RestaurantCard from "./RestaurantCard";
import { RestaurantsResponse } from "@/types/RestaurantsResponse";
import { makeAPIRequest } from "@/lib/makeAPIRequest";
import { PriceRange } from "@/types/PriceRange";
import { FormattedSearchParams } from "@/lib/formatSearchParams";

export default async function Restaurants({
  filters,
}: {
  filters: FormattedSearchParams;
}) {
  const res = await makeAPIRequest<RestaurantsResponse>("/restaurants");
  if (!res) return <>No restaurants found</>;
  let restaurants = res.restaurants;

  // only fetch price ranges if price range filter is engaged
  if (filters.price !== undefined) {
    restaurants = await Promise.all(
      restaurants.map(async (r) => {
        const pricing_range = await makeAPIRequest<PriceRange>(
          `/price-range/${r.price_range_id}`
        );
        if (!pricing_range) r.pricing_range = undefined;
        else r.pricing_range = pricing_range.range;
        return r;
      })
    );
  }

  // filtering
  restaurants = restaurants.filter((r) => {
    // category
    // -

    // time
    // -

    // price
    if (!filters.price || filters.price.length <= 0) {
      return r;
    } else if (r.pricing_range && filters.price.includes(r.pricing_range)) {
      return r;
    }
  });

  return (
    <div className="flex flex-col gap-8 pr-10">
      <H1>Restaurants</H1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(327px,1fr))] gap-4">
        {restaurants.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </div>
  );
}
