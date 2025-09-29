"use client"
import { Context } from "@/lib/cart/context/order/Context"
import { useCallback, useContext } from "react"
export interface RemoveButtonProps {
  productId: string
}
export const RemoveButton = ({ productId }: RemoveButtonProps) => {
  const [, dispatch] = useContext(Context) ?? []
  const handleRemoveButtonClick = useCallback(() => {
    if (confirm("Are you sure you want to remove this from your cart?")) {
      dispatch?.({
        type: "REMOVE_PRODUCT",
        payload: { productId },
      })
    }
  }, [dispatch, productId])
  return (
    <div className="text-right">
      <button
        className="cursor-pointer font-medium text-red-500 underline underline-offset-2"
        onClick={handleRemoveButtonClick}
      >
        Remove
      </button>
    </div>
  )
}
