import { FC, useLayoutEffect } from "react"
import { Navigate, useParams } from "react-router"
import { toast } from "react-toastify"

import { Table } from "../../4_features/Table/ui"
import { TagList } from "../../4_features/Tag/ui"
import { selectBeverage, useBeverageStore } from "../../5_entities/Beverage/lib/store"
import { TBeverage, TIllustrationType } from "../../5_entities/Beverage/lib/types"
import { concatValueAndUnit } from "../../5_entities/Beverage/lib/utils"
import { Illustration } from "../../5_entities/Beverage/ui/Illustration"
import { useScrollIntoView } from "../../6_shared/lib/hooks"
import { TRoute } from "../../6_shared/lib/types"
import { Article, Header } from "../../6_shared/ui"
import styles from "./BeverageViewPage.module.scss"

export const BeverageViewPage: FC = () => {
  const { id = "" } = useParams<TRoute.BEVERAGE_BY_ID>()

  const beverage = useBeverageStore((state) => selectBeverage(state, { id: +id }))

  const { ref, scrollIntoView } = useScrollIntoView<HTMLDivElement>()

  useLayoutEffect(() => {
    scrollIntoView("start")
  }, [scrollIntoView])

  if (!beverage) {
    toast.error("This beverage is not available")

    return <Navigate to={TRoute.HOME} replace />
  }

  const {
    abv,
    attenuation_level,
    ebc,
    ibu,
    ph,
    srm,
    target_fg,
    target_og,
    image_url,
    contributed_by,
    description,
    first_brewed,
    brewers_tips,
    name,
    tagline,
    food_pairing,
    ingredients,
    method,
    boil_volume,
    volume,
  } = beverage

  const tags: Partial<Record<keyof TBeverage, string | number>> = {
    abv,
    ibu,
    target_fg,
    target_og,
    ebc,
    srm,
    ph,
    attenuation_level,
  }

  return (
    <main ref={ref} className={styles["beverage-view-page"]}>
      <Illustration src={image_url} type={TIllustrationType.LARGE} />
      <section className={styles.content}>
        <header className={styles.header}>
          <div>
            <Header>
              #{id} {name}
            </Header>
          </div>
          <div>
            <Header>{tagline}</Header>
          </div>
        </header>
        <div className={styles.article}>
          <Article>{description}</Article>
        </div>
        <div className={styles.tags}>
          <TagList
            tags={Object.keys(tags)
              .filter((v) => v)
              .map((tag) => {
                const keyTag = tag as keyof TBeverage

                return {
                  tag: `${keyTag.replace("_", " ")}: ${tags[keyTag]}`,
                }
              })}
          />
        </div>
        <article className={styles.method}>
          <Header>Method:</Header>
          {method.mash_temp.length > 0 && (
            <Table
              title="Mash temperatures"
              headers={Object.keys(method.mash_temp[0])}
              rows={method.mash_temp.map(({ temp, duration }) => [
                temp.value + " " + temp.unit,
                duration || 0 + " m",
              ])}
            />
          )}
          <Table
            title="Details"
            headers={["name", "value"]}
            rows={[
              ["volume", concatValueAndUnit(volume)],
              ["boil volume", concatValueAndUnit(boil_volume)],
              ["fermentation", concatValueAndUnit(method.fermentation.temp)],
            ]}
          />

          {method.twist && <Table title="Twist" headers={[]} rows={[[method.twist]]} />}
        </article>

        <Header>Ingredients:</Header>
        <Table
          title="Malt"
          headers={Object.keys(ingredients.malt[0])}
          rows={ingredients.malt.map(({ name, amount }) => [name, concatValueAndUnit(amount)])}
        />
        <Table
          title="Hops"
          headers={Object.keys(ingredients.hops[0])}
          rows={ingredients.hops.map(({ name, amount, add, attribute }) => [
            name,
            concatValueAndUnit(amount),
            add,
            attribute,
          ])}
        />

        <Table title="Yeast" headers={[]} rows={[[ingredients.yeast]]} />

        {food_pairing.length > 0 && (
          <>
            <Header>Goes nicely with:</Header>
            <Table headers={[]} rows={food_pairing.map((pairing) => [pairing])} />
          </>
        )}

        <blockquote className={styles.tips}>
          {brewers_tips}
          <p className={styles.notation}>--Brewer</p>
        </blockquote>
        <footer className={styles.footer}>
          <time className={styles["first-brewed"]}>{first_brewed}</time>
          <p className={styles["contributed-by"]}>{contributed_by}</p>
        </footer>
      </section>
    </main>
  )
}
