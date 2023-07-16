import { FC } from "react"

import styles from "./List.module.scss"

type ListProps = {
  items: string[]
}

export const List: FC<ListProps> = ({ items }) => {
  return (
    <ul className={styles["list"]}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
