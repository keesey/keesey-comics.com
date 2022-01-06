import Link from "next/link"
import { useContext, VFC } from "react"
import Context from "~/cart/context/order/Context"
import CTA from "~/components/CTA"
import Hero from "~/components/heroes/Hero"
import PayPalButtons from "~/components/store/PayPalButtons"
import ShippingForm from "~/components/store/ShippingForm"
import ShoppingCart from "~/components/store/ShoppingCart"
const Checkout: VFC = () => {
    const [order] = useContext(Context) ?? []
    return (
        <>
            <Hero>
                <h1>Your Cart</h1>
            </Hero>
            <ShoppingCart />
            <br />
            <Link href="/store" passHref>
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
