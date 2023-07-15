import { motion } from "framer-motion"
import { FC, useEffect } from "react"

import {
  selectBeverages,
  selectCursor,
  useBeverageStore,
} from "../../../../5_entities/Beverage/lib/store"
import { BeverageCardList } from "../../../../5_entities/Beverage/ui"
import { maxRecipesViewed } from "../../consts"
import { useLazyBeverages } from "../../lib/hooks"
import { concatIds } from "../../lib/utils"
import styles from "./BeverageLimitList.module.scss"

type BeverageLimitListProps = {
  isLoading: boolean
  fetchNextPage: () => void
}

export const BeverageLimitList: FC<BeverageLimitListProps> = ({ fetchNextPage, isLoading }) => {
  const { beverages } = useBeverageStore(selectBeverages)
  const { cursor, cursorNext, cursorPrev } = useBeverageStore(selectCursor)
  const { beverageRows } = useLazyBeverages(beverages, cursor)

  useEffect(() => {
    const loadThreshold = maxRecipesViewed * 2

    const isEnoughBeverages = cursor + loadThreshold < beverages.length

    if (!isEnoughBeverages) {
      fetchNextPage()
    }
  }, [beverages, cursor, fetchNextPage])

  const anyBeverages = !!beverages?.length

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <ul className={styles["beverage-limit-list"]}>
      <motion.li onViewportEnter={cursorPrev} />

      {anyBeverages &&
        beverageRows.map((row) => (
          <li className={styles["beverage-list-row"]} key={concatIds(row)}>
            <BeverageCardList beverages={row} />
          </li>
        ))}

      <motion.li onViewportEnter={cursorNext} />
    </ul>
  )
}
