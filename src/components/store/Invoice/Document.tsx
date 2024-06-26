/* eslint-disable @next/next/no-img-element */
import { type PurchaseUnit as PurchaseUnitModel } from "@paypal/paypal-js/types/apis/orders"
import { type FC, useEffect, useState } from "react"
import { type State } from "~/cart/context/approval/State"
import styles from "./Document.module.scss"
import PurchaseUnit from "./PurchaseUnit"
export interface Props {
    approval?: State
}
const Document: FC<Props> = ({ approval }) => {
    const [css, setCSS] = useState("")
    useEffect(() => {
        if (approval) {
            let newCSS = ""
            for (const styleSheet of window?.top?.document?.styleSheets ?? []) {
                if (styleSheet.cssRules) {
                    for (const cssRule of styleSheet.cssRules) {
                        newCSS += cssRule.cssText
                    }
                }
            }
            setCSS(newCSS)
        }
    }, [approval])
    if (!approval) {
        return null
    }
    return (
        <html>
            {/* eslint-disable-next-line @next/next/no-head-element */}
            <head>
                <title>Keesey Comics: Order #{approval.data.orderID}</title>
                <style dangerouslySetInnerHTML={{ __html: css }} />
            </head>
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
                                <PurchaseUnit key={index} {...(unit as PurchaseUnitModel)} />
                            ))}
                        </div>
                    )}
                    <hr />
                    <footer className={styles.footer}>
                        <img src="/images/logos/black/keesey-comics.svg" width={94} height={56} alt="Keesey Comics" />
                        <div className={styles.contact}>
                            <div className={styles.title}>Keesey Comics</div>
                            <div>Los Angeles, California</div>
                            <div>
                                <a href="mailto:keesey+comics@gmail.com">keesey+comics@gmail.com</a>
                            </div>
                        </div>
                    </footer>
                </main>
            </body>
        </html>
    )
}
export default Document
