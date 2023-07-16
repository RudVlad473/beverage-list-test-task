import { FC, useLayoutEffect } from "react"

import { BeverageLimitList } from "../../3_widgets/BeverageLimitList/ui"
import { Toolbar } from "../../3_widgets/Toolbar/ui"
import { useInfiniteBeverages } from "../../5_entities/Beverage/lib/hooks"
import { useScrollIntoView } from "../../6_shared/lib/hooks"
import styles from "./Home.module.scss"

export const Home: FC = () => {
  const { isLoading } = useInfiniteBeverages()

  const { ref, scrollIntoView } = useScrollIntoView<HTMLDivElement>()

  useLayoutEffect(() => {
    scrollIntoView("center")
  }, [scrollIntoView])

  return (
    <div ref={ref} className={styles.home}>
      <header className={styles.toolbar}>
        <Toolbar />
      </header>
      <article className={styles.list}>
        {isLoading ? <p>Loading...</p> : <BeverageLimitList />}
      </article>
    </div>
  )
}
