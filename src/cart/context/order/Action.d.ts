import { FSAWithPayload } from "flux-standard-action";
import { OrderItem } from "~/cart/models/OrderItem";
import { State } from "./State";
export type InitializeAction = FSAWithPayload<"INITIALIZE", State>;
export type RemoveProductAction = FSAWithPayload<"REMOVE_PRODUCT", Pick<OrderItem, "productId">>;
export type SetQuantityAction = FSAWithPayload<"SET_QUANTITY", Pick<OrderItem, "productId" | "quantity">>;
export type IncrementQuantityAction = FSAWithPayload<"INCREMENT_QUANTITY", Pick<OrderItem, "productId">>;
export type SetShippingOptionAction = FSAWithPayload<"SET_SHIPPING_OPTION", Pick<OrderItem, "productId" | "shippingOptionId">>;
export type Action = InitializeAction | RemoveProductAction | SetQuantityAction | IncrementQuantityAction | SetShippingOptionAction;
