import { FC } from "react"

import styles from "./Toolbar.module.scss"

type ToolbarProps = {}

export const Toolbar: FC<ToolbarProps> = ({}) => {
  return <div className={styles["toolbar"]}></div>
}
