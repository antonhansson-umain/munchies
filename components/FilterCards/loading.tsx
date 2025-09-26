import FilterCardSkeleton from "../FilterCard/loading";

export default function FilterCardsSkeleton() {
  return (
    <div className="flex items-center gap-2.5 max-w-0 min-w-full sm:min-w-[calc(100%+12px)] pr-10 max-sm:px-6 pb-6 sm:pb-10 sm:pl-8 sm:-ml-3 overflow-hidden">
      {Array.from({ length: 10 }).map((_, index) => (
        <FilterCardSkeleton key={index} />
      ))}
    </div>
  );
}
