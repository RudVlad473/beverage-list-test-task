import { motion } from "framer-motion"
import { FC, useEffect } from "react"

import {
  selectBeverages,
  selectCursor,
  useBeverageStore,
} from "../../../../5_entities/Beverage/lib/store"
import { BeverageCardList } from "../../../../5_entities/Beverage/ui"
import { usePageStore } from "../../../../6_shared/lib/store"
import { maxRecipesViewed } from "../../consts"
import { useLazyBeverages } from "../../lib/hooks"
import { concatIds } from "../../lib/utils"
import styles from "./BeverageLimitList.module.scss"

export const BeverageLimitList: FC = () => {
  const { incrementPage } = usePageStore()
  const { beverages } = useBeverageStore(selectBeverages)
  const { cursor, cursorNext, cursorPrev } = useBeverageStore(selectCursor)
  const { beverageRows } = useLazyBeverages(beverages, cursor)

  useEffect(() => {
    console.log({
      beverages,
    })
  }, [beverages])

  useEffect(() => {
    const loadThreshold = maxRecipesViewed * 2

    const isEnoughBeverages = cursor + loadThreshold < beverages.length

    if (!isEnoughBeverages && beverages.length !== 0) {
      // console.log('list trigger');

      incrementPage()
    }
  }, [beverages.length, cursor, incrementPage])

  const anyBeverages = !!beverages?.length

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
