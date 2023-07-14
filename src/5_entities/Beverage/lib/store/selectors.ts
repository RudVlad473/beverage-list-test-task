import { TBeverageStore } from "../types"

export const selectBeverages = ({ beverages, setBeverages, appendBeverages }: TBeverageStore) => ({
  beverages,
  setBeverages,
  appendBeverages,
})

export const selectSelectedBeverages = ({
  selectedBeverages,
  selectBeverage,
  removeSelectedBeverages,
  selectAll,
}: TBeverageStore) => ({
  selectedBeverages,
  selectBeverage,
  removeSelectedBeverages,
  selectAll,
})
