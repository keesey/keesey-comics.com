import type { NextPage } from "next"
import type { MediaSubscription } from "schema-dts"
import Hero from "~/components/heroes/Hero"
import Layout from "~/components/Layout"
import Form from "~/components/MailingList/Form"
import Head from "~/components/metadata/Head"
import SocialNav from "~/components/SocialNav"
const SUBJECT: MediaSubscription = {
    "@type": "MediaSubscription",
    "@id": "http://keesey-comics.com/mailinglist",
    name: "Keesey Comics Mailing List",
    description: "Newsletter for Keesey Comics.",
    url: "http://keesey-comics.com/mailinglist",
}
const Contact: NextPage = () => {
    return (
        <>
            <Head subject={SUBJECT} />
            <Layout footerPromos={["paleocene", "pleistocene", "phylopic"]} theme="kc">
                <Hero>
                    <h1>Keesey Comics Mailing List</h1>
                </Hero>
                <Form />
                <hr />
                <SocialNav />
            </Layout>
        </>
    )
}
export default Contact
