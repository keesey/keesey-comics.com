import type { Meta, StoryObj } from "@storybook/react"
import { TextLink } from "."

const meta: Meta<typeof TextLink> = {
  title: "Components/TextLink",
  component: TextLink,
}

export default meta
type Story = StoryObj<typeof TextLink>

export const Internal: Story = {
  render: () => <TextLink href="/">Home</TextLink>,
}

export const External: Story = {
  render: () => (
    <TextLink isExternal href="https://example.com">
      External
    </TextLink>
  ),
}
