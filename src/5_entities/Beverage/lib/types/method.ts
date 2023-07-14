import { TMeasure } from "."

export type TMethod = {
  mash_temp: [
    {
      temp: TMeasure
      duration: number
    }
  ]
  fermentation: {
    temp: TMeasure
  }
  twist: string | null
}
