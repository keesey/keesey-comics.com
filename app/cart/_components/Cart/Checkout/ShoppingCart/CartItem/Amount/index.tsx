import { Price } from "@/components/Price"
import { PRODUCTS_MAP } from "@/lib/cart/constants/PRODUCTS"
import type { OrderItem } from "@/lib/cart/models/OrderItem"
export interface AmountProps {
  item: OrderItem
}
export const Amount = ({ item }: AmountProps) => {
  const product = PRODUCTS_MAP[item.productId]
  const amount = item.quantity * product.type.value
  return (
    <span className="w-[5em] text-right">
      <Price amount={amount} />
    </span>
  )
}
