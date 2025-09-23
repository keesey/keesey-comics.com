import type { Meta, StoryObj } from "@storybook/react"
import { Well } from "."

const meta: Meta<typeof Well> = {
  title: "Components/Well",
  component: Well,
}

export default meta
type Story = StoryObj<typeof Well>

export const Default: Story = {
  render: () => <Well>Content in a well</Well>,
}
