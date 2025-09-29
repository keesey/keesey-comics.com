import type { OnApproveData, OrderResponseBody } from "@paypal/paypal-js"
export type State =
  | Readonly<{
      data: OnApproveData
      response: OrderResponseBody
    }>
  | undefined
