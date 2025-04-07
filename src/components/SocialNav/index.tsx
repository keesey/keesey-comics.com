import Link from "next/link"
import { FC } from "react"
import useForegroundColor from "~/themes/useForegroundColor"
import Nav from "../Layout/Nav"
import Logo from "../Logo"
const SocialNav: FC = () => {
    const logoColor = useForegroundColor()
    return (
        <Nav>
            <Link href="/kickstarter" legacyBehavior passHref>
                <a role="button">
                    <Logo color={logoColor} type="kickstarter-k" width={50} height={50} />
                </a>
            </Link>
            <a href="//patreon.com/tmkeesey" rel="author" role="button">
                <Logo color={logoColor} type="patreon-p" width={50} height={50} />
            </a>
        </Nav>
    )
}
export default SocialNav
