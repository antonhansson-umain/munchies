import { Restaurant } from "@/types/Restaurant";
import H2 from "./Headings/H2";
import RightArrowIcon from "@/icons/RightArrowIcon";
import Button from "./Button";
import Chip from "./Chip";
import Image from "next/image";
import Link from "next/link";

type ResturantCardProps = React.HTMLAttributes<HTMLDivElement> & {
  restaurant: Restaurant;
};
export default function RestaurantCard({ restaurant }: ResturantCardProps) {
  return (
    <Link
      href={`/restaurant/${restaurant.id}`}
      className="card p-4 h-50 flex flex-col justify-between relative overflow-hidden hover:!bg-background transition-colors"
    >
      <div className="flex justify-between">
        <div className="flex gap-2 z-10">
          <Chip>(Open Status)</Chip>
          <Chip>{restaurant.delivery_time_minutes} min</Chip>
        </div>
        <Image
          src={restaurant.image_url}
          width={140}
          height={140}
          alt={restaurant.image_url}
          className="absolute -right-7.5 -top-7.5"
          draggable={false}
        />
      </div>
      <div className="flex justify-between">
        <H2>{restaurant.name}</H2>
        <Button className="rounded-full place-self-end">
          <RightArrowIcon />
        </Button>
      </div>
    </Link>
  );
}
