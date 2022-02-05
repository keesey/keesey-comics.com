import { VFC } from "react"
import type { Thing, WithContext } from "schema-dts"
export interface Props {
    thing?: Thing
}
const Schema: VFC<Props> = ({ thing }) => {
    if (!thing) {
        return null
    }
    const contextualized = { "@context": "https://schema.org", ...(thing as object) } as WithContext<Thing>
    const json = JSON.stringify(contextualized)
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: json,
            }}
        />
    )
}
export default Schema
