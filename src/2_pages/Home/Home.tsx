import { FC } from "react"

import { BeverageLimitList } from "../../3_widgets/BeverageLimitList/ui"
import { Toolbar } from "../../3_widgets/Toolbar/ui"
import { useInfiniteBeverages } from "../../5_entities/Beverage/lib/hooks"
import styles from "./Home.module.scss"

export const Home: FC = () => {
  const { fetchNextPage, isLoading } = useInfiniteBeverages()

  return (
    <div className={styles.home}>
      <header className={styles.toolbar}>
        <Toolbar fetchNextPage={fetchNextPage} />
      </header>
      <article className={styles.list}>
        <BeverageLimitList fetchNextPage={fetchNextPage} isLoading={isLoading} />
      </article>
    </div>
  )
}
