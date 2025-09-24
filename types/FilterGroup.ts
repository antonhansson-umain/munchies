import { Filter } from "./Filter";

export type FilterGroup = {
  label: string;
  key: string;
  filters: Filter[];
};
