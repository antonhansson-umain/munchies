import { BASE_API_URL } from "@/constants/API_URL";
import H1 from "./Headings/H1";
import RestaurantCard from "./RestaurantCard";
import { RestaurantsResponse } from "@/types/RestaurantsResponse";

export default async function Restaurants() {
  const response = await fetch(`${BASE_API_URL}/restaurants`);
  if (!response || !response.ok) {
    return <>Error: no restaurants found</>;
  }
  const restaurantsResponse: RestaurantsResponse = await response.json();
  const restaurants = restaurantsResponse.restaurants;
  return (
    <div className="flex flex-col gap-8">
      <H1>Restaurants</H1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {restaurants.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </div>
  );
}
