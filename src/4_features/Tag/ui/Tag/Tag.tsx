import classNames from "classnames"
import { FC } from "react"

import { TTag } from "../../lib/types"
import styles from "./Tag.module.scss"

type TagProps = TTag

export const Tag: FC<TagProps> = ({ id, tag, onClick, isFeatured = false }) => {
  return (
    <span
      className={classNames(styles.tag, { [styles["tag--featured"]]: isFeatured })}
      title={tag}
      onClick={() => id && onClick && onClick(id)}>
      {tag}
    </span>
  )
}
