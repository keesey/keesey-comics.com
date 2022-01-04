import type { NextPage } from "next"
import CartContainer from "~/cart/CartContainer"
import CTA from "~/components/CTA"
import Hero from "~/components/heroes/Hero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import ShoppingCart from "~/components/store/ShoppingCart"
import Link from "next/link"
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
                    <CTA>Add More Stuff</CTA>
                </Link>
                :TODO:
            </Layout>
        </CartContainer>
    )
}
export default Page
