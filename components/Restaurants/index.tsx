import H1 from "../Headings/H1";
import RestaurantCard from "../RestaurantCard";
import Empty from "./empty";
import { Restaurant } from "@/types/Restaurant";

export default async function Restaurants({
  restaurants,
}: {
  restaurants: Restaurant[];
}) {
  return (
    <div className="flex flex-col gap-5 sm:gap-8 sm:pr-10 max-sm:px-6 sm:pl-5">
      <H1 className="max-sm:text-[20px]">Restaurants</H1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(327px,1fr))] gap-4">
        {restaurants.map((r, index) => (
          <RestaurantCard
            key={r.id}
            restaurant={r}
            imagePriority={[0, 1, 2, 3].includes(index) ? true : undefined}
          />
        ))}
        {restaurants.length === 0 && <Empty />}
      </div>
    </div>
  );
}
