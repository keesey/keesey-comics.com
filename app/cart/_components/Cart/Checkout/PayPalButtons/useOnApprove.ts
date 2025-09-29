"use client"
import type { OnApproveActions, OnApproveData } from "@paypal/paypal-js"
import { useCallback, useContext } from "react"
import { Context as ApprovalContext } from "@/lib/cart/context/approval/Context"
import { Context as OrderContext } from "@/lib/cart/context/order/Context"
export const useOnApprove = () => {
  const [, dispatchApproval] = useContext(ApprovalContext) ?? []
  const [, dispatchOrder] = useContext(OrderContext) ?? []
  return useCallback(
    async (data: OnApproveData, actions: OnApproveActions) => {
      try {
        if (actions.order) {
          const response = await actions.order.capture()
          switch (response.status) {
            case "PAYER_ACTION_REQUIRED": {
              break
            }
            case "VOIDED": {
              throw new Error("The transaction was voided.")
            }
            default: {
              dispatchOrder?.({ type: "RESET" })
              dispatchApproval?.({
                type: "INITIALIZE",
                payload: { data, response },
              })
            }
          }
        }
      } catch (e) {
        alert(e)
      }
    },
    [dispatchApproval, dispatchOrder],
  )
}
