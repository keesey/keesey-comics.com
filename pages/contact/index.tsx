import type { NextPage } from "next"
import Link from "next/link"
import type { ContactPage } from "schema-dts"
import OrderContainer from "~/cart/context/order/OrderContainer"
import CTA from "~/components/CTA"
import Hero from "~/components/heroes/Hero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import SocialNav from "~/components/SocialNav"
const SUBJECT: ContactPage = {
    "@type": "ContactPage",
    "@id": "https://www.keesey-comics.com/contact",
    name: "Contact Keesey Comics",
    description: "How to contact Keesey Comics via email.",
    isAccessibleForFree: true,
    url: "https://www.keesey-comics.com/contact",
}
const Contact: NextPage = () => {
    return (
        <OrderContainer>
            <Head subject={SUBJECT} />
            <Layout footerPromos={["paleocene", "pleistocene", "phylopic"]} theme="kc">
                <Hero>
                    <h1>Keesey Comics</h1>
                    <address>
                        Email: <a href="mailto:keesey+comics@gmail.com">keesey+comics@gmail.com</a>
                    </address>
                </Hero>
                <Link href="/mailinglist" legacyBehavior passHref>
                    <CTA>
                        <span>Join the mailing list</span>
                    </CTA>
                </Link>
                <hr />
                <SocialNav />
            </Layout>
        </OrderContainer>
    )
}
export default Contact
