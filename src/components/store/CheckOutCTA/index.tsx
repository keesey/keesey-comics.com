import Link from "next/link"
import { FC, useContext } from "react"
import Context from "~/cart/context/order/Context"
import CTA from "~/components/CTA"
const CheckOutCTA: FC = ({ children }) => {
    const [order] = useContext(Context) ?? []
    if (!order?.items.length) {
        return null
    }
    return (
        <Link href="/cart" passHref>
            <CTA>{children ?? "Check Out"}</CTA>
        </Link>
    )
}
export default CheckOutCTA
