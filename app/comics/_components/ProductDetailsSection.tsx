import { Definitions } from "@/components/Definitions"
import type { PropsWithChildren } from "react"
export const ProductDetailsSection = ({ children }: PropsWithChildren) => (
  <div>
    <h2 className="hidden">Product Details</h2>
    <Definitions>{children}</Definitions>
  </div>
)
