import compose from "compose-function"

import { withReactQuery } from "./withReactQuery"
import { withReactRouter } from "./withReactRouter"

export const withProviders = compose(withReactQuery, withReactRouter)
