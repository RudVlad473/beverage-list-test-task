import { TBeverages } from "../../../../5_entities/Beverage/lib/types"
import { maxRecipesRendered } from "../../consts"

export function getViewedBeverages(beverages: TBeverages): TBeverages {
  return beverages.slice(0, maxRecipesRendered)
}
