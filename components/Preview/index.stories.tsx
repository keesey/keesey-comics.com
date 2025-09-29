import type { Meta, StoryObj } from "@storybook/react"
import { Preview } from "."
import page1ImgSrc from "../../public/comics/paleocene/issues/01/01.png"
import page2ImgSrc from "../../public/comics/paleocene/issues/01/02.png"

const meta: Meta<typeof Preview> = {
  title: "Components/Preview",
  component: Preview,
}

export default meta
type Story = StoryObj<typeof Preview>

export const Default: Story = {
  args: {
    images: [
      { alt: "Page 1", imgSrc: page1ImgSrc },
      { alt: "Page 2", imgSrc: page2ImgSrc },
    ],
  },
}
