import Link from "next/link"
import { FaKickstarterK, FaPatreon } from "react-icons/fa6"
export const SocialButtons = () => (
  <>
    <Link href="/patreon">
      <button className="ml-4 cursor-pointer" aria-label="Patreon">
        <FaPatreon className="h-6 w-6 text-black transition-transform hover:scale-120 dark:text-white" />
      </button>
    </Link>
    <Link href="/kickstarter">
      <button className="ml-4 cursor-pointer" aria-label="Kickstarter">
        <FaKickstarterK className="h-6 w-6 text-[#05ce78] transition-transform hover:scale-120" />
      </button>
    </Link>
  </>
)
