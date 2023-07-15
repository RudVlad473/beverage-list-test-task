import { useCallback, useEffect, useRef } from "react"

export function useScrollIntoView<T extends HTMLElement>(trigger?: boolean) {
  const ref = useRef<T>(null)

  const scrollIntoView = useCallback((block: ScrollLogicalPosition = "start") => {
    if (ref.current) {
      ref.current.scrollIntoView({ block })
    }
  }, [])

  useEffect(() => {
    if (trigger) {
      scrollIntoView()
    }
  }, [ref, scrollIntoView, trigger])

  return {
    ref,
    scrollIntoView,
  }
}
