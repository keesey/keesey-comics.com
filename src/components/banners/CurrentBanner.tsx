import { VFC } from "react"
/*
import { useEffect, useState, VFC } from "react"
import Kickstarter from "./Kickstarter"
const END = process.env.NEXT_PUBLIC_KICKSTARTER_END_DATE ? new Date(process.env.NEXT_PUBLIC_KICKSTARTER_END_DATE).valueOf() : NaN
const getCountdown = () => {
    const now = new Date().valueOf()
    const duration = END - now
    if (duration < 1000) {
        return null
    }
    if (duration < 60 * 1000) {
        const seconds = Math.floor(duration / 1000)
        return `${seconds} second${seconds === 1 ? "" : "s"} left!`
    }
    if (duration < 60 * 60 * 1000) {
        const minutes = Math.floor(duration / (60 * 1000))
        return `${minutes} minute${minutes === 1 ? "" : "s"} left!`
    }
    if (duration < 24 * 60 * 60 * 1000) {
        const hours = Math.floor(duration / (60 * 60 * 1000))
        return `${hours} hour${hours === 1 ? "" : "s"} left!`
    }
    {
        const days = Math.floor(duration / (24 * 60 * 60 * 1000))
        if (days % 7 === 0) {
            const weeks = Math.round(days / 7)
            return `${weeks} week${weeks === 1 ? "" : "s"} left`
        }
        return `${days} day${days === 1 ? "" : "s"} left`
    }
}
const Message: VFC = () => {
    if (process.env.NEXT_PUBLIC_KICKSTARTER_PHASE) {
        return <Kickstarter url="//www.kickstarter.com/projects/keesey/paleocene-3-comic-book">{process.env.NEXT_PUBLIC_KICKSTARTER_PHASE}</Kickstarter>
    }
    return null
}
const Countdown: VFC = () => {
    const [countdown, setCountdown] = useState(getCountdown)
    useEffect(
        () => {
            const handle = setInterval(() => setCountdown(getCountdown()), 1000)
            return () => clearInterval(handle)
        },
        [setCountdown],
    )
    return countdown
        ? <Kickstarter url="//www.kickstarter.com/projects/keesey/paleocene-3-comic-book">{countdown}</Kickstarter>
        : <Message />
}
*/
const CurrentBanner: VFC = () => null
export default CurrentBanner
