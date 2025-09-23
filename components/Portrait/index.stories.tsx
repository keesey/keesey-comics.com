import type { Meta, StoryObj } from "@storybook/react"
import { Portrait } from "."
import src from "../../public/creators/mike-keesey/portrait.svg"

const meta: Meta<typeof Portrait> = {
  title: "Components/Portrait",
  component: Portrait,
}

export default meta
type Story = StoryObj<typeof Portrait>

export const Default: Story = {
  args: {
    alt: "Mike",
    src,
  },
}
