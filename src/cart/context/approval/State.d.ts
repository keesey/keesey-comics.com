import { OrderResponseBody } from "@paypal/paypal-js/types/apis/orders"
import { OnApproveData } from "@paypal/paypal-js/types/components/buttons"
export type State =
    | Readonly<{
          data: OnApproveData
          response: OrderResponseBody
      }>
    | undefined
