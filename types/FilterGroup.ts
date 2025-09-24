import { Filter } from "./Filter";
import { UIFilter } from "./UIFilter";

export type FilterGroup = {
  label: string;
  key: string;
  filters: UIFilter[];
};
