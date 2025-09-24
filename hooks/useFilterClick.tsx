"use client";

import { UIFilter } from "@/types/UIFilter";
import { useRouter, useSearchParams } from "next/navigation";

export default function useFilterClick(filter: UIFilter) {
  const { value } = filter;

  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);
  const values = params.get(filter.groupKey);
  let categories: string[] = [];
  if (values) {
    categories = values.split(",");
  }

  const handleClick = () => {
    let newCategories: string[];
    if (categories.includes(value)) {
      newCategories = categories.filter((c) => c !== value);
    } else {
      categories.push(value);
      newCategories = categories;
    }
    if (newCategories.length <= 0) {
      params.delete(filter.groupKey);
    } else if (newCategories.length > 1) {
      params.set(filter.groupKey, newCategories.join(","));
    } else {
      params.set(filter.groupKey, newCategories[0]);
    }
    router.push(`/?${params.toString()}`);
  };
  return { handleClick, categories };
}
