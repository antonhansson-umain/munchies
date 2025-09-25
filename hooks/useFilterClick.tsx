"use client";

import { UIFilter } from "@/types/UIFilter";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useFilterClick(filter: UIFilter) {
  const [isActive, setIsActive] = useState(false);
  const [isClickable, setIsClickable] = useState(true);
  const { value } = filter;

  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);
  const groups = searchParams.get(filter.groupKey);
  let values: string[] = [];
  if (groups) {
    values = groups.split(",");
  }

  useEffect(() => {
    if (values.includes(value)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    setIsClickable(true);
  }, [searchParams]);

  const handleClick = () => {
    if (!isClickable) return;
    setIsClickable(false);
    setIsActive(isActive ? false : true);
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
    router.push(`/?${params.toString()}`, { scroll: false });
  };
  return { handleClick, isActive };
}
