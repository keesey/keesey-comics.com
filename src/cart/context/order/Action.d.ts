import { FSAWithPayload } from "flux-standard-action";
import { Order } from "~/cart/models/Order";
import { OrderItem } from "~/cart/models/OrderItem";
export type InitializeAction = FSAWithPayload<"INITIALIZE", Order>;
export type RemoveProductAction = FSAWithPayload<"REMOVE_PRODUCT", Pick<OrderItem, "productId">>;
export type SetQuantityAction = FSAWithPayload<"SET_QUANTITY", Pick<OrderItem, "productId" | "quantity">>;
export type SetShippingOptionAction = FSAWithPayload<"SET_SHIPPING_OPTION", Pick<OrderItem, "productId" | "shippingOptionId">>;
export type Action = InitializeAction | RemoveProductAction | SetQuantityAction | SetShippingOptionAction;
