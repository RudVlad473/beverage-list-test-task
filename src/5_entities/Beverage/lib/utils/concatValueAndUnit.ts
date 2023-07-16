import { TMeasure } from "../types"

export function concatValueAndUnit(obj: TMeasure): string {
  return `${obj.value} ${obj.unit}`
}
