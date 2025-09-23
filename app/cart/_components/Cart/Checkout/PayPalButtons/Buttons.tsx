"use client"
import { Context as CostsContext } from "@/lib/cart/context/costs/Context"
import { Context as OrderContext } from "@/lib/cart/context/order/Context"
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"
import clsx from "clsx"
import { useCallback, useContext, useState } from "react"
import { handleShippingOptionsChange } from "./handleShippingOptionsChange"
import { useCreateOrder } from "./useCreateOrder"
import { useOnApprove } from "./useOnApprove"
import { useOnShippingAddressChange } from "./useOnShippingAddressChange"
const Buttons = () => {
  const [{ isPending, isRejected }] = usePayPalScriptReducer() ?? [{}]
  const [order] = useContext(OrderContext) ?? []
  const { costs } = useContext(CostsContext) ?? {}
  const createOrder = useCreateOrder()
  const handleApprove = useOnApprove()
  const [error, setError] = useState<string | undefined>()
  const handleError = useCallback((error: unknown) => {
    setError(String(error) || undefined)
  }, [])
  const handleShippingAddressChange = useOnShippingAddressChange()
  const isDisabled = Boolean(!costs || isPending)
  return (
    <>
      <PayPalButtons
        className={clsx("mx-auto text-center", isDisabled && "opacity-50")}
        createOrder={createOrder}
        disabled={isDisabled}
        forceReRender={[order, costs]}
        onApprove={handleApprove}
        onError={handleError}
        onShippingAddressChange={handleShippingAddressChange}
        onShippingOptionsChange={handleShippingOptionsChange}
      />
      {isRejected && <div className="text-red-500">{error ?? "Error!"}</div>}
    </>
  )
}
export default Buttons
