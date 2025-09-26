import H1 from "../Headings/H1";
import RestaurantCardSkeleton from "../RestaurantCard/loading";

export default function RestaurantsSkeleton() {
  return (
    <div className="flex flex-col gap-5 sm:gap-8 sm:pr-10 max-sm:px-6 sm:pl-5">
      <H1 className="max-sm:text-[20px]">Restaurants</H1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(327px,1fr))] gap-4">
        {Array.from({ length: 7 }).map((_, index) => (
          <RestaurantCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
