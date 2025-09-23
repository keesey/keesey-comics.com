import type { AppRoute } from "next/dist/build/swc/types"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import Link, { type LinkProps } from "next/link"

export type ImageRailItem = Readonly<{
  alt: string
  href: LinkProps<AppRoute>["href"] & string
  imgSrc: string | StaticImport
}>

export interface ImageRailProps {
  items: readonly ImageRailItem[]
}

export const ImageRail = ({ items }: ImageRailProps) => {
  if (!items?.length) return null
  return (
    <div className="overflow-y-none flex w-full max-w-screen justify-center-safe gap-4 overflow-x-auto">
      {items.map(item => (
        <Link key={item.href} href={item.href} className="group flex-shrink-0">
          <div className="relative h-[185px] w-[119px] overflow-visible bg-gray-500 shadow-md transition-transform group-hover:scale-105">
            <Image
              src={item.imgSrc}
              alt={item.alt}
              fill
              className="object-cover"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}
