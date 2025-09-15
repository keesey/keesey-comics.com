import type { NextPage } from "next"
import type { MediaSubscription } from "schema-dts"
import OrderContainer from "~/cart/context/order/OrderContainer"
import Hero from "~/components/heroes/Hero"
import Layout from "~/components/Layout"
import Form from "~/components/MailingList/Form"
import Head from "~/components/metadata/Head"
const SUBJECT: MediaSubscription = {
    "@type": "MediaSubscription",
    "@id": "https://www.keesey-comics.com/newsletter",
    name: "Keesey Comics Newsletter",
    description: "An infrequent email bulletin for the latest news and events from Keesey Comics.",
    url: "https://www.keesey-comics.com/newsletter",
}
const Contact: NextPage = () => {
    return (
        <OrderContainer>
            <Head subject={SUBJECT} />
            <Layout footerPromos={["paleocene", "parry-and-carney", "the-flesh", "pleistocene"]} theme="kc">
                <Hero>
                    <h1>Keesey Comics Newsletter</h1>
                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <p style={{ maxWidth: "30rem", textAlign: "justify" }}>
                            The <em>Keesey Comics Newsletter</em> is an infrequent email bulletin that will keep you
                            updated on the latest news and events from Keesey Comics. Typically only a few emails are
                            sent per year.
                        </p>
                    </div>
                </Hero>
                <Form />
            </Layout>
        </OrderContainer>
    )
}
export default Contact
