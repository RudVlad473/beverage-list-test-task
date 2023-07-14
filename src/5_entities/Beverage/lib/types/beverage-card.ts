import { TBeverage } from "."

export type TBeverageCard = Pick<
  TBeverage,
  "id" | "image_url" | "description" | "contributed_by" | "name" | "first_brewed"
>

export type TBeverageCards = TBeverageCard[]
