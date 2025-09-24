"use client";

import useFilterClick from "@/hooks/useFilterClick";
import { cn } from "@/lib/cn";
import { UIFilter } from "@/types/UIFilter";

type FilterChipProps = React.HTMLAttributes<HTMLButtonElement> & {
  filter: UIFilter;
};

export default function FilterChip({
  className,
  filter,
  ...props
}: FilterChipProps) {
  const { handleClick, values } = useFilterClick(filter);
  return (
    <button
      onClick={handleClick}
      className={cn(
        "px-3 py-2 border-[0.6px] border-black/10 rounded-lg flex gap-2 w-max transition-colors",
        {
          "!bg-primary-green/50": values.includes(filter.value),
        },
        className
      )}
      {...props}
    >
      {filter.label}
    </button>
  );
}
