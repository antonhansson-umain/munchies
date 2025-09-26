import { FiltersResponse } from "@/types/FilterResponse";
import FilterGroup from "../FilterGroup";
import H2 from "../Headings/H2";
import { FilterGroup as FilterGroupType } from "@/types/FilterGroup";
import ResetFiltersButton from "../ResetFiltersButton";

export default function Filters({
  categories,
  isActive,
}: {
  categories?: FiltersResponse["filters"];
  isActive: boolean;
}) {
  const groups: FilterGroupType[] = [
    {
      label: "Food Category",
      key: "category",
      filters: categories
        ? categories.map((c) => ({
            label: c.name,
            value: c.id,
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
    <aside className="card max-sm:!bg-transparent max-sm:!border-none !rounded-[10px] sm:p-6 relative max-sm:px-6 max-sm:!shadow-none z-10">
      <div className="flex flex-col gap-8 sticky top-4">
        <div className="flex items-center justify-between min-h-8">
          <H2 className="hidden sm:block">Filter</H2>
          <ResetFiltersButton className={`${isActive ? "block" : "hidden"}`} />
        </div>
        {groups.map(
          (g) =>
            g.filters.length > 0 && (
              <FilterGroup
                key={g.key}
                filterGroup={g}
                className={g.key !== "time" ? "max-sm:hidden" : ""}
              />
            )
        )}
      </div>
    </aside>
  );
}
