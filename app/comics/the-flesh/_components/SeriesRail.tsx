import { ImageRail, ImageRailItem } from "@/components/ImageRail"
import { createIssueRailItem } from "../../_lib/createIssueRailItem"
const NUM_ISSUES = 3
const ITEMS: readonly ImageRailItem[] = new Array(NUM_ISSUES)
  .fill(null)
  .map((_, index) => createIssueRailItem("The Flesh", "the-flesh", index + 1))
export const SeriesRail = () => <ImageRail items={ITEMS} />
