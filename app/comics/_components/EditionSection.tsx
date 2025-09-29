import type { PropsWithChildren, ReactNode } from "react"
import { Subheading } from "./Subheading"
export interface EditionSectionProps extends PropsWithChildren {
  title: ReactNode
}
export const EditionSection = ({ children, title }: EditionSectionProps) => (
  <section className="mx-auto flex w-xs max-w-full flex-col gap-4 rounded-2xl border-2 border-gray-300 p-6 text-center md:mx-0 lg:w-full">
    <Subheading>{title}</Subheading>
    {children}
  </section>
)
