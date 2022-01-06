/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useCallback, useContext, useRef, VFC } from "react";
import Context from "~/cart/context/approval/Context";
import CTA from "~/components/CTA";
import Hero from "~/components/heroes/Hero";
import IFrameReference from "~/components/IFrameReference";
import Document from "./Document";
import styles from "./index.module.scss";
const Invoice: VFC = () => {
    const [approval] = useContext(Context) ?? [];
    const printRef = useRef<HTMLIFrameElement | null>(null);
    const handlePrintCTAClick = useCallback(
        () => printRef.current?.contentWindow?.print(),
        [],
    );
    if (!approval) {
        return null;
    }
    return (
        <>
            <Head>
                <title key="title">Keesey Comics: Order #{approval.data.orderID}</title>
            </Head>
            <Hero>
                <h1>Thanks for your order!</h1>
                <p>You may print this receipt for your records.</p>
            </Hero>
            <CTA onClick={handlePrintCTAClick}>Print invoice</CTA>
            <br />
            <div className={styles.iFrameContainer}>
                <IFrameReference iframeRef={printRef}>
                    <Document approval={approval} />
                </IFrameReference>
            </div>
            <div style={{ display: "none" }}>
                <Document />
            </div>
        </>
    )
}
export default Invoice;
