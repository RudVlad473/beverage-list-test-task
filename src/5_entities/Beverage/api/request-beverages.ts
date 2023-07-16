import { TBeveragesEndpoint, axiosInstance } from "../../../6_shared/api"
import { TBeverages } from "../lib/types"

export function requestBeverages(page: number) {
  return axiosInstance.get<TBeverages>(TBeveragesEndpoint.BEVERAGES, {
    params: {
      page,
    },
  })
}
