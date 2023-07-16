import { motion } from "framer-motion"
import { FC, useCallback, useRef, useState } from "react"

import {
  selectBeverages,
  selectCursor,
  useBeverageStore,
} from "../../../../5_entities/Beverage/lib/store"
import { BeverageCardList } from "../../../../5_entities/Beverage/ui"
import { maxScrollRateLimitMs } from "../../consts"
import { useLazyBeverages } from "../../lib/hooks"
import { concatIds } from "../../lib/utils"
import styles from "./BeverageLimitList.module.scss"

export const BeverageLimitList: FC = () => {
  const { beverages } = useBeverageStore(selectBeverages)
  const { cursor, cursorNext, cursorPrev } = useBeverageStore(selectCursor)
  const { beverageRows } = useLazyBeverages(beverages, cursor)

  const anyBeverages = !!beverages?.length

  const prevTriggerTimeMsRef = useRef<number | null>(null)

  const canScroll = useCallback((entry: IntersectionObserverEntry | null) => {
    const currentTime = entry?.time || 0
    const prevTime = prevTriggerTimeMsRef.current || 0

    return currentTime - prevTime >= maxScrollRateLimitMs
  }, [])

  const handleCursorNext = useCallback(
    (entry: IntersectionObserverEntry | null) => {
      if (canScroll(entry)) {
        cursorNext()
      }
    },
    [canScroll, cursorNext]
  )
  const handleCursorPrev = useCallback(
    (entry: IntersectionObserverEntry | null) => {
      if (canScroll(entry)) {
        cursorPrev()
      }
    },
    [canScroll, cursorPrev]
  )

  return (
    <ul className={styles["beverage-limit-list"]}>
      <motion.li key="top-trigger" onViewportEnter={handleCursorPrev} />

      {anyBeverages &&
        beverageRows.map((row) => (
          <li className={styles["beverage-list-row"]} key={concatIds(row)}>
            <BeverageCardList beverages={row} />
          </li>
        ))}

      <motion.li key="bottom-trigger" onViewportEnter={handleCursorNext} />
    </ul>
  )
}
