import type { ImageRailItem } from "@/components/ImageRail"
export const createIssueRailItem = (
  title: string,
  folderName: string,
  index: number,
): ImageRailItem => {
  const pathComponent = encodeURIComponent(folderName)
  const indexPathComponent = encodeURIComponent(
    index.toString(10).padStart(2, "0"),
  )
  return {
    alt: `${title} #${index}`,
    href: `/comics/${pathComponent}/issues/${indexPathComponent}` as ImageRailItem["href"],
    imgSrc: `/comics/${pathComponent}/issues/${indexPathComponent}/front_cover.png`,
  }
}
