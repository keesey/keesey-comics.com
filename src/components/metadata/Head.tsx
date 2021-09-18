import NextHead from "next/head"
import { FC } from "react"
import type { Person, Thing } from "schema-dts"
import KEESEY_COMICS from "~/schema/KEESEY_COMICS"
import MIKE_KEESEY from "~/schema/MIKE_KEESEY"
import Schema from "./Schema"
export interface Props {
    author?: Person
    language?: string
    noIndex?: true
    socialImageAlt?: string
    subject: Thing
}
// :KLUDGE: Types are complex and confuse compiler.
const getTextValue = <T extends any>(value: T | string | readonly T[] | undefined, property: keyof T): string => {
    if (typeof value === "string") {
        return value
    }
    if (value !== null && typeof value === "object") {
        if (Array.isArray(value)) {
            return value
                .map((item) => getTextValue(item, property))
                .filter(Boolean)
                .join(", ")
        }
        if ((value as any)["@type"] === "PronounceableText") {
            return getTextValue((value as any).textValue, property)
        }
        return getTextValue((value as any)[property], property)
    }
    return ""
}
const SITE_NAME = getTextValue(KEESEY_COMICS, "name");
const Head: FC<Props> = ({ author, children, language, noIndex, socialImageAlt, subject }) => {
    const authorName = getTextValue(author, "name")
    const description = getTextValue(subject, "description")
    const title = getTextValue(subject, "name")
    const url = getTextValue(subject, "@id")
    return (
        <NextHead>
            <title key="title">{title}</title>
            <meta key="meta:charset" charSet="UTF-8" />
            <meta key="meta:http-equiv:x-ua-compatible" httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta key="meta:name:author" name="author" content={authorName} />
            <meta key="meta:name:description" name="description" content={description} />
            <meta key="meta:name:language" name="language" content={language} />
            <meta key="meta:name:no-email-collection" name="no-email-collection" content="//unspam.com/noemailcollection" />
            <meta key="meta:name:reply-to" name="reply-to" content="keesey+comics@gmail.com" />
            <meta key="meta:name:robots" name="robots" content={`${noIndex ? "no" : ""}index`} />
            <meta key="meta:name:twitter:card" name="twitter:card" content="summary_large_image" />
            <meta key="meta:name:twitter:creator" name="twitter:creator" content="@tmkeesey" />
            <meta key="meta:name:twitter:description" name="twitter:description" content={description} />
            <meta key="meta:name:twitter:image" name="twitter:image" content={`${url}/social/876x438.png`} />
            <meta key="meta:name:twitter:image:alt" name="twitter:image:alt" content={socialImageAlt || title} />
            <meta key="meta:name:twitter:image:height" name="twitter:image:height" content="438" />
            <meta key="meta:name:twitter:image:width" name="twitter:image:width" content="876" />
            <meta key="meta:name:twitter:image:title" name="twitter:title" content={title} />
            <meta key="meta:name:viewport" name="viewport" content="width=device-width,initial-scale=1" />
            <meta key="meta:property:og:description" property="og:description" content={description} />
            <meta key="meta:property:og:image" property="og:image" content={`${url}/social/1200x628.png`} />
            <meta key="meta:property:og:image:alt" property="og:image:alt" content={socialImageAlt || title} />
            <meta key="meta:property:og:image:height" property="og:image:height" content="628" />
            <meta key="meta:property:og:image:type" property="og:image:type" content="image/png" />
            <meta key="meta:property:og:image:width" property="og:image:width" content="1200" />
            <meta key="meta:property:og:site_name" property="og:site_name" content={SITE_NAME} />
            <meta key="meta:property:og:title" property="og:title" content={title} />
            <meta key="meta:property:og:type" property="og:type" content="website" />
            <meta key="meta:property:og:url" property="og:url" content={url} />
            <link key="link:author" rel="author" href="//tmkeesey.net" />
            <link key="link:canonical" rel="canonical" href={url} />
            <link key="link:icon" rel="icon" href={`${url}/favicon.ico`} sizes="32x32 48x48" type="image/vnd.microsoft.icon" />
            <Schema key="script:schema" thing={subject} />
            {children}
        </NextHead>
    )
}
Head.defaultProps = {
    author: MIKE_KEESEY,
    language: "en",
}
export default Head
