import classNames from "classnames"
import { FC, useCallback } from "react"
import { useNavigate } from "react-router"

import { Article } from "../../../../6_shared/ui"
import { Header } from "../../../../6_shared/ui/Header"
import { selectSelectedBeverages, useBeverageStore } from "../../lib/store"
import { TBeverageCard } from "../../lib/types"
import { Illustration } from "../Illustration"
import styles from "./BeverageCard.module.scss"

type BeverageCardProps = TBeverageCard

export const BeverageCard: FC<BeverageCardProps> = ({
  id,
  contributed_by,
  description,
  image_url,
  name,
  first_brewed,
}) => {
  const navigate = useNavigate()

  const { selectBeverage, selectedBeverages } = useBeverageStore(selectSelectedBeverages)

  const isSelected = !!selectedBeverages.find((selectedId) => selectedId === id)

  const handleCardSelect = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.preventDefault()
      selectBeverage(id)
    },
    [id, selectBeverage]
  )

  return (
    <section
      id={id.toString()}
      className={classNames(styles["beverage-card"], {
        [styles["beverage-card--selected"]]: isSelected,
      })}
      onClick={() => navigate("/" + id)}
      onContextMenu={handleCardSelect}>
      <div className={styles.illustration}>
        <Illustration src={image_url} />
      </div>
      <div className={styles.name}>
        <Header>#{id}</Header>
      </div>
      <div className={styles.name}>
        <Header>{name}</Header>
      </div>
      <div className={styles.descr}>
        <Article cutoffLines={5}>{description}</Article>
      </div>
      <footer className={styles.footer}>
        <p className={styles["first-brewed"]}>First brewed: {first_brewed}</p>
        <p className={styles["contributed-by"]}>{contributed_by}</p>
      </footer>
    </section>
  )
}
