import Link from "next/link"
import { VFC } from "react"
import useForegroundColor from "~/themes/useForegroundColor"
import Nav from "../Layout/Nav"
import Logo from "../Logo"
const SocialNav: VFC = () => {
    const logoColor = useForegroundColor()
    return (
        <Nav>
            <Link href="/kickstarter" passHref>
                <a role="button">
                    <Logo color={logoColor} type="kickstarter" width={198} height={21} />
                </a>
            </Link>
            <a href="//sauropods.win/@keeseycomics" rel="me" role="button">
                <Logo color={logoColor} type="mastodon" width={50} height={50} />
            </a>
            <a href="//instagram.com/keesey.comics" rel="me" role="button">
                <Logo color={logoColor} type="instagram" width={42} height={42} />
            </a>
            <a href="//twitter.com/paleocenecomic" rel="me" role="button">
                <Logo color={logoColor} type="twitter" width={56} height={56} />
            </a>
            <a href="//facebook.com/paleocene" rel="me" role="button">
                <Logo color={logoColor} type="facebook" width={42} height={42} />
            </a>
            <a href="//patreon.com/tmkeesey" rel="author" role="button">
                <Logo color={logoColor} type="patreon" width={158} height={56} />
            </a>
        </Nav>
    )
}
export default SocialNav
