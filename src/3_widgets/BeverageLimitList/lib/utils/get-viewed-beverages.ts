import { TBeverages } from "../../../../5_entities/Beverage/lib/types"
import { maxRecipesRendered } from "../../consts"

export function getViewedBeverages(beverages: TBeverages, cursor: number): TBeverages {
  return beverages.slice(cursor, maxRecipesRendered + cursor)
}
