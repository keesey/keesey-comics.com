import { Well } from "@/components/Well"
import type { PropsWithChildren } from "react"
export const ReviewsSection = ({ children }: PropsWithChildren) => (
  <Well>
    <h2 className="hidden">Reviews</h2>
    {children}
  </Well>
)
