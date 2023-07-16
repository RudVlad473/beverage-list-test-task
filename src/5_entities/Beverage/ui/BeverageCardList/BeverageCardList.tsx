/* eslint-disable react/prop-types */
import { memo } from "react"

import { BeverageCard } from ".."
import { TBeverageCards } from "../../lib/types"
import styles from "./BeverageCardList.module.scss"

type BeverageCardListProps = {
  beverages: TBeverageCards
}

export const BeverageCardList = memo<BeverageCardListProps>(({ beverages }) => {
  return (
    <ul className={styles["beverage-card-list"]}>
      {beverages.map((beverage) => (
        <li key={beverage.id} className={styles["beverage-card"]}>
          <BeverageCard {...beverage} />
        </li>
      ))}
    </ul>
  )
})
