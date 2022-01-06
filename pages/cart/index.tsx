import type { NextPage } from "next"
import CartContainer from "~/cart/CartContainer"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import Cart from "~/components/store/Cart"
const Page: NextPage = () => {
    return (
        <CartContainer>
            <Head subject="Keesey Comics: Your Cart" />
            <Layout theme="kc">
                <Cart />
            </Layout>
        </CartContainer>
    )
}
export default Page
