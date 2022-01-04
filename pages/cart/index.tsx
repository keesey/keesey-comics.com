import type { NextPage } from "next"
import CartContainer from "~/cart/CartContainer"
import Hero from "~/components/heroes/Hero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
const Page: NextPage = () => {
    return (
        <CartContainer>
            <Head subject="Your Cart" />
            <Layout theme="kc">
                <Hero>
                    <h1>Your Cart</h1>
                </Hero>
                :TODO:
            </Layout>
        </CartContainer>
    )
}
export default Page
