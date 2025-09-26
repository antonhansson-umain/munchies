import FilterGroup from "../FilterGroup";
import H2 from "../Headings/H2";
import FilterGroupSkeleton from "../FilterGroup/loading";
import FilterChipSkeleton from "../FilterChip/loading";

export default function FiltersSkeleton() {
  return (
    <aside className="card max-sm:!bg-transparent max-sm:!border-none !rounded-[10px] sm:p-6 relative max-sm:px-6 max-sm:!shadow-none z-10">
      <div className="flex flex-col gap-8 sticky top-4">
        <H2 className="hidden sm:block">Filter</H2>
        <FilterGroupSkeleton className="max-sm:hidden">
          {Array.from({ length: 7 }).map((_, index) => (
            <FilterChipSkeleton
              key={index}
              className={index % 2 === 0 || index === 3 ? "w-10" : "w-16"}
            />
          ))}
        </FilterGroupSkeleton>
        <FilterGroupSkeleton>
          {Array.from({ length: 4 }).map((_, index) => (
            <FilterChipSkeleton
              key={index}
              className={index % 2 === 0 || index === 3 ? "w-10" : "w-16"}
            />
          ))}
        </FilterGroupSkeleton>
        <FilterGroupSkeleton className="max-sm:hidden">
          {Array.from({ length: 4 }).map((_, index) => (
            <FilterChipSkeleton
              key={index}
              className={index % 2 === 0 || index === 3 ? "w-10" : "w-16"}
            />
          ))}
        </FilterGroupSkeleton>
      </div>
    </aside>
  );
}
