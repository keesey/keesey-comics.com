import Link from "next/link"
import { FC, PropsWithChildren, useContext } from "react"
import Context from "~/cart/context/order/Context"
import CTA from "~/components/CTA"
const CheckOutCTA: FC<PropsWithChildren> = ({ children }) => {
    const [order] = useContext(Context) ?? []
    if (!order?.items.length) {
        return null
    }
    return (
        <Link href="/cart" legacyBehavior passHref>
            <CTA>{children ?? "Check Out"}</CTA>
        </Link>
    )
}
export default CheckOutCTA
