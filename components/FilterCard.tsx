"use client";

import H3 from "./Headings/H3";
import Image from "next/image";
import { cn } from "@/lib/cn";
import useFilterClick from "@/hooks/useFilterClick";
import { UIFilter } from "@/types/UIFilter";

export default function FilterCard({ filter }: { filter: UIFilter }) {
  const { handleClick, values } = useFilterClick(filter);

  return (
    <button
      className={cn(
        "card w-40 min-w-40 h-20 py-4 px-3 relative flex overflow-hidden cursor-pointer transition-colors hover:!bg-background hover:!border-primary-green",
        {
          "!bg-primary-green text-white hover:!bg-primary-green/80":
            values.includes(filter.value),
        }
      )}
      onClick={handleClick}
    >
      <H3 className="place-self-start justify-self-start">{filter.label}</H3>
      <Image
        src={filter.image!}
        alt={filter.label}
        width={80}
        height={80}
        className="absolute top-0 -right-2.5"
        draggable={false}
      />
    </button>
  );
}
