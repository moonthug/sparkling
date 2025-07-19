
export function formatValue(value: number | undefined): string {
  return value === undefined ? '-' : value.toFixed(2);
}
