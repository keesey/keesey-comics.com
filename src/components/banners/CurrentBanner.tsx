import { VFC } from "react";
import Kickstarter from "./Kickstarter";
const CurrentBanner: VFC = () => process.env.NEXT_PUBLIC_KICKSTARTER_PHASE
    ? <Kickstarter url="//www.kickstarter.com/projects/keesey/paleocene-3-comic-book">{process.env.NEXT_PUBLIC_KICKSTARTER_PHASE}</Kickstarter>
    : null
export default CurrentBanner
