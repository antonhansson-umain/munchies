import { cn } from "@/lib/cn";
import Skeleton from "../Skeleton";

export default function FilterCardSkeleton() {
  return (
    <button
      className={cn(
        "card w-40 min-w-40 h-20 py-4 px-3 flex overflow-hidden justify-between gap-2 relative"
      )}
      disabled={true}
    >
      <Skeleton className="w-full max-w-20 h-4" />
      <Skeleton className="absolute aspect-square w-14 h-16 top-1/2 -translate-y-1/2 right-1" />
    </button>
  );
}
