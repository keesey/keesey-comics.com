import type { Meta, StoryObj } from "@storybook/react"
import { Price } from "."

const meta: Meta<typeof Price> = {
  title: "Components/Price",
  component: Price,
}

export default meta
type Story = StoryObj<typeof Price>

export const Default: Story = {
  args: { amount: 9.99 },
}

export const Abbreviated: Story = {
  args: { amount: 10.0, abbreviate: true },
}
