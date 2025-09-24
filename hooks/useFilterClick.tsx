"use client";

import { UIFilter } from "@/types/UIFilter";
import { useRouter, useSearchParams } from "next/navigation";

export default function useFilterClick(filter: UIFilter) {
  const { value } = filter;

  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);
  const groups = params.get(filter.groupKey);
  let values: string[] = [];
  if (groups) {
    values = groups.split(",");
  }

  const handleClick = () => {
    let newValues: string[];
    if (values.includes(value)) {
      newValues = values.filter((c) => c !== value);
    } else {
      values.push(value);
      newValues = values;
    }
    if (newValues.length <= 0) {
      params.delete(filter.groupKey);
    } else if (newValues.length > 1) {
      params.set(filter.groupKey, newValues.join(","));
    } else {
      params.set(filter.groupKey, newValues[0]);
    }
    router.push(`/?${params.toString()}`);
  };
  return { handleClick, values };
}
