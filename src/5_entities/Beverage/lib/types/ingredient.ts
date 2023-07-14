import { TMeasure } from "."

export type TPart = {
  name: string
  amount: TMeasure
}

export type TParts = TPart[]

export type TIngredient = {
  malt: TParts
  hops: TParts
  yeast: string
}
