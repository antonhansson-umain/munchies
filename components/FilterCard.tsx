"use client";

import { Filter } from "@/types/Filter";
import H3 from "./Headings/H3";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/cn";
import { useState } from "react";
import useFilterClick from "@/hooks/useFilterClick";

export default function FilterCard({ filter }: { filter: Filter }) {
  const { handleClick, categories, name } = useFilterClick(filter);

  return (
    <button
      className={cn(
        "card w-40 min-w-40 h-20 py-4 px-3 relative flex overflow-hidden cursor-pointer transition-colors",
        {
          "!bg-primary-green/50": categories.includes(name),
        }
      )}
      onClick={handleClick}
    >
      <H3 className="place-self-start justify-self-start">{filter.name}</H3>
      <Image
        src={filter.image_url!}
        alt={filter.name}
        width={80}
        height={80}
        className="absolute top-0 -right-2.5"
        draggable={false}
      />
    </button>
  );
}
