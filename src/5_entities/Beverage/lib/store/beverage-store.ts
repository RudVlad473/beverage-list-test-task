import { create } from "zustand"

import { maxRecipesRendered } from "../../../../3_widgets/BeverageLimitList/consts"
import { getViewedBeverages } from "../../../../3_widgets/BeverageLimitList/lib/utils"
import { TBeverageStore, TSelectedBeverages } from "../types"

export const useBeverageStore = create<TBeverageStore>((set, get) => ({
  beverages: [],
  setBeverages: (beverages) => set({ beverages }),
  appendBeverages: (beverages) => set({ beverages: get().beverages.concat(beverages) }),

  selectedBeverages: [],
  selectBeverage: (beverage) => {
    //select & deselect

    const selectedBeverages = get().selectedBeverages

    const selectedBeverageIndex = selectedBeverages.findIndex(
      (beverageId) => beverageId === beverage
    )
    const isAlreadySelected = selectedBeverageIndex !== -1

    let finalSelectedBeverages = selectedBeverages

    if (isAlreadySelected) {
      finalSelectedBeverages = selectedBeverages.filter((beverageId) => beverageId !== beverage)
    } else {
      finalSelectedBeverages = selectedBeverages.concat(beverage)
    }

    set({ selectedBeverages: finalSelectedBeverages })
  },
  selectAll: () => {
    const viewedBeverages = getViewedBeverages(get().beverages)

    let selectedBeverages: TSelectedBeverages = []

    const areAllBeveragesSelected = (get().selectedBeverages.length === maxRecipesRendered)

    if (!areAllBeveragesSelected) {
      selectedBeverages = viewedBeverages.map(({ id }) => id)
    }

    set({
      selectedBeverages,
    })
  },
  removeSelectedBeverages: () => {
    const filteredBeverages = get().beverages.filter(
      ({ id }) => !get().selectedBeverages.includes(id)
    )
    set({ beverages: filteredBeverages, selectedBeverages: [] })
  },
}))