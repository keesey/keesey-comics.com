import type { Meta, StoryObj } from "@storybook/react"
import { CreativeWorkHeader } from "."

const meta: Meta<typeof CreativeWorkHeader> = {
  title: "Components/CreativeWorkHeader",
  component: CreativeWorkHeader,
}

export default meta
type Story = StoryObj<typeof CreativeWorkHeader>

export const Default: Story = {
  args: {
    creator: {
      "@type": "Person",
      name: "Mike Keesey",
      url: "https://keesey-comics.com/creators/mike-keesey",
    },
    subject: {
      "@type": "CreativeWork",
      name: "Paleocene #1",
      abstract: "First issue of the series.",
    },
  },
}
