"use client";

import { Filter } from "@/types/Filter";
import H3 from "./Headings/H3";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/cn";

export default function FilterCard({ filter }: { filter: Filter }) {
  const name = filter.name.toLowerCase();

  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);
  const categoryKey = "category";
  const values = params.get(categoryKey);
  let categories: string[] = [];
  if (values) {
    categories = values.split(",");
  }

  const handleClick = () => {
    const name = filter.name.toLocaleLowerCase();
    let newCategories: string[];
    if (categories.includes(name)) {
      newCategories = categories.filter((c) => c !== name);
    } else {
      categories.push(name);
      newCategories = categories;
    }
    if (newCategories.length <= 0) {
      params.delete(categoryKey);
    } else if (newCategories.length > 1) {
      params.set(categoryKey, newCategories.join(","));
    } else {
      params.set(categoryKey, newCategories[0]);
    }
    console.log(params.toString());
    router.push(`/?${params.toString()}`);
  };

  return (
    <button
      className={cn(
        "card w-40 min-w-40 h-20 py-4 px-3 relative flex overflow-hidden cursor-pointer",
        {
          "!bg-primary-green/50": categories.includes(name),
        }
      )}
      onClick={handleClick}
    >
      <H3 className="place-self-start justify-self-start">{filter.name}</H3>
      <Image
        src={filter.image_url}
        alt={filter.name}
        width={80}
        height={80}
        className="absolute top-0 -right-2.5"
        draggable={false}
      />
    </button>
  );
}
