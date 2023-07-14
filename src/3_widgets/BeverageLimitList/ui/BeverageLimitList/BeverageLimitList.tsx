import { FC } from "react"

import { selectBeverages, useBeverageStore } from "../../../../5_entities/Beverage/lib/store"
import { BeverageCardList } from "../../../../5_entities/Beverage/ui"
import { useLazyBeverages } from "../../lib/hooks"
import { concatIds } from "../../lib/utils"
import styles from "./BeverageLimitList.module.scss"

type BeverageLimitListProps = {
  isLoading: boolean
  fetchNextPage: () => void
}

export const BeverageLimitList: FC<BeverageLimitListProps> = ({ isLoading }) => {
  const { beverages } = useBeverageStore(selectBeverages)

  const { beverageRows } = useLazyBeverages(beverages)

  const anyBeverages = !!beverages?.length

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <ul className={styles["beverage-limit-list"]}>
      {anyBeverages &&
        beverageRows.map((row) => (
          <li className={styles["beverage-list-row"]} key={concatIds(row)}>
            <BeverageCardList beverages={row} />
          </li>
        ))}
    </ul>
  )
}
