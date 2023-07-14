import { create } from "zustand"

import { TBeverages, TSelectedBeverage, TSelectedBeverages } from "../types"

export type TBeveragesStore = {
  beverages: TBeverages
  setBeverages: (beverages: TBeverages) => void
  appendBeverages: (beverages: TBeverages) => void

  selectedBeverages: TSelectedBeverages
  selectBeverage: (beverage: TSelectedBeverage) => void
}

export const useBeveragesStore = create<TBeveragesStore>((set, get) => ({
  beverages: [],
  setBeverages: (beverages) => set({ beverages }),
  appendBeverages: (beverages) => set({ beverages }),

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
}))
