import type { PropsWithChildren } from "react"
export type SectionsContainerProps = PropsWithChildren
export const SectionsContainer = ({ children }: SectionsContainerProps) => (
  <div className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-8 py-8 md:px-8 lg:grid lg:grid-cols-3">
    {children}
  </div>
)
