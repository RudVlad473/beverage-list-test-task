import { useEffect } from "react"

import { beveragesPerPage } from "../../../../6_shared/consts"
import { TBeverages } from "../types"

//increments the page everytime amount is changed
export function useBeverageAmount(beverages: TBeverages, incrementPage: () => void) {
  useEffect(() => {
    const beverageAmountThreshold = beveragesPerPage

    const isEnoughBeverages = beverages.length >= beverageAmountThreshold

    if (!isEnoughBeverages) {
      incrementPage()
    }
  }, [beverages.length, incrementPage])
}
