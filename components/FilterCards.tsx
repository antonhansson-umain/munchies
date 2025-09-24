import { makeAPIRequest } from "@/lib/makeAPIRequest";
import { FiltersResponse } from "@/types/FilterResponse";
import FilterCard from "./FilterCard";

export default async function FilterCards({
  categories,
}: {
  categories: FiltersResponse["filters"];
}) {
  // const res = await makeAPIRequest<FiltersResponse>("/filter");
  // if (!res) return <>No filters found</>;
  // const { filters } = res;
  return (
    <div className="flex items-center gap-2.5 overflow-x-scroll max-w-0 min-w-full pr-10">
      {categories.map((f) => (
        <FilterCard key={f.id} filter={f} />
      ))}
    </div>
  );
}
