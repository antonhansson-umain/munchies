import { BASE_API_URL } from "../constants/API_URL";
import { RestaurantsResponse } from "@/types/RestaurantsResponse";
import RestaurantCard from "@/components/RestaurantCard";
import H1 from "@/components/Headings/H1";

export default async function Home() {
  const response = await fetch(`${BASE_API_URL}/restaurants`);
  if (!response || !response.ok) {
    return <>Error: no restaurants found</>;
  }
  const restaurantsResponse: RestaurantsResponse = await response.json();
  const restaurants = restaurantsResponse.restaurants;
  return (
    <>
      <aside className="card">Filters</aside>
      <main>
        <div>Filters</div>
        <H1>Restaurants</H1>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
          {restaurants.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
      </main>
    </>
  );
}
