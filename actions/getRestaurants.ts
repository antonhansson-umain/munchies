"use server";

import { FormattedSearchParams } from "@/lib/formatSearchParams";
import { getMinAndMaxTimeMinutes } from "@/lib/getMinAndMaxTimeMinutes";
import { makeAPIRequest } from "@/lib/makeAPIRequest";
import { OpenStatusResponse } from "@/types/OpenStatusResponse";
import { PriceRange } from "@/types/PriceRange";
import { Restaurant } from "@/types/Restaurant";
import { RestaurantsResponse } from "@/types/RestaurantsResponse";

export async function getRestaurants(filters: FormattedSearchParams) {
  const res = await makeAPIRequest<RestaurantsResponse>("/restaurants", 3600);
  if (!res || !res.restaurants) return [];

  let restaurants = res.restaurants;

  // fetch extra information about the restaurants
  restaurants = await Promise.all(
    restaurants.map(async (r) => {
      // fetch open statuses
      const res = await makeAPIRequest<OpenStatusResponse>(`/open/${r.id}`, 60);
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

      // fetch price ranges
      const pricing_range = await makeAPIRequest<PriceRange>(
        `/price-range/${r.price_range_id}`,
        3600
      );
      if (!pricing_range) r.pricing_range = undefined;
      else r.pricing_range = pricing_range.range;

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
    const timeRanges = filters.time.map((t) => getMinAndMaxTimeMinutes(t));
    for (const t of timeRanges) {
      if (
        r.delivery_time_minutes >= t.minTime &&
        r.delivery_time_minutes <= t.maxTime
      ) {
        return true;
      }
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

  return restaurants;
}
