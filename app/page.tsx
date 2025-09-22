import { BASE_API_URL } from "./constants/API_URL";
import { RestaurantsResponse } from "@/types/RestaurantsResponse";

export default async function Home() {
  const response = await fetch(`${BASE_API_URL}/restaurants`);
  if (!response || !response.ok) {
    return <>Error: no restaurants found</>;
  }
  const restaurantsResponse: RestaurantsResponse = await response.json();
  const restaurants = restaurantsResponse.restaurants;
  return (
    <>
      <div>
        {restaurants.map((r) => (
          <div key={r.id}>{r.name}</div>
        ))}
      </div>
    </>
  );
}
