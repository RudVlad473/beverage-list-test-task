import { FC } from "react"

import { useBeverages } from "../../../../5_entities/Beverage/lib/hooks"
import { BeverageCardList } from "../../../../5_entities/Beverage/ui"
import styles from "./BeverageLimitList.module.scss"

export const BeverageLimitList: FC = () => {
  const { beverages, isLoading } = useBeverages()

  const anyBeverages = !!beverages?.length

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <ul className={styles["beverage-limit-list"]}>
      {anyBeverages && (
        <li className={styles["beverage-list-row"]}>
          <BeverageCardList beverages={beverages} />
        </li>
      )}
    </ul>
  )
}
