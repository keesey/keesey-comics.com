import type { PropsWithChildren } from "react"
export type SubheadingProps = PropsWithChildren
export const Subheading = ({ children }: SubheadingProps) => (
  <h3 className="text-center text-xl font-bold">{children}</h3>
)
