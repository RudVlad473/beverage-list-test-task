import { motion } from "framer-motion"
import { FC } from "react"

import {
  selectBeverages,
  selectCursor,
  useBeverageStore,
} from "../../../../5_entities/Beverage/lib/store"
import { BeverageCardList } from "../../../../5_entities/Beverage/ui"
import { useLazyBeverages } from "../../lib/hooks"
import { concatIds } from "../../lib/utils"
import styles from "./BeverageLimitList.module.scss"

export const BeverageLimitList: FC = () => {
  const { beverages } = useBeverageStore(selectBeverages)
  const { cursor, cursorNext, cursorPrev } = useBeverageStore(selectCursor)
  const { beverageRows } = useLazyBeverages(beverages, cursor)

  const anyBeverages = !!beverages?.length

  return (
    <ul className={styles["beverage-limit-list"]}>
      <motion.li key="top-trigger" onViewportEnter={cursorPrev} />

      {anyBeverages &&
        beverageRows.map((row) => (
          <li className={styles["beverage-list-row"]} key={concatIds(row)}>
            <BeverageCardList beverages={row} />
          </li>
        ))}

      <motion.li key="bottom-trigger" onViewportEnter={cursorNext} />
    </ul>
  )
}
