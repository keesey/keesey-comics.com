import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Link from "next/link"
import PRODUCTS, { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS"
import OrderContainer from "~/cart/context/order/OrderContainer"
import CTA from "~/components/CTA"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import useProduct from "~/components/metadata/useProduct"
import CheckOutCTA from "~/components/store/CheckOutCTA"
import ProductHero from "~/components/store/ProductHero"
export interface Props {
    productId: string;
}
const Page: NextPage<Props> = ({ productId }) => {
    const product = PRODUCTS_MAP[productId]
    const productSchema = useProduct(product)
    return (
        <OrderContainer>
            <Head subject={productSchema} />
            <Layout theme={product.theme ?? "kc"}>
                <ProductHero productId={productId} />
                <Link href="/store" passHref>
                    <CTA>See More Products</CTA>
                </Link>
                <br />
                <CheckOutCTA />
            </Layout>
        </OrderContainer>
    )
}
export default Page
export const getStaticPaths: GetStaticPaths = () => {
    return {
        fallback: false,
        paths: PRODUCTS.map(({ id }) => ({
            params: { id },
        })),
    };
}
export const getStaticProps: GetStaticProps<Props> = (context) => {
    const productId = context.params?.id
    if (typeof productId !== "string") {
        return { notFound: true }
    }
    const product = PRODUCTS_MAP[productId]
    if (!product) {
        return { notFound: true }
    }
    if (product.path) {
        return {
            redirect: {
                destination: product.path,
                permanent: true,
            },
        }
    }
    return { props: { productId } }
}