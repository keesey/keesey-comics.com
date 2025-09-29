import { PRODUCTS_MAP } from "@/lib/cart/constants/PRODUCTS"
import type { OrderItem } from "@/lib/cart/models/OrderItem"
import Link from "next/link"
import { Section } from "../Section"
import { Amount } from "./Amount"
import { QuantityInput } from "./QuantityInput"
import { RemoveButton } from "./RemoveButton"
import { ShippingOption } from "./ShippingOption"
import { Thumbnail } from "./Thumbnail"
import { Definitions } from "@/components/Definitions"
export interface CartItemProps {
  item: OrderItem
}
export const CartItem = ({ item }: CartItemProps) => {
  const product = PRODUCTS_MAP[item.productId]
  const href = product.path ?? `/products/${encodeURIComponent(item.productId)}`
  return (
    <Section>
      <div className="grid grid-cols-2 items-baseline justify-between gap-6 text-lg md:grid-cols-3">
        <Thumbnail product={product} />
        <header className="text-center">
          <Link href={href}>
            <h3
              className="font-bold"
              dangerouslySetInnerHTML={{ __html: product.html }}
            />
          </Link>
          <Definitions className="text-xs md:text-sm">
            {product.type.details}
            <ShippingOption productType={product.type} />
          </Definitions>
        </header>
        <div className="col-span-2 flex justify-end gap-6 md:col-span-1">
          <QuantityInput item={item} />
          <Amount item={item} />
        </div>
      </div>
      <RemoveButton productId={item.productId} />
    </Section>
  )
}
