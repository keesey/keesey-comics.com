/* eslint-disable @next/next/no-img-element */
import type { State } from "@/lib/cart/context/approval/State"
import type { PurchaseUnit as PayPalPurchaseUnit } from "@paypal/paypal-js"
import styles from "./index.module.scss"
import { DocumentHead } from "./DocumentHead"
import { PurchaseUnit } from "./PurchaseUnit"
export interface DocumentProps {
  approval?: State
}
export const Document = ({ approval }: DocumentProps) => {
  if (!approval) {
    return null
  }
  return (
    <html lang="en">
      <DocumentHead />
      <body>
        <main className={styles.main}>
          <header>
            <h1>Keesey Comics: Order #{approval.data.orderID}</h1>
            {approval.response.create_time && (
              <time dateTime={approval.response.create_time}>
                {new Date(approval.response.create_time).toString()}
              </time>
            )}
          </header>
          {approval.response.purchase_units && (
            <div>
              {approval.response.purchase_units?.map((unit, index) => (
                <PurchaseUnit key={index} {...(unit as PayPalPurchaseUnit)} />
              ))}
            </div>
          )}
          <hr />
          <footer className={styles.footer}>
            <img
              src="/logos/black/keesey-comics.svg"
              width={94}
              height={56}
              alt="Keesey Comics"
            />
            <div className={styles.contact}>
              <div className={styles.title}>Keesey Comics</div>
              <div>Los Angeles, California</div>
              <div>
                <a href="mailto:keesey+comics@gmail.com">
                  keesey+comics@gmail.com
                </a>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </html>
  )
}
