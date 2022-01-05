import type { NextPage } from "next"
import Link from "next/link"
import CartContainer from "~/cart/CartContainer"
import CTA from "~/components/CTA"
import Hero from "~/components/heroes/Hero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import PayPalButton from "~/components/store/PayPalButton"
import ShippingForm from "~/components/store/ShippingForm"
import ShoppingCart from "~/components/store/ShoppingCart"
const Page: NextPage = () => {
    return (
        <CartContainer>
            <Head subject="Keesey Comics: Your Cart" />
            <Layout theme="kc">
                <Hero>
                    <h1>Your Cart</h1>
                </Hero>
                <ShoppingCart />
                <br />
                <Link href="/store" passHref>
                    <CTA>Keep Shopping</CTA>
                </Link>
                <br />
                <ShippingForm />
                <br />
                <PayPalButton />
            </Layout>
        </CartContainer>
    )
}
export default Page
