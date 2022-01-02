import { FSAWithPayload } from "flux-standard-action";
import { Order } from "../models/Order";
export type SetOrderAction = FSAWithPayload<"SET_ORDER", Order>;
export type SetProductCountAction = FSAWithPayload<"SET_PRODUCT_COUNT", Readonly<{ count: number, productId: string }>>;
export type Action = SetOrderAction | SetProductCountAction;
