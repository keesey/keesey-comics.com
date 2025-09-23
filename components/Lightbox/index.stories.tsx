import type { Meta, StoryObj } from "@storybook/react"
import { Lightbox } from "."
import page1ImgSrc from "../../public/comics/paleocene/issues/01/01.png"
import page2ImgSrc from "../../public/comics/paleocene/issues/01/02.png"

const meta: Meta<typeof Lightbox> = {
  title: "Components/Lightbox",
  component: Lightbox,
}

export default meta
type Story = StoryObj<typeof Lightbox>

export const Default: Story = {
  render: () => (
    <Lightbox
      images={[
        { alt: "Page 1", imgSrc: page1ImgSrc },
        { alt: "Page 2", imgSrc: page2ImgSrc },
      ]}
      onClose={() => {}}
    />
  ),
}
