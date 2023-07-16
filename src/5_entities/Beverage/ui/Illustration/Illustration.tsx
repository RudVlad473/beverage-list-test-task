import classNames from "classnames"
import { FC } from "react"

import { TIllustrationType } from "../../lib/types"
import styles from "./Illustration.module.scss"

type IllustrationProps = {
  src: string
  type?: TIllustrationType
}

const typeStyleMap: Record<TIllustrationType, string> = {
  [TIllustrationType.SMALL]: styles["illustration--sm"],
  [TIllustrationType.LARGE]: styles["illustration--lg"],
}

export const Illustration: FC<IllustrationProps> = ({ src, type = TIllustrationType.SMALL }) => {
  return (
    <img
      src={src}
      alt="Beverage"
      className={classNames(styles["illustration"], typeStyleMap[type])}
    />
  )
}
