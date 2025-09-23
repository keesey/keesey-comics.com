import { PurchaseUnit as PayPalPurchaseUnit } from "@paypal/paypal-js"
import { Fragment } from "react"
import styles from "./index.module.scss"
import { PurchaseItem } from "./PurchaseItem"
import { Price } from "@/components/Price"
export type PurchaseUnitProps = PayPalPurchaseUnit
const BREAKDOWN_KEYS: ReadonlyArray<
  keyof NonNullable<PayPalPurchaseUnit["amount"]["breakdown"]>
> = [
  "item_total",
  "tax_total",
  "shipping",
  "shipping_discount",
  "insurance",
  "handling",
  "discount",
]
export const PurchaseUnit = ({
  amount,
  description,
  items,
  shipping,
}: PurchaseUnitProps) => {
  return (
    <section className={styles.main}>
      <h2>{description || "Purchase Unit"}</h2>
      <section className={styles.breakdown}>
        <dl>
          {BREAKDOWN_KEYS.filter(key =>
            Number(amount.breakdown?.[key]?.value),
          ).map(key => (
            <Fragment key={String(key)}>
              <dt>{String(key).replace("_", " ")}</dt>
              <dd>
                <Price amount={Number(amount.breakdown![key]!.value)} />
              </dd>
            </Fragment>
          ))}
          <Fragment>
            <dt className={styles.total}>Total</dt>
            <dd className={styles.total}>
              <Price amount={Number(amount.value)} />
            </dd>
          </Fragment>
        </dl>
      </section>
      {shipping && (
        <section className={styles.section}>
          <h3>Shipping Destination</h3>
          {shipping.name?.full_name && (
            <div className={styles.name}>{shipping.name.full_name}</div>
          )}
          {shipping.address?.address_line_1 && (
            <div>{shipping.address?.address_line_1}</div>
          )}
          {shipping.address?.address_line_2 && (
            <div>{shipping.address?.address_line_2}</div>
          )}
          <div>
            {[
              shipping.address?.admin_area_2,
              shipping.address?.admin_area_1,
              shipping.address?.country_code,
            ]
              .filter(Boolean)
              .join(", ")}{" "}
            {shipping.address?.postal_code}
          </div>
        </section>
      )}
      {Boolean(items?.length) && (
        <section className={styles.section}>
          <h3>Items Included</h3>
          {items?.map(item => (
            <PurchaseItem key={item.name} {...item} />
          ))}
        </section>
      )}
    </section>
  )
}
