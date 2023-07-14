import { FC } from "react"

import { BeverageLimitList } from "../../3_widgets/BeverageLimitList/ui"
import styles from "./Home.module.scss"

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <BeverageLimitList />
    </div>
  )
}
