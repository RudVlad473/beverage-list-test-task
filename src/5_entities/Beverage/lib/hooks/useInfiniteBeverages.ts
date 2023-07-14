import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect } from "react"

import { TBeveragesEndpoint, axiosInstance } from "../../../../6_shared/api"
import { selectBeverages, useBeverageStore } from "../store"
import { TBeverages } from "../types"

export function useInfiniteBeverages() {
  const { appendBeverages } = useBeverageStore(selectBeverages)

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ["beverages"],
    queryFn: ({ pageParam }) =>
      axiosInstance.get<TBeverages>(TBeveragesEndpoint.BEVERAGES, {
        params: {
          page: pageParam,
        },
      }),
    getNextPageParam: (_, allPages): number => allPages.length + 1,
    refetchOnWindowFocus: false,
  })

  //renew data on every new request
  useEffect(() => {
    const lastPageBeverages = data?.pages.at(-1)?.data

    if (lastPageBeverages) {
      appendBeverages(lastPageBeverages)
    }
  }, [appendBeverages, data?.pages])

  return {
    fetchNextPage,
    isLoading,
  }
}
