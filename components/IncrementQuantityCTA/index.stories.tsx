import type { Meta, StoryObj } from "@storybook/react"
import { IncrementQuantityCTA } from "."

const meta: Meta<typeof IncrementQuantityCTA> = {
  title: "Components/IncrementQuantityCTA",
  component: IncrementQuantityCTA,
}

export default meta
type Story = StoryObj<typeof IncrementQuantityCTA>

export const Default: Story = {
  args: { productIds: ["BKM-06I-PAL-001"] },
  render: args => (
    <IncrementQuantityCTA {...args}>Add to Cart</IncrementQuantityCTA>
  ),
}
