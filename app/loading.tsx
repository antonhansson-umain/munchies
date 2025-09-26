import FilterCardsSkeleton from "@/components/FilterCards/loading";
import FiltersSkeleton from "@/components/Filters/loading";
import RestaurantsSkeleton from "@/components/Restaurants/loading";
import React from "react";

export default function loading() {
  return (
    <>
      <FiltersSkeleton />
      <main className="flex flex-col">
        <FilterCardsSkeleton />
        <RestaurantsSkeleton />
      </main>
    </>
  );
}
