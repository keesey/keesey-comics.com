import type { PropsWithChildren } from "react"
import { SeriesSection } from "./_components/SeriesSection"
export default function PaleoceneLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <SeriesSection />
    </>
  )
}
