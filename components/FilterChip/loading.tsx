import { cn } from "@/lib/cn";
import Skeleton from "../Skeleton";

type FilterChipProps = React.HTMLAttributes<HTMLButtonElement>;

export default function FilterChipSkeleton({
  className,
  ...props
}: FilterChipProps) {
  return (
    <button
      className={
        "card px-3 py-2 border-[0.6px] border-black/10 rounded-lg flex gap-2 w-max h-8"
      }
      {...props}
    >
      <Skeleton className={cn("w-12 h-3", className)} />
    </button>
  );
}
