import type { Meta, StoryObj } from "@storybook/react"
import { Definitions, Definition, DefinitionTerm } from "."

const meta: Meta<typeof Definitions> = {
  title: "Components/Definitions",
  component: Definitions,
}

export default meta
type Story = StoryObj<typeof Definitions>

export const Default: Story = {
  render: () => (
    <Definitions>
      <DefinitionTerm>Format</DefinitionTerm>
      <Definition>Standard</Definition>
      <DefinitionTerm>Pages</DefinitionTerm>
      <Definition>24</Definition>
    </Definitions>
  ),
}
