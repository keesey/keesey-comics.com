import type { PropsWithChildren } from "react"
export type EditionsSectionProps = PropsWithChildren
export const EditionsSection = ({ children }: EditionsSectionProps) => (
  <section className="flex flex-grow-1 flex-col items-stretch gap-6 md:flex-row md:flex-wrap md:justify-center lg:flex-col lg:justify-start">
    <h2 className="hidden">Editions</h2>
    {children}
  </section>
)
