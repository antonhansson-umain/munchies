import FilterCards from "@/components/FilterCards";
import FiltersSkeleton from "@/components/Filters/loading";
import RestaurantsSkeleton from "@/components/Restaurants/loading";
import React from "react";

export default function loading() {
  return (
    <>
      <FiltersSkeleton />
      <main className="flex flex-col">
        <FilterCards />
        <RestaurantsSkeleton />
      </main>
    </>
  );
}
