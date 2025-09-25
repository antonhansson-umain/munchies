import { Restaurant } from "@/types/Restaurant";
import H2 from "./Headings/H2";
import RightArrowIcon from "@/icons/RightArrowIcon";
import Chip from "./Chip";
import Image from "next/image";
import Link from "next/link";

type ResturantCardProps = React.HTMLAttributes<HTMLDivElement> & {
  restaurant: Restaurant;
  imagePriority?: boolean;
};
export default function RestaurantCard({
  restaurant,
  imagePriority,
}: ResturantCardProps) {
  return (
    <Link
      href={`/restaurant/${restaurant.id}`}
      className="card p-4 h-50 flex flex-col justify-between relative overflow-hidden hover:!bg-background transition-colors group"
      aria-label={restaurant.name}
    >
      <div className="flex gap-2 z-10">
        <Chip className="gap-1">
          {restaurant.is_open ? (
            <>
              <span className="w-2 h-2 rounded-full bg-primary-green"></span>
              <span>Open</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <span>Closed</span>
            </>
          )}
        </Chip>
        {restaurant.is_open && (
          <Chip>{restaurant.delivery_time_minutes} min</Chip>
        )}
      </div>
      {!restaurant.is_open && (
        <div className="card absolute z-10 top-1/2 left-1/2 -translate-1/2 !rounded-sm py-2 px-3 !bg-off-white">
          Opens tomorrow at 12 pm
        </div>
      )}
      <Image
        src={restaurant.image_url}
        {...(imagePriority ? { priority: true } : {})}
        {...(imagePriority ? { fetchPriority: "high" } : {})}
        width={140}
        height={140}
        alt={
          restaurant.image_url.split("/")[2].split(".")[0] ?? restaurant.name
        }
        className={`absolute -right-7.5 -top-7.5 ${
          restaurant.is_open ? "" : "opacity-20"
        }`}
        draggable={false}
      />
      <div className="flex justify-between items-center">
        <H2 className={restaurant.is_open ? "" : "opacity-50"}>
          {restaurant.name}
        </H2>
        <span
          className={`bg-primary-green rounded-full place-self-end w-8 h-8 text-white justify-center items-center flex hover:bg-primary-green/80 group-hover:bg-primary-green/80 transition-colors ${
            restaurant.is_open ? "" : "opacity-20"
          }`}
        >
          <RightArrowIcon />
        </span>
      </div>
    </Link>
  );
}
