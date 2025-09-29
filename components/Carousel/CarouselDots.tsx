import clsx from "clsx"
export interface CarouselDotsProps {
  current: number
  numSlides: number
  onSelect?: (index: number) => void
}
export const CarouselDots = ({
  current,
  numSlides,
  onSelect,
}: CarouselDotsProps) => {
  return (
    <div className="absolute -bottom-4 left-1/2 z-20 flex -translate-x-1/2 translate-y-1/2 space-x-2">
      {new Array(numSlides).fill(null).map((_, index) => (
        <button
          key={index}
          aria-label={`Go to slide #${index + 1}`}
          className={clsx(
            "h-3 w-3 rounded-full",
            index === current
              ? "bg-blue-500"
              : "cursor-pointer bg-gray-300 transition-transform hover:scale-110 dark:bg-gray-700",
          )}
          onClick={
            index !== current && onSelect ? () => onSelect(index) : undefined
          }
        />
      ))}
    </div>
  )
}
