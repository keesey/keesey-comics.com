import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import PRODUCTS, { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS"
import OrderContainer from "~/cart/context/order/OrderContainer"
import Hero from "~/components/heroes/Hero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import useProduct from "~/components/metadata/useProduct"
export interface Props {
    productId: string;
}
const Page: NextPage<Props> = ({ productId }) => {
    const product = PRODUCTS_MAP[productId]
    const productSchema = useProduct(product)
    const theme = productId.split("-")[2] === "PAL" ? "night" : "kc";
    return (
        <OrderContainer>
            <Head subject={productSchema} />
            <Layout theme={theme}>
                <Hero>
                    <h1 dangerouslySetInnerHTML={{
                        __html: product.html
                    }} />
                    <h2>{product.type.name}</h2>
                </Hero>
                :TODO:
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