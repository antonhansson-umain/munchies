import { FiltersResponse } from "@/types/FilterResponse";
import FilterGroup from "./FilterGroup";
import H2 from "./Headings/H2";

export default function Filters({
  categories,
}: {
  categories: FiltersResponse["filters"];
}) {
  const groups = [
    {
      label: "Food Category",
      key: "category",
      options: categories.map((c) => ({
        label: c.name,
        value: c.name.toLowerCase(),
      })),
    },
    {
      label: "Delivery Time",
      key: "time",
      options: [
        {
          label: "0-10 min",
          value: "0-10",
        },
        {
          label: "10-30 min",
          value: "10-30",
        },
        {
          label: "30-60 min",
          value: "30-60",
        },
        {
          label: "1 hour+",
          value: "60",
        },
      ],
    },
    {
      label: "Price Range",
      key: "price",
      options: [
        {
          label: "$",
          value: "$",
        },
        {
          label: "$$",
          value: "$$",
        },
        {
          label: "$$$",
          value: "$$$",
        },
        {
          label: "$$$$",
          value: "$$$$",
        },
      ],
    },
  ];
  return (
    <aside className="card !rounded-[10px] p-6 flex flex-col gap-8">
      <H2>Filter</H2>
      {groups.map((g) => (
        <FilterGroup key={g.key} filterGroup={g} />
      ))}
    </aside>
  );
}
