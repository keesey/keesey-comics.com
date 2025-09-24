import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Portrait } from "@/components/Portrait"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  alternates: { canonical: "/creators" },
  openGraph: { siteName: "Keesey Comics", url: "/creators" },
  title: "Keesey Comics: The Creators",
}
export default function Creators() {
  return (
    <>
      <Breadcrumbs
        crumbs={[{ label: "Home", href: "/" }, { label: "Creators" }]}
      />
      <div className="flex flex-col gap-8">
        <h1 className="mx-auto px-4 text-3xl font-bold">The Comics Creators</h1>
        <div className="flex flex-wrap items-center justify-center gap-8 px-8">
          <Link
            className="group flex cursor-pointer flex-col gap-8 text-center"
            href="/creators/mike-keesey"
          >
            <Portrait
              alt="Mike Keesey (Cartoon Portrait)"
              src="/creators/mike-keesey/portrait.svg"
            />
            <h2 className="text-xl font-bold">Mike Keesey</h2>
          </Link>
          <Link
            className="group flex cursor-pointer flex-col gap-8 text-center"
            href="/creators/gage-ullman"
          >
            <Portrait
              alt="Gage Ullman (Cartoon Portrait)"
              src="/creators/gage-ullman/portrait.svg"
            />
            <h2 className="text-xl font-bold">Gage Ullman</h2>
          </Link>
        </div>
      </div>
    </>
  )
}
