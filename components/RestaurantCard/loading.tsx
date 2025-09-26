import RightArrowIcon from "@/icons/RightArrowIcon";
import Chip from "../Chip";
import Skeleton from "../Skeleton";

type ResturantCardProps = React.HTMLAttributes<HTMLDivElement>;
export default function RestaurantCardSkeleton({
  ...props
}: ResturantCardProps) {
  return (
    <div
      className="card p-4 h-50 flex flex-col justify-between relative overflow-hidden"
      {...props}
    >
      <div className="flex gap-2 z-10">
        <Chip className="gap-1">
          <Skeleton className="w-2 h-2 aspect-square" />
          <Skeleton className="w-8 h-3" />
        </Chip>
        <Chip>
          <Skeleton className="w-8 h-3" />
        </Chip>
      </div>
      <Skeleton className="absolute -right-7.5 -top-7.5 w-32 h-32" />
      <div className="flex justify-between items-center gap-4">
        <Skeleton className="w-48 h-6" />
        <span
          className={`bg-black/20 animate-pulse rounded-full place-self-end w-8 h-8 text-white justify-center items-center flex group-hover:bg-primary-green-500`}
        >
          <RightArrowIcon />
        </span>
      </div>
    </div>
  );
}
