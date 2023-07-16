import { TBeverage, TBeverageStore } from "../types"

export const selectBeverages = ({ beverages, setBeverages, appendBeverages }: TBeverageStore) => ({
  beverages,
  setBeverages,
  appendBeverages,
})

export const selectBeverage = ({ beverages }: TBeverageStore, { id }: Pick<TBeverage, "id">) =>
  beverages.find((beverage) => beverage.id === id)

export const selectCursor = ({ cursor, cursorNext, cursorPrev }: TBeverageStore) => ({
  cursor,
  cursorNext,
  cursorPrev,
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
