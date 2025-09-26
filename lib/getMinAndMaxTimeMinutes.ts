export function getMinAndMaxTimeMinutes(value: string) {
  const values = value.split("-");
  return { minTime: Number(values[0]), maxTime: Number(values[1]) };
}
