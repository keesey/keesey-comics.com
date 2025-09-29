import type { Meta, StoryObj } from "@storybook/react"
import { CTA } from "."

const meta: Meta<typeof CTA> = {
  title: "Components/CTA",
  component: CTA,
  args: {
    children: "Call to Action",
  },
}

export default meta
type Story = StoryObj<typeof CTA>

export const Primary: Story = {
  args: { level: 1, size: "xl" },
}

export const Secondary: Story = {
  args: { level: 2, size: "md", children: "Secondary CTA" },
}
