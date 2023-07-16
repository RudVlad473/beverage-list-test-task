import { TMeasure } from "."

type TMash = {
  temp: TMeasure
  duration: number
}

export type TMethod = {
  mash_temp: TMash[]
  fermentation: {
    temp: TMeasure
  }
  twist: string | null
}
