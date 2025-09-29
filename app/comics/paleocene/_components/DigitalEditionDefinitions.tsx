import {
  Definition,
  Definitions,
  DefinitionTerm,
} from "@/components/Definitions"
import { Price } from "@/components/Price"
export const DigitalEditionDefinitions = () => (
  <Definitions className="flex-grow-1">
    <DefinitionTerm>Unit Price</DefinitionTerm>
    <Definition>
      <Price amount={5} abbreviate /> (<Price amount={7.5} /> on iOS)
    </Definition>
    <DefinitionTerm>File Format</DefinitionTerm>
    <Definition>PDF</Definition>
  </Definitions>
)
