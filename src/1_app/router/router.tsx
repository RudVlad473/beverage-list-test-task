import { createBrowserRouter } from "react-router-dom"

import { BeverageViewPage } from "../../2_pages/BeverageViewPage"
import { Home } from "../../2_pages/Home"
import { TRoute } from "../../6_shared/lib/types"
import { dynamicRoute } from "../../6_shared/lib/utils"

export const router = createBrowserRouter([
  {
    path: TRoute.HOME,
    element: <Home />,
  },
  {
    path: dynamicRoute(TRoute.BEVERAGE_BY_ID),
    element: <BeverageViewPage />,
  },
])
