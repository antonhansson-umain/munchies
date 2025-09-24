import { FiltersResponse } from "@/types/FilterResponse";
import FilterGroup from "./FilterGroup";
import H2 from "./Headings/H2";
import { FilterGroup as FilterGroupType } from "@/types/FilterGroup";

export default function Filters({
  categories,
}: {
  categories?: FiltersResponse["filters"];
}) {
  const groups: FilterGroupType[] = [
    {
      label: "Food Category",
      key: "category",
      filters: categories ? categories : [],
    },
    {
      label: "Delivery Time",
      key: "time",
      filters: [
        {
          name: "0-10 min",
          value: "0-10",
        },
        {
          name: "10-30 min",
          value: "10-30",
        },
        {
          name: "30-60 min",
          value: "30-60",
        },
        {
          name: "1 hour+",
          value: "60",
        },
      ],
    },
    {
      label: "Price Range",
      key: "price",
      filters: [
        {
          name: "$",
          value: "$",
        },
        {
          name: "$$",
          value: "$$",
        },
        {
          name: "$$$",
          value: "$$$",
        },
        {
          name: "$$$$",
          value: "$$$$",
        },
      ],
    },
  ];
  return (
    <aside className="card !rounded-[10px] p-6 flex flex-col gap-8">
      <H2>Filter</H2>
      {groups.map(
        (g) =>
          g.filters.length > 0 && <FilterGroup key={g.key} filterGroup={g} />
      )}
    </aside>
  );
}
