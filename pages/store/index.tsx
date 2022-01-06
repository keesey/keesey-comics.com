import type { NextPage } from "next";
import type { Store } from "schema-dts";
import { PRODUCT_TYPES_MAP } from "~/cart/constants/PRODUCT_TYPES";
import OrderContainer from "~/cart/context/order/OrderContainer";
import ExternalStores from "~/components/heroes/ExternalStores";
import Hero from "~/components/heroes/Hero";
import Layout from "~/components/Layout";
import Head from "~/components/metadata/Head";
import CheckOutCTA from "~/components/store/CheckOutCTA";
import Product from "~/components/store/Product";
import ProductType from "~/components/store/ProductType";
import ProductTypes from "~/components/store/ProductTypes";
const SUBJECT: Store = {
    "@type": "Store",
    "@id": "http://keesey-comics.com/store",
    name: "Keesey Comics Online Store",
    description: "Comic books, posters, bookmarks, and stickers.",
    isAccessibleForFree: true,
    url: "http://keesey-comics.com/contact",
};
const Page: NextPage = () => {
    return (
        <OrderContainer>
            <Head subject={SUBJECT} />
            <Layout theme="kc">
                <Hero>
                    <h1>Keesey Comics Online Store</h1>
                </Hero>
                <ExternalStores
                    links={[
                        { type: "gumroad", url: "//gumroad/com/keesey" },
                        {
                            type: "comixology",
                            url: "//www.comixology.com/Keesey-Comics/comics-publisher/14274-0",
                        },
                    ]}
                >
                    <span style={{ fontSize: "large" }}>
                        Digital versions available on:
                    </span>
                </ExternalStores>
                <br />
                <ProductTypes>
                    <ProductType
                        title="Comic Books"
                        description={
                            <>
                                Standard Size (6⅞<abbr title="inches">&quot;</abbr> × 10½
                                <abbr title="inches">&quot;</abbr>), 22 Story Pages{" "}
                                <abbr title="Plus">+</abbr> Extra Material
                            </>
                        }
                        price={PRODUCT_TYPES_MAP["COB-STD"].value}
                    >
                        <Product id="COB-STD-PAL-01B" />
                        <Product id="COB-STD-PAL-02A" />
                        <Product id="COB-STD-PAL-03A" />
                    </ProductType>
                    <ProductType
                        title="Posters"
                        description={
                            <>
                                11<abbr title="inches">&quot;</abbr> <abbr title="by">×</abbr>{" "}
                                17<abbr title="inches">&quot;</abbr>
                            </>
                        }
                        price={PRODUCT_TYPES_MAP["POS-17I"].value}
                    >
                        <Product id="POS-17I-PAL-001" noTitle />
                        <Product id="POS-17I-PAL-002" noTitle />
                    </ProductType>
                    <ProductType
                        title="Stickers"
                        description={
                            <>
                                2<abbr title="inches">&quot;</abbr> <abbr title="by">×</abbr> 2
                                <abbr title="inches">&quot;</abbr>
                            </>
                        }
                        price={PRODUCT_TYPES_MAP["STK-02I"].value}
                    >
                        <Product id="STK-02I-PAL-001" noTitle />
                        <Product id="STK-02I-PAL-002" noTitle />
                    </ProductType>
                    <ProductType
                        title="Bookmarks"
                        description={
                            <>
                                2<abbr title="inches">&quot;</abbr> <abbr title="by">×</abbr> 6
                                <abbr title="inches">&quot;</abbr>
                            </>
                        }
                        price={PRODUCT_TYPES_MAP["BKM-06I"].value}
                    >
                        <Product id="BKM-06I-PAL-001" noTitle />
                    </ProductType>
                </ProductTypes>
                <br />
                <CheckOutCTA />
            </Layout>
        </OrderContainer>
    );
};
export default Page;
