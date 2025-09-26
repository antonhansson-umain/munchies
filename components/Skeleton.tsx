import { cn } from "@/lib/cn";

type SkeletonProps = React.HTMLAttributes<HTMLSpanElement>;

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <span
      className={cn(
        "animate-pulse bg-black/10 h-4 w-4 rounded-full",
        className
      )}
    />
  );
}
