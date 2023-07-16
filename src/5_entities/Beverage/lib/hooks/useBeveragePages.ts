import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect, useMemo, useRef } from "react"

import { requestBeverages } from "../../api"
import { TBeverages } from "../types"

export function useBeveragePages(page: number, appendBeverages: (beverages: TBeverages) => void) {
  const { fetchNextPage, data, isLoading, isInitialLoading } = useInfiniteQuery({
    queryKey: ["beverages"],
    queryFn: ({ pageParam }) => requestBeverages(pageParam),
    enabled: false,
  })

  const isPageAlreadyRequested = useMemo<boolean>(() => {
    return data?.pages.length === page
  }, [data?.pages.length, page])

  const lastAppendedPageRef = useRef<number | null>(null)

  useEffect(() => {
    if (isPageAlreadyRequested) {
      return
    }

    fetchNextPage({ pageParam: page }).then(({ data }) => {
      const newPageBeverages = data?.pages.at(-1)?.data

      const isPageAlreadyAppended = lastAppendedPageRef.current === page

      if (newPageBeverages && !isPageAlreadyAppended) {
        console.log({
          lastAppendedPage: lastAppendedPageRef.current,
          page,
        })

        appendBeverages(newPageBeverages)

        lastAppendedPageRef.current = page
      }
    })
  }, [appendBeverages, fetchNextPage, isLoading, isPageAlreadyRequested, page])

  return {
    isLoading,
    isInitialLoading,
  }
}
