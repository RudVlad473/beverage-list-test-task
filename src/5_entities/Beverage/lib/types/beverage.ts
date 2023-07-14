import { TIngredient, TMeasure, TMethod } from "."

export type TBeverage = {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ibu: number
  target_fg: number
  target_og: number
  ebc: number
  srm: number
  ph: number
  attenuation_level: number
  volume: {
    value: number
    unit: string
  }
  boil_volume: TMeasure
  method: TMethod
  ingredients: TIngredient
  food_pairing: string[]
  brewers_tips: string
  contributed_by: string
}

export type TBeverages = TBeverage[]
