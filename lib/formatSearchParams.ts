import { isFilterGroupKey } from "@/types/FilterGroup";

export function formatSearchParams(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  const params: Record<string, string[]> = {};

  Object.entries(searchParams).forEach(([k, rawV]) => {
    if (!isFilterGroupKey(k)) return;

    const v = rawV ?? "";

    const values = Array.isArray(v)
      ? [...new Set(v.flatMap((e) => e.split(",")))]
      : [...new Set(v.split(","))];

    params[k] = values;
  });

  return params;
}

export type FormattedSearchParams = ReturnType<typeof formatSearchParams>;
