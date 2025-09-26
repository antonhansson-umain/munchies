"use server";

import { makeAPIRequest } from "@/lib/makeAPIRequest";
import { PriceRange } from "@/types/PriceRange";
import { Restaurant } from "@/types/Restaurant";

export async function getPriceRange(
  price_range_id: Restaurant["price_range_id"]
) {
  const pricing_range = await makeAPIRequest<PriceRange>(
    `/price-range/${price_range_id}`,
    3600
  );
  return pricing_range;
}
