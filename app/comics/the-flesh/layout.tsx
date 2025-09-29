import type { PropsWithChildren } from "react"
import { SeriesSection } from "./_components/SeriesSection"
export default function TheFleshLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <SeriesSection />
    </>
  )
}
