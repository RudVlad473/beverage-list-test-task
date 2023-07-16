import { THops, TMeasure } from "."

export type TPart = {
  name: string
  amount: TMeasure
}

export type TParts = TPart[]

export type TIngredient = {
  malt: TParts
  hops: THops
  yeast: string
}
