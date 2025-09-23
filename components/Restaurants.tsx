import H1 from "./Headings/H1";
import RestaurantCard from "./RestaurantCard";
import { RestaurantsResponse } from "@/types/RestaurantsResponse";
import { makeAPIRequest } from "@/lib/makeAPIRequest";

export default async function Restaurants() {
  const res = await makeAPIRequest<RestaurantsResponse>("/restaurants");
  if (!res) return <>No restaurants found</>;
  const { restaurants } = res;
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
