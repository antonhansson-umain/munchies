import { UIFilter } from "./UIFilter";

export type FilterGroup = {
  label: string;
  key: FilterGroupkey;
  filters: UIFilter[];
};

export const FilterGroupKeys = ["category", "time", "price"] as const;
export const FilterGroupJank = ["category", "time", "price"];

export type FilterGroupkey = (typeof FilterGroupKeys)[number];
