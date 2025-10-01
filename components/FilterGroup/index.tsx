import { FilterGroup as FilterGroupType } from "@/types/FilterGroup";
import FilterChip from "../FilterChip";
import { cn } from "@/lib/cn";
import FilterChipSkeleton from "../FilterChip/loading";
import { Suspense } from "react";

export default function FilterGroup({
  filterGroup,
  className,
}: {
  filterGroup: FilterGroupType;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h3 className="font-semibold uppercase text-black/60">
        {filterGroup.label}
      </h3>
      <div className="flex gap-2.5 flex-wrap">
        {filterGroup.filters.map((o) => (
          <Suspense fallback={<FilterChipSkeleton />} key={o.value}>
            <FilterChip
              filter={o}
              className={o.label.includes("$") ? "px-2" : ""}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
