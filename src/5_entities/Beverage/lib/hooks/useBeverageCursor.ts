//increments the page everytime cursor reaches view threshold (before or at the time when user can see the end)
import { useEffect } from "react"

import { maxRecipesViewed } from "../../../../3_widgets/BeverageLimitList/consts"
import { selectCursor, useBeverageStore } from "../store"
import { TBeverages } from "../types"

export function useBeverageCursor(beverages: TBeverages, incrementPage: () => void) {
  const { cursor } = useBeverageStore(selectCursor)

  useEffect(() => {
    const viewThreshold = cursor + maxRecipesViewed * 2

    const isViewThresholdCrossed = viewThreshold >= beverages.length

    console.log({
      cursor,
      beverages: beverages.length,
    })

    if (isViewThresholdCrossed) {
      incrementPage()
    }
  }, [beverages.length, cursor, incrementPage])
}
