import { FiltersResponse } from "@/types/FilterResponse";
import FilterCard from "./FilterCard";

export default async function FilterCards({
  categories,
}: {
  categories: FiltersResponse["filters"];
}) {
  return (
    <div className="flex items-center gap-2.5 overflow-x-scroll max-w-0 min-w-full pr-10">
      {categories.map((f) => (
        <FilterCard key={f.id} filter={f} />
      ))}
    </div>
  );
}
