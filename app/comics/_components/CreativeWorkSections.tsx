import { CreativeWorkHeader } from "@/components/CreativeWorkHeader"
import type { PropsWithChildren } from "react"
import type { CreativeWork, Person } from "schema-dts"
export interface CreativeWorkSectionsProps extends PropsWithChildren {
  abstractHTML?: string
  creator: Person
  subject: CreativeWork
}
export const CreativeWorkSections = ({
  abstractHTML,
  children,
  creator,
  subject,
}: CreativeWorkSectionsProps) => (
  <div className="order-2 flex flex-grow-1 flex-col gap-8 lg:order-0">
    <CreativeWorkHeader
      abstractHTML={abstractHTML}
      creator={creator}
      subject={subject}
    />
    {children}
  </div>
)
