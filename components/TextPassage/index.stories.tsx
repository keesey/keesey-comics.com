import type { Meta, StoryObj } from "@storybook/react"
import { TextPassage } from "."

const meta: Meta<typeof TextPassage> = {
  title: "Components/TextPassage",
  component: TextPassage,
}

export default meta
type Story = StoryObj<typeof TextPassage>

export const Default: Story = {
  render: () => (
    <TextPassage>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
    </TextPassage>
  ),
}
