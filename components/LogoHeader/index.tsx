import clsx from "clsx"
import type { PropsWithChildren, ReactNode } from "react"
export interface LogoHeaderProps extends PropsWithChildren {
  alt: string
  aspectRatio: number
  bg?: ReactNode
  className?: string
  src: string
}
export const LogoHeader = ({
  alt,
  aspectRatio,
  bg,
  className,
  src,
}: LogoHeaderProps) => (
  <header
    className={clsx(
      "relative flex items-center justify-center overflow-clip p-6",
      className,
    )}
  >
    {bg}
    <h1 className="hidden">{alt}</h1>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      alt={alt}
      height="auto"
      src={src}
      style={{
        maxWidth: `min(100% - 32px, 240px * ${aspectRatio.toPrecision(6)})`,
        zIndex: 1,
      }}
      width="100%"
    />
  </header>
)
