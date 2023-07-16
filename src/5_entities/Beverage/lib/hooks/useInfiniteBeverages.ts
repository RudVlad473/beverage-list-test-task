import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect, useMemo, useRef, useState } from "react"

import { TBeveragesEndpoint, axiosInstance } from "../../../../6_shared/api"
import { initPage } from "../../../../6_shared/consts"
import { usePageStore } from "../../../../6_shared/lib/store"
import { selectBeverages, useBeverageStore } from "../store"
import { TBeverages } from "../types"

export function useInfiniteBeverages() {
  const { appendBeverages } = useBeverageStore(selectBeverages)
  const { page } = usePageStore()

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ["beverages"],
    queryFn: ({ pageParam }) =>
      axiosInstance.get<TBeverages>(TBeveragesEndpoint.BEVERAGES, {
        params: {
          page: pageParam,
        },
      }),
    enabled: false,
  })

  const lastPageAppended = useRef<number | undefined>(data?.pages.length)

  const isCurrentPageFetched = useMemo<boolean>(() => {
    return page === data?.pages.length
  }, [data?.pages.length, page])

  useEffect(() => {
    if (isCurrentPageFetched) {
      return
    }

    fetchNextPage({
      pageParam: page,
    })
  }, [fetchNextPage, isCurrentPageFetched, page])

  // Renew data on every new request
  useEffect(() => {
    const isNewPageFetched = (data?.pages.length || 0) === page

    const isPageAlreadyAppended = lastPageAppended.current === page

    if (!isNewPageFetched || isPageAlreadyAppended) {
      return
    }

    const lastPageBeverages = data?.pages.at(-1)?.data

    if (lastPageBeverages) {
      appendBeverages(lastPageBeverages)

      lastPageAppended.current = page
    }
  }, [appendBeverages, data?.pages, lastPageAppended, page])

  return {
    isLoading,
  }
}
