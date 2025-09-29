"use client"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6"
export interface CarouselControlsProps {
  onNext: () => void
  onPrevious: () => void
}
export const CarouselControls = ({
  onNext,
  onPrevious,
}: CarouselControlsProps) => {
  return (
    <>
      <button
        onClick={() => onPrevious()}
        className="absolute top-1/2 left-4 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white/70 p-2 transition-transform hover:scale-110 dark:bg-gray-800/70"
        aria-label="Previous Slide"
      >
        <FaCaretLeft />
      </button>
      <button
        onClick={() => onNext()}
        className="absolute top-1/2 right-4 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white/70 p-2 transition-transform hover:scale-110 dark:bg-gray-800/70"
        aria-label="Next Slide"
      >
        <FaCaretRight />
      </button>
    </>
  )
}
