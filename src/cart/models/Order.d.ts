import { OrderItem } from "./OrderItem";
export type Order = {
    shippingOptionIds: readonly string[]
    items: readonly OrderItem[]
}
