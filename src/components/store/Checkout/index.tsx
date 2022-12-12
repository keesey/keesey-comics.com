import Link from "next/link"
import { FC, useContext } from "react"
import Context from "~/cart/context/order/Context"
import CTA from "~/components/CTA"
import Hero from "~/components/heroes/Hero"
import PayPalButtons from "~/components/store/PayPalButtons"
import ShippingForm from "~/components/store/ShippingForm"
import ShoppingCart from "~/components/store/ShoppingCart"
const Checkout: FC = () => {
    const [order] = useContext(Context) ?? []
    return (
        <>
            <Hero>
                <h1>Your Cart</h1>
            </Hero>
            <ShoppingCart />
            <br />
            <Link href="/store" legacyBehavior passHref>
                <CTA>{`${order?.items.length ? "Keep" : "Start"} Shopping`}</CTA>
            </Link>
            <br />
            <ShippingForm />
            <br />
            <PayPalButtons />
        </>
    )
}
export default Checkout
