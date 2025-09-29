import clsx from "clsx"
import type { AppRoute } from "next/dist/build/swc/types"
import type { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import Link, { type LinkProps } from "next/link"
export type CarouselSlideProps = {
  alt: string
  bgImgSrc?: string | StaticImport
  imgSrc?: string | StaticImport
  isCurrent: boolean
  isExternal?: true
  isPrevious: boolean
  href: LinkProps<AppRoute>["href"]
  priority: boolean
}
export const CarouselSlide = ({
  alt,
  bgImgSrc,
  href,
  imgSrc,
  isCurrent,
  isExternal,
  isPrevious,
  priority,
}: CarouselSlideProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        "group absolute inset-0 transition-opacity duration-700",
        isCurrent ? "z-10 opacity-100" : "z-0 opacity-0",
      )}
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {bgImgSrc && (
        <Image
          alt=""
          className="h-full w-full object-cover"
          draggable={false}
          fill
          priority={priority}
          src={bgImgSrc}
        />
      )}
      {imgSrc && (
        <Image
          alt={alt}
          className={clsx(
            "h-full w-full overflow-x-visible object-cover transition-transform duration-700 group-hover:scale-102 md:object-contain",
            isCurrent
              ? "translate-x-0"
              : isPrevious
                ? "-translate-x-1/2"
                : "translate-x-1/2",
          )}
          draggable={false}
          fill
          priority={priority}
          src={imgSrc}
        />
      )}
    </Link>
  )
}
