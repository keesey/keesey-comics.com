import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

export interface PortraitProps {
  alt: string
  src: string | StaticImport
}
export const Portrait = ({ alt, src }: PortraitProps) => (
  <div className="relative inline-block h-[150px] w-[150px] overflow-hidden rounded-full border-4 bg-gray-500 transition-transform group-hover:scale-105 sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]">
    {}
    <Image
      alt={alt}
      className="object-cover"
      fill
      sizes="(min-width: 1024px) 400px, (min-width: 768px) 300px, (min-width: 640px) 200px, 150px"
      src={src}
    />
  </div>
)
