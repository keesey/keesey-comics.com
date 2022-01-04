/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { memo, useContext, useMemo, VFC } from "react"
import Context from "~/cart/context/order/Context"
import styles from "./CartButton.module.scss"
import useLogoColor from "./useLogoColor"
const CartButton: VFC = () => {
    const [order] = useContext(Context) ?? []
    const count = useMemo(
        () => {
            if (!order?.length) {
                return 0
            }
            return order.reduce<number>((prev, item) => prev + item.quantity, 0)
        },
        [order],
    )
    const logoColor = useLogoColor()
    return (
        <Link href="/cart">
            <a className={styles.main} role="button" title="Your Cart">
                <img src={`/images/icons/${logoColor}/cart.svg`} width={24.425} height={21} alt="Shopping Cart" />
                {count > 0 && <span className={styles.count}>{count}</span>}
            </a>
        </Link>
    )
}
export default CartButton
