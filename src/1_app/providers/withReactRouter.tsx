import { RouterProvider } from "react-router"

import { router } from "../router"

export const withReactRouter = (component: () => React.ReactNode) => () => {
  return <RouterProvider router={router} />
}
 