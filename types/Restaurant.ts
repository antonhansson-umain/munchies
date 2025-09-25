export type Restaurant = {
  id: string;
  name: string;
  rating: number; // minimum: 0 & maximum: 5
  filter_ids: string[]; // minItems: 1
  image_url: string; //uri
  delivery_time_minutes: number;
  price_range_id: string;
  pricing_range?: string; // fetch from /price-range/{price_range_id}
  is_open?: boolean; // fetch from /open/{id}
};
