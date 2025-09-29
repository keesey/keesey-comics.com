"use client"
import {
  Definition,
  Definitions,
  DefinitionTerm,
} from "@/components/Definitions"
import { Price } from "@/components/Price"
import { Context } from "@/lib/cart/context/costs/Context"
import "animate.css"
import { useContext } from "react"
export const CostsTable = () => {
  const context = useContext(Context)
  if (!context) {
    return null
  }
  const { error, costs, pending } = context
  return (
    <div>
      <div>
        {pending && (
          <p className="animate__animated animate__headShake animate__infinite">
            Loading&hellip;
          </p>
        )}
        {error && <p className="text-red-500">{String(error) || "Error!"}</p>}
      </div>
      <Definitions>
        <DefinitionTerm>Subtotal</DefinitionTerm>
        <Definition>
          {costs ? <Price amount={costs.products} /> : "--"}
        </Definition>
        <DefinitionTerm>Sales Tax</DefinitionTerm>
        <Definition>
          {costs ? <Price amount={costs.salesTax} /> : "--"}
        </Definition>
        <DefinitionTerm>
          Shipping <abbr title="and">&amp;</abbr> Handling
        </DefinitionTerm>
        <Definition>
          {costs ? (
            <Price
              amount={
                costs.containers +
                costs.handling +
                costs.shipping +
                costs.shippingAdditional
              }
            />
          ) : (
            "--"
          )}
        </Definition>
        <DefinitionTerm>Processing</DefinitionTerm>
        <Definition>
          {costs ? <Price amount={costs.processing} /> : "--"}
        </Definition>
        <DefinitionTerm className="text-lg font-medium">Total</DefinitionTerm>
        <Definition className="text-lg font-black">
          {costs ? (
            <Price
              amount={
                costs.containers +
                costs.handling +
                costs.processing +
                costs.products +
                costs.salesTax +
                costs.shipping +
                costs.shippingAdditional
              }
            />
          ) : (
            "--"
          )}
        </Definition>
      </Definitions>
    </div>
  )
}
