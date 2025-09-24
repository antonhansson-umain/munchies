import { Restaurant } from "./Restaurant";

export type UIRestaurant = Restaurant & {
  pricing_range: number[];
};
