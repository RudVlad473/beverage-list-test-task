import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

import { TBeveragesEndpoint, axiosInstance } from "../../../../6_shared/api"
import { selectBeverages, useBeveragesStore } from "../store"
import { TBeverages } from "../types"

export function useBeverages() {
  const { beverages, setBeverages } = useBeveragesStore(selectBeverages)

  const [page, setPage] = useState<number>(() => 1)

  const { data, isLoading } = useQuery({
    queryKey: ["beverages", page],
    queryFn: () =>
      axiosInstance.get<TBeverages>(TBeveragesEndpoint.BEVERAGES, {
        params: {
          page,
        },
      }),
  })

  useEffect(() => {
    const requestedBeverages = data?.data

    if (requestedBeverages) {
      setBeverages(requestedBeverages)
    }
  }, [data?.data, setBeverages])

  function nextPage() {
    setPage((currentPage) => currentPage + 1)
  }

  return {
    beverages,
    isLoading,
    nextPage,
  }
}
