import { useCallback, useEffect } from "react"

import { useBeverageAmount, useBeverageCursor, useBeveragePages } from "."
import { usePageStore } from "../../../../6_shared/lib/store"
import { selectBeverages, useBeverageStore } from "../store"

export function useInfiniteBeverages() {
  const { beverages, appendBeverages } = useBeverageStore(selectBeverages)
  const { page, incrementPage } = usePageStore()

  useEffect(() => {
    console.log({
      beverages,
    })
  }, [beverages])

  const { isLoading, isInitialLoading } = useBeveragePages(page, appendBeverages)

  const nextPage = useCallback(() => {
    const loading = isLoading || isInitialLoading

    if (!loading) {
      incrementPage()
    }
  }, [incrementPage, isInitialLoading, isLoading])

  useBeverageAmount(beverages, nextPage)

  useBeverageCursor(beverages, nextPage)

  return {
    isLoading,
  }
}
