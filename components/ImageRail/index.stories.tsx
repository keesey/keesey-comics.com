import type { Meta, StoryObj } from "@storybook/react"
import { ImageRail } from "."
import imgSrc1 from "../../public/comics/paleocene/issues/01/front_cover.png"
import imgSrc2 from "../../public/comics/paleocene/issues/02/front_cover.png"
import imgSrc3 from "../../public/comics/paleocene/issues/03/front_cover.png"
import imgSrc4 from "../../public/comics/paleocene/issues/04/front_cover.png"
import imgSrc5 from "../../public/comics/paleocene/issues/05/front_cover.png"
const meta: Meta<typeof ImageRail> = {
  title: "Components/ImageRail",
  component: ImageRail,
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof ImageRail>

export const Default: Story = {
  args: {
    items: [
      {
        alt: "Issue 1",
        href: "/comics/paleocene/issues/01",
        imgSrc: imgSrc1,
      },
      {
        alt: "Issue 2",
        href: "/comics/paleocene/issues/02",
        imgSrc: imgSrc2,
      },
      {
        alt: "Issue 3",
        href: "/comics/paleocene/issues/03",
        imgSrc: imgSrc3,
      },
      {
        alt: "Issue 4",
        href: "/comics/paleocene/issues/04",
        imgSrc: imgSrc4,
      },
      {
        alt: "Issue 5",
        href: "/comics/paleocene/issues/05",
        imgSrc: imgSrc5,
      },
    ],
  },
}
