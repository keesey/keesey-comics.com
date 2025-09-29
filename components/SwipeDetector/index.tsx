"use client"
import { type ReactNode, useState } from "react"
export interface CarouselSwipeDetectorProps {
  children: ReactNode
  className?: string
  minSwipeDistance?: number
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
}
export const SwipeDetector = ({
  children,
  className,
  minSwipeDistance = 50,
  onSwipeLeft,
  onSwipeRight,
}: CarouselSwipeDetectorProps) => {
  const [touchStart, setTouchStart] = useState(NaN)
  const [touchEnd, setTouchEnd] = useState(NaN)
  return (
    <div
      className={className}
      onTouchCancel={() => {
        setTouchStart(NaN)
        setTouchEnd(NaN)
      }}
      onTouchEnd={() => {
        const distance = touchEnd - touchStart
        if (distance >= minSwipeDistance) {
          onSwipeLeft?.()
        } else if (distance <= -minSwipeDistance) {
          onSwipeRight?.()
        }
      }}
      onTouchMove={event => setTouchEnd(event.targetTouches[0].clientX)}
      onTouchStart={event => {
        setTouchEnd(NaN)
        setTouchStart(event.targetTouches[0].clientX)
      }}
    >
      {children}
    </div>
  )
}
