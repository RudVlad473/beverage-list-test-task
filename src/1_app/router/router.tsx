import { createBrowserRouter } from "react-router-dom"

import { BeverageViewPage } from "../../2_pages/BeverageViewPage"
import { Home } from "../../2_pages/Home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "beverage/:beverageId",
    element: <BeverageViewPage />,
  },
])
