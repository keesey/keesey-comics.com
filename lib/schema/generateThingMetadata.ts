import type { Metadata } from "next"
import type { Thing } from "schema-dts"
import { getString } from "./utils/getString"
export const generateThingMetadata = (subject: Thing): Metadata => {
  if (typeof subject === "string") {
    return { title: subject }
  }
  return {
    description: getString(subject.description),
    title: getString(subject.name),
  }
}
