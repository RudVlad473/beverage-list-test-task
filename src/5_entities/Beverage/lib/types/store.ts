import { TBeverages, TSelectedBeverage, TSelectedBeverages } from "."

export type TBeverageStore = {
  beverages: TBeverages
  setBeverages: (beverages: TBeverages) => void
  appendBeverages: (beverages: TBeverages) => void

  cursor: number
  cursorNext: () => void
  cursorPrev: () => void

  selectedBeverages: TSelectedBeverages
  selectBeverage: (beverage: TSelectedBeverage) => void
  selectAll: () => void
  removeSelectedBeverages: () => void
}
