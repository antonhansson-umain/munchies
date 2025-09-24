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
      filters: categories
        ? categories.map((c) => ({
            label: c.name,
            value: c.name.toLowerCase(),
            groupKey: "category",
          }))
        : [],
    },
    {
      label: "Delivery Time",
      key: "time",
      filters: [
        {
          label: "0-10 min",
          value: "0-10",
          groupKey: "time",
        },
        {
          label: "10-30 min",
          value: "10-30",
          groupKey: "time",
        },
        {
          label: "30-60 min",
          value: "30-60",
          groupKey: "time",
        },
        {
          label: "1 hour+",
          value: "60-Infinity",
          groupKey: "time",
        },
      ],
    },
    {
      label: "Price Range",
      key: "price",
      filters: [
        {
          label: "$",
          value: "$",
          groupKey: "price",
        },
        {
          label: "$$",
          value: "$$",
          groupKey: "price",
        },
        {
          label: "$$$",
          value: "$$$",
          groupKey: "price",
        },
        {
          label: "$$$$",
          value: "$$$$",
          groupKey: "price",
        },
      ],
    },
  ];
  return (
    <aside className="card !rounded-[10px] p-6 relative">
      <div className="flex flex-col gap-8 sticky top-4">
        <H2>Filter</H2>
        {groups.map(
          (g) =>
            g.filters.length > 0 && <FilterGroup key={g.key} filterGroup={g} />
        )}
      </div>
    </aside>
  );
}
