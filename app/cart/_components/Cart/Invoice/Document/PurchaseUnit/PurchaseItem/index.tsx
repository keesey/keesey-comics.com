import { Price } from "@/components/Price"
import type { PurchaseUnitItem } from "@paypal/paypal-js"
import styles from "./index.module.scss"
export type PurchaseItemProps = PurchaseUnitItem
export const PurchaseItem = ({
  name,
  quantity,
  unit_amount,
  description,
  sku,
  tax,
}: PurchaseItemProps) => {
  return (
    <section className={styles.main}>
      <header key="header">
        <h4>
          {quantity} &times; {name}
        </h4>
        {description && <p key="description">{description}</p>}
      </header>
      <dl key="details">
        {sku && (
          <>
            <dt>Product ID</dt>
            <dd>{sku}</dd>
          </>
        )}
        <dt>Unit Amount</dt>
        <dd>
          <Price amount={Number(unit_amount.value)} />
        </dd>
        {tax && (
          <>
            <dt>Tax</dt>
            <dd>
              <Price amount={Number(tax.value)} />
            </dd>
          </>
        )}
      </dl>
    </section>
  )
}
