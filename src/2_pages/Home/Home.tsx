import { FC, useCallback } from "react"

import { BeverageLimitList } from "../../3_widgets/BeverageLimitList/ui"
import { Toolbar } from "../../3_widgets/Toolbar/ui"
import { useInfiniteBeverages } from "../../5_entities/Beverage/lib/hooks"
import { useScrollIntoView } from "../../6_shared/lib/hooks"
import styles from "./Home.module.scss"

export const Home: FC = () => {
  const { fetchNextPage, isLoading } = useInfiniteBeverages()

  const { scrollIntoView, ref } = useScrollIntoView<HTMLDivElement>()

  const nextPage = useCallback(() => {
    fetchNextPage()

    scrollIntoView()
  }, [fetchNextPage, scrollIntoView])

  return (
    <div ref={ref} className={styles.home}>
      <header className={styles.toolbar}>
        <Toolbar fetchNextPage={nextPage} />
      </header>
      <article className={styles.list}>
        <BeverageLimitList fetchNextPage={nextPage} isLoading={isLoading} />
      </article>
    </div>
  )
}
