import classNames from "classnames"
import { FC } from "react"

import { TBtnType } from "../../lib/types"
import styles from "./Button.module.scss"

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  btnType?: TBtnType
}

const typeStyleMap: Record<TBtnType, string> = {
  [TBtnType.DANGER]: styles["button--danger"],
}

export const Button: FC<ButtonProps> = ({ btnType, children, ...props }) => {
  return (
    <button {...props} className={classNames(styles["button"], btnType && typeStyleMap[btnType])}>
      {children}
    </button>
  )
}
