"use server";

import { FormattedSearchParams } from "@/lib/formatSearchParams";
import { getMinAndMaxTimeMinutes } from "@/lib/getMinAndMaxTimeMinutes";
import { makeAPIRequest } from "@/lib/makeAPIRequest";
import { Restaurant } from "@/types/Restaurant";
import { RestaurantsResponse } from "@/types/RestaurantsResponse";
import { getPriceRange } from "./getPriceRange";
import { getOpenStatus } from "./getOpenStatus";

export async function getRestaurants(filters?: FormattedSearchParams) {
  const res = await makeAPIRequest<RestaurantsResponse>("/restaurants", 3600);
  if (!res || !res.restaurants) return [];

  let restaurants = res.restaurants;

  // fetch extra information about the restaurants
  restaurants = await Promise.all(
    restaurants.map(async (r) => {
      // fetch open statuses
      const openStatus = await getOpenStatus(r.id);
      r.is_open = openStatus?.is_open ?? false;

      // fetch price ranges
      const pricing_range = await getPriceRange(r.price_range_id);
      if (!pricing_range) r.pricing_range = undefined;
      else r.pricing_range = pricing_range.range;

      return r;
    })
  );

  if (!filters) return restaurants;

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
