import H1 from "./Headings/H1";
import RestaurantCard from "./RestaurantCard";
import { RestaurantsResponse } from "@/types/RestaurantsResponse";
import { makeAPIRequest } from "@/lib/makeAPIRequest";
import { PriceRange } from "@/types/PriceRange";
import { FormattedSearchParams } from "@/lib/formatSearchParams";
import { getMinAndMaxTimeMinutes } from "@/lib/getMinAndMaxTimeMinutes";
import { Restaurant } from "@/types/Restaurant";
import { OpenStatusResponse } from "@/types/OpenStatusResponse";

export default async function Restaurants({
  filters,
}: {
  filters: FormattedSearchParams;
}) {
  const res = await makeAPIRequest<RestaurantsResponse>("/restaurants");
  if (!res) return <>No restaurants found</>;
  let restaurants = res.restaurants;

  // fetch extra information about the restaurants
  restaurants = await Promise.all(
    restaurants.map(async (r) => {
      // fetch open statuses
      const res = await makeAPIRequest<OpenStatusResponse>(`/open/${r.id}`);
      if (!res) {
        console.error("Fetching open status failed for:", r.id);
        r.is_open = false;
        return r;
      }
      if ("error" in res) {
        console.error(
          "Couldn't get restaurant open status for:",
          r.id,
          "Because:",
          res.reason
        );
        r.is_open = false;
        return r;
      }
      r.is_open = res.is_open;

      // only fetch price ranges if price range filter is engaged
      if (filters.price !== undefined) {
        const pricing_range = await makeAPIRequest<PriceRange>(
          `/price-range/${r.price_range_id}`
        );
        if (!pricing_range) r.pricing_range = undefined;
        else r.pricing_range = pricing_range.range;
      }
      return r;
    })
  );

  // filtering
  const isInCategory = (r: Restaurant) => {
    for (const c of filters.category) {
      if (r.filter_ids.includes(c)) return true;
    }
    return false;
  };
  const isWithinTime = (r: Restaurant) => {
    const { minTime, maxTime } = getMinAndMaxTimeMinutes(filters.time);
    if (
      r.delivery_time_minutes >= minTime &&
      r.delivery_time_minutes <= maxTime
    ) {
      return true;
    }
    return false;
  };
  const isWithinPrice = (r: Restaurant) => {
    if (r.pricing_range && filters.price.includes(r.pricing_range)) {
      return true;
    }
    return false;
  };
  restaurants = restaurants.filter((r) => {
    if (filters.category && !isInCategory(r)) {
      return null;
    } else if (filters.time && !isWithinTime(r)) {
      return null;
    } else if (filters.price && !isWithinPrice(r)) {
      return null;
    } else {
      return r;
    }
  });

  return (
    <div className="flex flex-col gap-5 sm:gap-8 sm:pr-10 max-sm:px-6 sm:pl-5">
      <H1 className="max-sm:text-[20px]">Restaurants</H1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(327px,1fr))] gap-4">
        {restaurants.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
        {restaurants.length === 0 && <>No restaurants found</>}
      </div>
    </div>
  );
}
