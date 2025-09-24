"use client";

import useFilterClick from "@/hooks/useFilterClick";
import { cn } from "@/lib/cn";
import { Filter } from "@/types/Filter";
import { UIFilter } from "@/types/UIFilter";

type FilterChipProps = React.HTMLAttributes<HTMLButtonElement> & {
  filter: UIFilter;
};

export default function FilterChip({
  className,
  filter,
  ...props
}: FilterChipProps) {
  const { handleClick } = useFilterClick(filter);
  return (
    <button
      onClick={handleClick}
      className={cn(
        "px-3 py-2 border-[0.6px] border-black/10 rounded-lg flex gap-2 w-max",
        className
      )}
      {...props}
    >
      {filter.label}
    </button>
  );
}
