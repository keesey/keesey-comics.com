import "animate.css"
import { type RefObject, useCallback, useRef } from "react"
const PREFIX = "animate__"
export const useAnimation = <T extends Element = Element>(
  animation: string,
): Readonly<[RefObject<T | null>, () => Promise<void>]> => {
  const ref = useRef<T | null>(null)
  const trigger = useCallback(
    () =>
      new Promise<void>(resolve => {
        const element = ref.current
        const classNames = [`${PREFIX}animated`, `${PREFIX}${animation}`]
        element?.classList.add(...classNames)
        const handleAnimationEnd = (event: Event) => {
          event.stopPropagation()
          element?.classList.remove(...classNames)
          resolve()
        }
        element?.addEventListener("animationend", handleAnimationEnd, {
          once: true,
        })
      }),
    [animation],
  )
  return [ref, trigger]
}
