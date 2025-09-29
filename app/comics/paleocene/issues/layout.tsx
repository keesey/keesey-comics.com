import { Abstract } from "@/components/CreativeWorkHeader"
import type { PropsWithChildren } from "react"
import { PALEOCENE } from "../schema"
export default function PaleoceneLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <Abstract>{String(PALEOCENE.abstract)}</Abstract>
    </>
  )
}
