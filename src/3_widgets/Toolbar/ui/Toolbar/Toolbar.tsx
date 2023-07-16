import { FC } from "react"

import { TagList } from "../../../../4_features/Tag/ui"
import {
  selectBeverages,
  selectSelectedBeverages,
  useBeverageStore,
} from "../../../../5_entities/Beverage/lib/store"
import { TBtnType } from "../../../../6_shared/lib/types"
import { Button } from "../../../../6_shared/ui"
import styles from "./Toolbar.module.scss"

export const Toolbar: FC = () => {
  const { beverages } = useBeverageStore(selectBeverages)
  const { selectedBeverages, removeSelectedBeverages, selectAll } =
    useBeverageStore(selectSelectedBeverages)

  const anySelected = selectedBeverages.length > 0

  const selectedBeveragesTags = selectedBeverages
    .map((beverageId) => beverages.find(({ id }) => beverageId === id)!.name)
    .filter((v) => v)

  return (
    <section className={styles.toolbar}>
      <div className={styles.controls}>
        {anySelected ? (
          <>
            <header className={styles.info}>
              <span>Beverages selected: ({selectedBeverages.length})</span>
            </header>
            <div className={styles.btn}>
              <Button onClick={selectAll}>SELECT ALL</Button>
            </div>
            <div className={styles.btn}>
              <Button btnType={TBtnType.DANGER} onClick={removeSelectedBeverages}>
                REMOVE SELECTED
              </Button>
            </div>
          </>
        ) : (
          <p className={styles.toolbar}>Right-click on beverage to select it!</p>
        )}
      </div>
      <div>
        <TagList
          tags={selectedBeveragesTags.map((beverage) => ({
            tag: beverage,
          }))}
        />
      </div>
    </section>
  )
}
