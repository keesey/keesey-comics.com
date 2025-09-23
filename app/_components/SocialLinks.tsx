import Link from "next/link"
import { FaKickstarter, FaPatreon, FaRegEnvelope } from "react-icons/fa6"
export const SocialLinks = () => {
  return (
    <section className="mb-6">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-start gap-6 px-6 md:flex-row md:items-center md:justify-center">
        <a
          className="group flex items-center space-x-2 text-black hover:underline dark:text-white"
          href="/patreon"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaPatreon className="size-10 transition-transform group-hover:scale-110" />
          <span>Support us on Patreon</span>
        </a>
        <a
          className="group flex items-center space-x-2 text-[#05ce78] hover:underline"
          href="/kickstarter"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaKickstarter className="size-10 transition-transform group-hover:scale-110" />
          <span>Back us on Kickstarter</span>
        </a>
        <Link
          className="group flex items-center space-x-2 text-black hover:underline dark:text-white"
          href="/newsletter"
        >
          <FaRegEnvelope className="size-10 transition-transform group-hover:scale-110" />
          <span>Subscribe to the Newsletter</span>
        </Link>
      </div>
    </section>
  )
}
