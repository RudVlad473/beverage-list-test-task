import { FC } from "react"

import styles from "./BeverageViewPage.module.scss"

type BeverageViewPageProps = {}

export const BeverageViewPage: FC<BeverageViewPageProps> = ({}) => {
  return <div className={styles["beverage-view-page"]}></div>
}
