import { cn } from "@/lib/cn";

type FilterChipProps = React.HTMLAttributes<HTMLButtonElement>;

export default function FilterChip({ className, children }: FilterChipProps) {
  return (
    <button
      className={cn(
        "px-3 py-2 border-[0.6px] border-black/10 rounded-lg flex gap-2 w-max",
        className
      )}
    >
      {children}
    </button>
  );
}
