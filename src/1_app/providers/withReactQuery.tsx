import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export const withReactQuery = (component: () => React.ReactNode) => () => {
  return <QueryClientProvider client={queryClient}>{component()}</QueryClientProvider>
}
