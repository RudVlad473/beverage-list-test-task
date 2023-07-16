import { FC, PropsWithChildren } from "react"

import styles from "./Article.module.scss"

type ArticleProps = PropsWithChildren<{
  cutoffLines?: number
}>

export const Article: FC<ArticleProps> = ({ children }) => {
  return <article className={styles["article"]}>{children}</article>
}
