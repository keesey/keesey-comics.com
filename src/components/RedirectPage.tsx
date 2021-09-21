import { VFC } from "react"
import Head from "next/head"
export interface Props {
    href: string
    title: string
}
const RedirectPage: VFC<Props> = ({ href, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta httpEquiv="refresh" content={`0; url=${href}`} />
            </Head>
            <body>
                <div style={{ color: "#888", fontFamily: "Roboto, sans", margin: 20 }}>
                    Redirecting to <a href={href}>{title}</a>.&hellip;
                </div>
            </body>
        </>
    )
}
export default RedirectPage
