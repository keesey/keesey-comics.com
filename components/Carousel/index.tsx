"use client"
import type { AppRoute } from "next/dist/build/swc/types"
import type { StaticImport } from "next/dist/shared/lib/get-img-props"
import type { LinkProps } from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { SwipeDetector } from "../SwipeDetector"
import { CarouselControls } from "./CarouselControls"
import { CarouselDots } from "./CarouselDots"
import { CarouselSlide } from "./CarouselSlide"
export type Slide = Readonly<{
  alt: string
  bgImgSrc?: string | StaticImport
  id: string
  imgSrc?: string | StaticImport
  isExternal?: true
  href: LinkProps<AppRoute>["href"]
}>
export interface CarouselProps {
  interval?: number
  slides: readonly Slide[]
}
export const Carousel = ({ slides, interval = 8000 }: CarouselProps) => {
  const [paused, setPaused] = useState(false)
  const [stack, setStack] = useState<Readonly<[number, number]>>([NaN, 0])
  const [previous, current] = stack
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const numSlides = slides.length
  const prevSlide = useCallback(
    () =>
      setStack(([, current]) => [
        current,
        (current - 1 + numSlides) % numSlides,
      ]),
    [numSlides],
  )
  const nextSlide = useCallback(
    () => setStack(([, current]) => [current, (current + 1) % numSlides]),
    [numSlides],
  )
  const setCurrent = useCallback(
    (value: number) => {
      setStack(prevStack => {
        if (
          value === prevStack[1] ||
          !isFinite(value) ||
          value !== Math.floor(value) ||
          value < 0 ||
          value >= numSlides
        ) {
          return prevStack
        }
        return [prevStack[1], value]
      })
    },
    [numSlides],
  )
  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(nextSlide, interval)
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }
  }, [interval, nextSlide, paused, stack, timeoutRef])
  const handleNext = () => {
    nextSlide()
    setPaused(true)
  }
  const handlePrev = () => {
    prevSlide()
    setPaused(true)
  }
  return (
    <div className="relative">
      <div className="relative aspect-square w-full overflow-y-hidden md:aspect-auto md:h-96 lg:h-112">
        <SwipeDetector onSwipeLeft={handleNext} onSwipeRight={handlePrev}>
          {slides.map((slide, index) => (
            <CarouselSlide
              key={slide.id}
              {...slide}
              isCurrent={index === current}
              isPrevious={index === previous}
              priority={index === 0}
            />
          ))}
        </SwipeDetector>
        <CarouselControls onNext={handleNext} onPrevious={handlePrev} />
      </div>
      <CarouselDots
        current={current}
        numSlides={numSlides}
        onSelect={value => {
          setCurrent(value)
          setPaused(true)
        }}
      />
    </div>
  )
}
