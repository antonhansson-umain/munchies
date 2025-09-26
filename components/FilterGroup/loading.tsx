import { cn } from "@/lib/cn";
import Skeleton from "../Skeleton";
import FilterChipSkeleton from "../FilterChip/loading";

export default function FilterGroupSkeleton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Skeleton className="w-24 h-3 my-0.5" />
      <div className="flex gap-2.5 flex-wrap">{children}</div>
    </div>
  );
}
