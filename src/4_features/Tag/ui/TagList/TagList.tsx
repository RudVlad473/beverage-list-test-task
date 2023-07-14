import { FC } from "react"

import styles from "./TagList.module.scss"

type TagListProps = {}

export const TagList: FC<TagListProps> = ({}) => {
  return <div className={styles["tag-list"]}></div>
}
