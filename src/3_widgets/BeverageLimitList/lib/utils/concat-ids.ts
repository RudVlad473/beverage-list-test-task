export function concatIds<T extends { id: string | number }>(arr: T[]): string {
  return arr.reduce((idStr, { id }) => idStr.concat(id.toString()), "")
}
