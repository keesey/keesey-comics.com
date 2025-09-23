"use client"
import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"
import { FaEye, FaMagnifyingGlassPlus } from "react-icons/fa6"
import { Lightbox } from "../Lightbox"
import type { StaticImport } from "next/dist/shared/lib/get-img-props"

export type PreviewImage = Readonly<{
  alt: string
  imgSrc: string | StaticImport
}>

export type PageSize = "standard" | "mini" | "booklet"

export interface PreviewProps {
  images: readonly PreviewImage[]
  size?: PageSize
}

const ASPECT_RATIOS: Readonly<Record<PageSize, string>> = {
  booklet: "aspect-[1206/756]",
  mini: "aspect-[1085/1582]",
  standard: "aspect-[994/1538]",
}

export const Preview = ({ images, size = "standard" }: PreviewProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  if (!images?.[0]) {
    return null
  }
  return (
    <section>
      <button
        aria-label={images.length === 1 ? "Zoom in!" : "Look inside!"}
        className="group w-full cursor-zoom-in md:max-w-sm"
        onClick={() => setIsLightboxOpen(true)}
      >
        <figure className="w-full flex-col items-center justify-center">
          <div className={clsx("relative bg-gray-500", ASPECT_RATIOS[size])}>
            <Image
              alt={images[0].alt}
              className="object-cover transition-transform group-hover:scale-101"
              fill
              priority
              src={images[0].imgSrc}
            />
          </div>
          <figcaption className="mt-2 flex items-center justify-center gap-1 transition-transform group-hover:translate-y-1">
            {images.length === 1 ? (
              <>
                <FaMagnifyingGlassPlus className="inline" />
                <em>Zoom in!</em>
              </>
            ) : (
              <>
                <FaEye className="inline" />
                <em>Look inside!</em>
              </>
            )}
          </figcaption>
        </figure>
      </button>
      {isLightboxOpen && (
        <Lightbox
          images={images}
          initialIndex={Math.min(images.length - 1, 1)}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </section>
  )
}
