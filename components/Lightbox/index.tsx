"use client"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6"
import { SwipeDetector } from "../SwipeDetector"
import type { StaticImport } from "next/dist/shared/lib/get-img-props"
export type LightboxImage = Readonly<{
  alt: string
  imgSrc: string | StaticImport
}>
export interface LightboxProps {
  initialIndex?: number
  images: readonly LightboxImage[]
  onClose: () => void
}
export const Lightbox = ({
  images,
  initialIndex = 0,
  onClose,
}: LightboxProps) => {
  const [current, setCurrent] = useState(initialIndex)
  const numImages = images.length
  const prevImage = useCallback(
    () => setCurrent(prev => (prev - 1 + numImages) % numImages),
    [numImages],
  )
  const nextImage = useCallback(
    () => setCurrent(prev => (prev + 1) % numImages),
    [numImages],
  )
  const hasImages = numImages > 0
  useEffect(() => {
    if (hasImages) {
      const handler = (e: KeyboardEvent) => {
        switch (e.key) {
          case "ArrowLeft": {
            prevImage()
            break
          }
          case "Escape": {
            onClose()
            break
          }
          case "ArrowRight": {
            nextImage()
            break
          }
        }
      }
      window.addEventListener("keydown", handler)
      return () => window.removeEventListener("keydown", handler)
    }
  }, [hasImages, nextImage, onClose, prevImage])
  if (!hasImages) {
    return null
  }
  const currentImage = images[current]
  return (
    <div
      aria-modal
      className="fixed inset-0 z-50 bg-black/90"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="flex size-full items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          className="absolute top-4 right-4 z-60 cursor-pointer rounded-full bg-white/80 p-3 text-black transition-transform hover:scale-110 hover:bg-white"
          onClick={onClose}
        >
          <FaTimes className="size-xl" />
        </button>
        {images.length > 1 && (
          <>
            <button
              aria-label="Previous Preview Page"
              className="absolute bottom-4 left-1/3 z-60 cursor-pointer rounded-full bg-white/80 p-3 text-black transition-transform hover:scale-110 hover:bg-white md:bottom-1/2 md:left-4 md:-translate-y-1/2"
              onClick={prevImage}
              type="button"
            >
              <FaCaretLeft className="size-xl" />
            </button>
            <button
              aria-label="Next Preview Page"
              className="absolute right-1/3 bottom-4 z-60 cursor-pointer rounded-full bg-white/80 p-3 text-black transition-transform hover:scale-110 hover:bg-white md:right-4 md:bottom-1/2 md:-translate-y-1/2"
              onClick={nextImage}
              type="button"
            >
              <FaCaretRight className="size-xl" />
            </button>
          </>
        )}
        {images.length === 1 ? (
          <Image
            alt={currentImage.alt}
            className="object-contain"
            fill
            sizes="100vh"
            src={currentImage.imgSrc}
          />
        ) : (
          <SwipeDetector
            className="relative size-full"
            onSwipeLeft={prevImage}
            onSwipeRight={nextImage}
          >
            <Image
              alt={currentImage.alt}
              className="object-contain"
              fill
              sizes="100vh"
              src={currentImage.imgSrc}
            />
          </SwipeDetector>
        )}
      </div>
    </div>
  )
}
