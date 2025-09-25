import { UIFilter } from "./UIFilter";

export type FilterGroup = {
  label: string;
  key: FilterGroupkey;
  filters: UIFilter[];
};

export const FilterGroupKeys = ["category", "time", "price"] as const;

export type FilterGroupkey = (typeof FilterGroupKeys)[number];

export function isFilterGroupKey(k: string): k is FilterGroupkey {
  return (FilterGroupKeys as readonly string[]).includes(k);
}
