import { FC } from "react"

import { BeverageCard } from ".."
import { TBeverageCards } from "../../lib/types"
import styles from "./BeverageCardList.module.scss"

type BeverageCardListProps = {
  beverages: TBeverageCards
}

export const BeverageCardList: FC<BeverageCardListProps> = ({ beverages }) => {
  return (
    <ul className={styles["beverage-card-list"]}>
      {beverages.map((beverage) => (
        <li key={beverage.id}>
          <BeverageCard {...beverage} />
        </li>
      ))}
    </ul>
  )
}
