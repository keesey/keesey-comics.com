import type { NextPage } from "next"
import type { MediaSubscription } from "schema-dts"
import OrderContainer from "~/cart/context/order/OrderContainer"
import Hero from "~/components/heroes/Hero"
import Layout from "~/components/Layout"
import Form from "~/components/MailingList/Form"
import Head from "~/components/metadata/Head"
import SocialNav from "~/components/SocialNav"
const SUBJECT: MediaSubscription = {
    "@type": "MediaSubscription",
    "@id": "https://www.keesey-comics.com/mailinglist",
    name: "Keesey Comics Mailing List",
    description: "Newsletter for Keesey Comics.",
    url: "https://www.keesey-comics.com/mailinglist",
}
const Contact: NextPage = () => {
    return (
        <OrderContainer>
            <Head subject={SUBJECT} />
            <Layout footerPromos={["paleocene", "pleistocene", "parry-and-carney"]} theme="kc">
                <Hero>
                    <h1>Keesey Comics Mailing List</h1>
                </Hero>
                <Form />
                <hr />
                <SocialNav />
            </Layout>
        </OrderContainer>
    )
}
export default Contact
