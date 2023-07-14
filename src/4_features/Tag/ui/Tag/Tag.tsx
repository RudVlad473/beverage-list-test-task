import { FC } from "react"

import styles from "./Tag.module.scss"

type TagProps = {
  id: string
  title: string
  onClick: (id: string) => void
}

export const Tag: FC<TagProps> = ({}) => {
  return <div className={styles["tag"]}></div>
}
