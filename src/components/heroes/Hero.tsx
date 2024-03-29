import { FC, PropsWithChildren } from "react"
import useThemedClassName from "~/themes/useThemedClassName"
import styles from "./Hero.module.scss"
const Hero: FC<PropsWithChildren> = ({ children }) => {
    const className = useThemedClassName(styles, "hero")
    return <header className={className}>{children}</header>
}
export default Hero
