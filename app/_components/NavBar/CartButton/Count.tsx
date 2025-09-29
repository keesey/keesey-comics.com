"use client"
import "animate.css"
import { useCount } from "@/lib/cart/hooks/useCount"
import { useEffect, useState } from "react"
import { useAnimation } from "@/lib/animation/useAnimation"
export const Count = () => {
  const count = useCount()
  const [animationRef, animate] = useAnimation<HTMLDivElement>("flash")
  const [lastCount, setLastCount] = useState(count)
  useEffect(() => {
    if (count && count !== lastCount) {
      setLastCount(count)
      animate()
    }
  }, [animate, count, lastCount])
  if (!count) {
    return null
  }
  return (
    <div
      ref={animationRef}
      className="absolute top-[-14] right-[-14] rounded-full bg-red-600 px-[6] text-center text-sm font-semibold text-white transition-transform group-hover:scale-120"
    >
      {count}
    </div>
  )
}
