import { FiltersResponse } from "@/types/FilterResponse";
import FilterCard from "../FilterCard";
import { Suspense } from "react";
import FilterCardSkeleton from "../FilterCard/loading";

export default async function FilterCards({
  categories,
}: {
  categories: FiltersResponse["filters"];
}) {
  return (
    <div
      className={`flex items-center gap-2.5 max-w-0 min-w-full sm:min-w-[calc(100%+12px)] pr-10 max-sm:px-6 pb-6 sm:pb-10 sm:pl-8 sm:-ml-3 ${
        categories ? "overflow-x-scroll" : "overflow-hidden"
      }`}
    >
      {categories.map((f) => (
        <Suspense fallback={<FilterCardSkeleton />} key={f.id}>
          <FilterCard
            filter={{
              label: f.name,
              value: f.id,
              groupKey: "category",
              image: f.image_url,
            }}
          />
        </Suspense>
      ))}
    </div>
  );
}
