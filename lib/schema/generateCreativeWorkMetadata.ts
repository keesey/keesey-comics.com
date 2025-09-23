import type { Metadata } from "next"
import type { CreativeWork } from "schema-dts"
import { getString } from "./utils/getString"
export const generateCreativeWorkMetadata = (
  subject: CreativeWork,
): Metadata => {
  return {
    creator: getString(subject.creator),
    description:
      [getString(subject.description), getString(subject.abstract)]
        .filter(Boolean)
        .join(" ") || undefined,
    publisher: "https://www.keesey-comics.com/",
    title: getString(subject.name),
  }
}
