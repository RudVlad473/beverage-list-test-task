import { FC, PropsWithChildren } from "react"

import styles from "./Header.module.scss"

type HeaderProps = PropsWithChildren

export const Header: FC<HeaderProps> = ({ children }) => {
  return <h1 className={styles["header"]}>{children}</h1>
}
