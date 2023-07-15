import { FC, useCallback, useEffect } from "react"

import {
  selectBeverages,
  selectCursor,
  selectSelectedBeverages,
  useBeverageStore,
} from "../../../../5_entities/Beverage/lib/store"
import { TBtnType } from "../../../../6_shared/lib/types"
import { Button } from "../../../../6_shared/ui"
import { maxRecipesRendered } from "../../../BeverageLimitList/consts"
import styles from "./Toolbar.module.scss"

type ToolbarProps = {
  fetchNextPage: () => void
}

export const Toolbar: FC<ToolbarProps> = ({ fetchNextPage }) => {
  const { beverages } = useBeverageStore(selectBeverages)
  const { cursor } = useBeverageStore(selectCursor)
  const { selectedBeverages, removeSelectedBeverages, selectAll } =
    useBeverageStore(selectSelectedBeverages)

  useEffect(() => {
    console.log({
      beverages,
    })
  }, [beverages])

  const handleRemoveSelected = useCallback(() => {
    const isEnoughBeveragesLeft = beverages.length - selectedBeverages.length > maxRecipesRendered
    const areAllBeveragesViewed = cursor < beverages.length

    removeSelectedBeverages()

    if (!isEnoughBeveragesLeft && areAllBeveragesViewed) {
      console.log("fetching")

      fetchNextPage()
    }
  }, [beverages.length, cursor, fetchNextPage, removeSelectedBeverages, selectedBeverages.length])

  const handleSelectAll = useCallback(() => {
    selectAll()
  }, [selectAll])

  const anySelected = selectedBeverages.length > 0

  return (
    <section className={styles.toolbar}>
      <div className={styles.controls}>
        {anySelected ? (
          <>
            <header className={styles.info}>
              <span>Beverages selected: ({selectedBeverages.length})</span>
            </header>
            <div className={styles.btn}>
              <Button onClick={handleSelectAll}>SELECT ALL</Button>
            </div>
            <div className={styles.btn}>
              <Button btnType={TBtnType.DANGER} onClick={handleRemoveSelected}>
                REMOVE SELECTED
              </Button>
            </div>
          </>
        ) : (
          <p className={styles.toolbar}>Right-click on beverage to select it!</p>
        )}
      </div>
      <ul className={styles.tags}></ul>
    </section>
  )
}
