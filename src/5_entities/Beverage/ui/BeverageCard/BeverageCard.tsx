import classNames from "classnames"
import { FC, useCallback } from "react"

import { selectSelectedBeverages, useBeverageStore } from "../../lib/store"
import { TBeverageCard } from "../../lib/types"
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
      onContextMenu={handleCardSelect}>
      <div className={styles.illustration}>
        <img src={image_url} alt="Beverage" />
      </div>
      <h3 className={styles.name}>#{id}</h3>
      <h2 className={styles.name}>{name}</h2>
      <article className={styles.descr}>{description}</article>
      <footer className={styles.footer}>
        <p className={styles["first-brewed"]}>First brewed: {first_brewed}</p>
        <p className={styles["contributed-by"]}>{contributed_by}</p>
      </footer>
    </section>
  )
}
