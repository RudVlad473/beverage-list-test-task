import { TBeveragesStore } from "."

export const selectBeverages = ({ beverages, setBeverages, appendBeverages }: TBeveragesStore) => ({
  beverages,
  setBeverages,
  appendBeverages,
})

export const selectSelectedBeverages = ({
  selectedBeverages,
  selectBeverage,
}: TBeveragesStore) => ({
  selectedBeverages,
  selectBeverage,
})
