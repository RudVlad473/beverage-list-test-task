import { FC } from "react"

import { Tag } from ".."
import { TTags } from "../../lib/types"
import styles from "./TagList.module.scss"

type TagListProps = {
  tags: TTags
}

export const TagList: FC<TagListProps> = ({ tags }) => {
  return (
    <ul className={styles["tag-list"]}>
      {tags.map((tag) => (
        <li key={tag.tag} className={styles.tag}>
          <Tag {...tag} />
        </li>
      ))}
    </ul>
  )
}
