/* eslint-disable @next/next/no-img-element */
import { FC, Fragment } from "react"
import useForegroundColor from "~/themes/useForegroundColor"
import ComicText from "../ComicText"
import Logo from "../Logo"
import styles from "./ExternalStores.module.scss"
export type ExternalStoreLink = Readonly<{
    type: "comixology" | "gumroad"
    url: string
}>
export interface Props {
    links?: readonly ExternalStoreLink[]
}
const LOGO_HEIGHT: Readonly<Record<ExternalStoreLink["type"], number>> = {
    gumroad: 48,
    comixology: 20,
}
const ExternalStores: FC<Props> = ({ children, links }) => {
    const logoColor = useForegroundColor()
    return links && links.length > 0 ? (
        <div className={styles.externalStores} key="external-stores">
            <Fragment key={0}>{children ?? <ComicText>Also available digitally on:</ComicText>}</Fragment>
            {links.map(({ type, url }) => (
                <Fragment key={type}>
                    {" "}
                    <a href={url}>
                        <Logo color={logoColor} type={type} width="auto" height={LOGO_HEIGHT[type]} />
                    </a>
                </Fragment>
            ))}
        </div>
    ) : null
}
export default ExternalStores
