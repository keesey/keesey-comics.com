import type { Meta, StoryObj } from "@storybook/react"
import { Carousel } from "."
import bgImgSrc1 from "../../public/carousel/paleocene05_onsale/bg.png"
import bgImgSrc2 from "../../public/carousel/paleocene06_cover/bg.png"
import bgImgSrc3 from "../../public/carousel/parry-n-carney/bg.svg"
import imgSrc1 from "../../public/carousel/paleocene05_onsale/fg.png"
import imgSrc2 from "../../public/carousel/paleocene06_cover/fg.png"
import imgSrc3 from "../../public/carousel/parry-n-carney/fg.png"
const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "fullscreen",
  },
}
export default meta
type Story = StoryObj<typeof Carousel>
export const Default: Story = {
  args: {
    slides: [
      {
        alt: "Now on sale! PALEOCENE #5. Read the latest issue.",
        bgImgSrc: bgImgSrc1,
        href: "/comics/paleocene/issues/05",
        id: "paleocene05_onsale",
        imgSrc: imgSrc1,
      },
      {
        alt: "Sneak peek! PALEOCENE #6. Follow progress on the final issue!",
        bgImgSrc: bgImgSrc2,
        href: "https://www.patreon.com/c/tmkeesey/posts?filters%5Btag%5D=paleocene6",
        id: "paleocene06_cover",
        imgSrc: imgSrc2,
        isExternal: true,
      },
      {
        alt: "The boys are back! PARRY 'N' CARNEY: FRIENDS FOR LIFE. Every strip from this old webcomic you never heard of!",
        bgImgSrc: bgImgSrc3,
        href: "/comics/parry-n-carney",
        id: "parry-n-carney",
        imgSrc: imgSrc3,
      },
    ],
  },
}
