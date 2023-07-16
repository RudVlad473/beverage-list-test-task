import { maxRecipesRendered } from "../../../../3_widgets/BeverageLimitList/consts"
import { TBeverages } from "../types"

export function getViewedBeverages(beverages: TBeverages, cursor: number): TBeverages {
  return beverages.slice(cursor, maxRecipesRendered + cursor)
}
