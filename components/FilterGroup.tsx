import FilterChip from "./FilterChip";
import FilterGroupTitle from "./FilterGroupTitle";

type FilterGroup = {
  label: string;
  key: string;
  options: FilterOption[];
};

type FilterOption = {
  label: string;
  value: string;
};

export default function FilterGroup({
  filterGroup,
}: {
  filterGroup: FilterGroup;
}) {
  return (
    <div className="flex flex-col gap-4">
      <FilterGroupTitle>{filterGroup.label}</FilterGroupTitle>
      <div className="flex gap-2.5 flex-wrap">
        {filterGroup.options.map((o) => (
          <FilterChip
            key={o.value}
            className={o.label.includes("$") ? "px-2" : ""}
          >
            {o.label}
          </FilterChip>
        ))}
      </div>
    </div>
  );
}
