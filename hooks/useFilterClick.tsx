"use client";

import { Filter } from "@/types/Filter";
import { useRouter, useSearchParams } from "next/navigation";

export default function useFilterClick(filter: Filter) {
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
    router.push(`/?${params.toString()}`);
  };
  return { handleClick, categories, name };
}
