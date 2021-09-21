import { VFC } from "react";
import Kickstarter from "./Kickstarter";
const CurrentBanner: VFC = () => process.env.KICKSTARTER_PHASE
    ? <Kickstarter url="https://www.kickstarter.com/projects/keesey/paleocene-3-comic-book">{process.env.KICKSTARTER_PHASE}</Kickstarter>
    : null
export default CurrentBanner
