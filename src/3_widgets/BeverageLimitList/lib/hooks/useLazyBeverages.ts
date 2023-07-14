import { chunk } from "lodash"
import { useMemo } from "react"

import { TBeverages } from "../../../../5_entities/Beverage/lib/types"
import { maxRecipesViewed } from "../../consts"
import { getViewedBeverages } from "../utils"

export function useLazyBeverages(beverages: TBeverages) {
  const beverageRows: TBeverages[] = useMemo(
    () => chunk(getViewedBeverages(beverages), maxRecipesViewed),
    [beverages]
  )

  return {
    beverageRows,
  }
}
