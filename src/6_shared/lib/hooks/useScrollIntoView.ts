import { useCallback, useEffect, useRef } from "react"

export function useScrollIntoView<T extends HTMLElement>(
  block: ScrollLogicalPosition = "start",
  trigger?: boolean
) {
  const ref = useRef<T>(null)

  const scrollIntoView = useCallback(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ block })
    }
  }, [block])

  useEffect(() => {
    if (trigger) {
      scrollIntoView()
    }
  }, [block, ref, scrollIntoView, trigger])

  return {
    ref,
    scrollIntoView,
  }
}
