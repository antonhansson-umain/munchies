export function getMinAndMaxTimeMinutes(values: string[]) {
  let minTime = undefined;
  let maxTime = undefined;
  const splitVals = [
    ...new Set(
      values
        .map((v) => v.split("-"))
        .flat()
        .map((v) => Number(v))
    ),
  ];
  const sortedVals = splitVals.sort();
  minTime = sortedVals[0];
  maxTime = sortedVals.at(-1) ?? Infinity;
  return { minTime, maxTime };
}
