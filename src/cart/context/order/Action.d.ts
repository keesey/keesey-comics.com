import { FSA, FSAWithPayload } from "flux-standard-action"
import { OrderItem } from "~/cart/models/OrderItem"
import { State } from "./State"
export type InitializeAction = FSAWithPayload<"INITIALIZE", State>
export type ResetAction = FSA<"RESET">
export type RemoveProductAction = FSAWithPayload<"REMOVE_PRODUCT", Pick<OrderItem, "productId">>
export type SetQuantityAction = FSAWithPayload<"SET_QUANTITY", Pick<OrderItem, "productId" | "quantity">>
export type IncrementQuantityAction = FSAWithPayload<"INCREMENT_QUANTITY", Pick<OrderItem, "productId">>
export type SelectShippingOptionAction = FSAWithPayload<
    "SELECT_SHIPPING_OPTION",
    Readonly<{ shippingOptionId: string }>
>
export type Action =
    | InitializeAction
    | ResetAction
    | RemoveProductAction
    | SetQuantityAction
    | IncrementQuantityAction
    | SelectShippingOptionAction
