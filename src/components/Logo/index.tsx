/* eslint-disable @next/next/no-img-element */
import { DetailedHTMLProps, forwardRef, ImgHTMLAttributes } from "react"
import { ThemeColor } from "~/themes/ThemeColor"
export interface Props
    extends Exclude<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "alt" | "src"> {
    color: ThemeColor
    type:
        | "gumroad"
        | "instagram"
        | "keesey-comics"
        | "kickstarter"
        | "kickstarter-k"
        | "mastodon"
        | "paleocene"
        | "parry-and-carney"
        | "patreon"
        | "phylopic"
        | "pleistocene"
        | "the-flesh"
}
const getExtension = (type: Props["type"]) => (type === "pleistocene" ? "png" : "svg")
const ALT_TEXT: Readonly<Record<Props["type"], string>> = {
    gumroad: "Gumroad",
    instagram: "Instagram",
    "keesey-comics": "Keesey Comics",
    kickstarter: "Kickstarter",
    "kickstarter-k": "Kickstarter",
    mastodon: "Mastodon",
    paleocene: "Paleocene",
    "parry-and-carney": "Parry 'n' Carney: Friends for Life",
    patreon: "Patreon",
    phylopic: "PhyloPic",
    pleistocene: "Pleistocene",
    "the-flesh": "The Flesh",
}
const Logo = forwardRef<HTMLImageElement, Props>(function Logo({ color, type, ...props }, ref) {
    const alt = ALT_TEXT[type]
    const src = `/images/logos/${color}/${type}.${getExtension(type)}`
    return <img {...props} alt={alt} src={src} ref={ref} />
})
export default Logo
