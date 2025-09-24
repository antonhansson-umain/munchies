"use client";

import useFilterClick from "@/hooks/useFilterClick";
import { cn } from "@/lib/cn";
import { Filter } from "@/types/Filter";

type FilterChipProps = React.HTMLAttributes<HTMLButtonElement> & {
  filter: Filter;
};

export default function FilterChip({
  className,
  filter,
  ...props
}: FilterChipProps) {
  const { handleClick, name, categories } = useFilterClick(filter);
  return (
    <button
      onClick={handleClick}
      className={cn(
        "px-3 py-2 border-[0.6px] border-black/10 rounded-lg flex gap-2 w-max",
        className
      )}
      {...props}
    >
      {filter.name}
    </button>
  );
}
