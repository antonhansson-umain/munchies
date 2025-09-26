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
  const { handleClick, isActive } = useFilterClick(filter);
  return (
    <button
      onClick={handleClick}
      className={cn(
        "card px-3 py-2 border-[0.6px] border-black/10 rounded-lg flex gap-2 w-max transition-colors hover:!bg-background focus:!bg-background hover:!border-primary-green-400",
        {
          "!bg-primary-green-400 hover:!bg-primary-green-500 focus:!bg-primary-green-500 text-white":
            isActive,
        },
        className
      )}
      {...props}
    >
      {filter.label}
    </button>
  );
}
