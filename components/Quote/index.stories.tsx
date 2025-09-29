import type { Meta, StoryObj } from "@storybook/react"
import { Quote } from "."

const meta: Meta<typeof Quote> = {
  title: "Components/Quote",
  component: Quote,
}

export default meta
type Story = StoryObj<typeof Quote>

export const Default: Story = {
  args: {
    attribution: "Jane Doe",
    children: "This is a great comic!",
  },
}
