import { FilterGroupkey } from "@/types/FilterGroup";

export function splitParamsIntoValues(
  searchParams: URLSearchParams,
  key: FilterGroupkey
) {
  const groups = searchParams.get(key);
  let values: string[] = [];
  if (groups) {
    values = groups.split(",");
  }
  return values;
}
