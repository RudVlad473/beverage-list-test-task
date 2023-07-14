import { FC } from "react"

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
  return (
    <section className={styles["beverage-card"]}>
      <img className={styles.illustration} src={image_url} alt="Beverage" />
      <h2 className={styles.name}>{name}</h2>
      <article className={styles.descr}>{description}</article>
      <aside className={styles["first-brewed"]}>First brewed: {first_brewed}</aside>
      <footer className={styles["contributed-by"]}>{contributed_by}</footer>
    </section>
  )
}
