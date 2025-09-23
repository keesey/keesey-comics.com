// app/components/FeaturedReleases.tsx
import type { AppRoute } from "next/dist/build/swc/types"
import Image from "next/image"
import Link, { type LinkProps } from "next/link"
type Release = Readonly<{
  title: string
  img: string
  link: LinkProps<AppRoute>["href"] & string
  aspectRatio: number
}>
const RELEASES: readonly Release[] = [
  {
    title: "Paleocene #5",
    img: "/comics/paleocene/issues/05/front_cover.png",
    link: "/comics/paleocene/issues/05",
    aspectRatio: 994 / 1538,
  },
  {
    title: "Paleocene #6",
    img: "/comics/paleocene/issues/06/front_cover.png",
    link: "/comics/paleocene/issues/06",
    aspectRatio: 994 / 1538,
  },
  {
    title: "The Flesh #3",
    img: "/comics/the-flesh/issues/03/front_cover.png",
    link: "/comics/the-flesh/issues/03",
    aspectRatio: 994 / 1538,
  },
  {
    title: "The Flesh #2",
    img: "/comics/the-flesh/issues/02/front_cover.png",
    link: "/comics/the-flesh/issues/02",
    aspectRatio: 994 / 1538,
  },
  {
    title: "Parry ‘n’ Carney: Friends for Life",
    img: "/comics/parry-n-carney/front_cover_standard.png",
    link: "/comics/parry-n-carney",
    aspectRatio: 994 / 1538,
  },
]
const IMAGE_AREA = 352026 / 4
export const FeaturedPublications = () => {
  return (
    <section className="bg-gray-50 py-6 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Featured Publications
        </h2>
        <div className="grid grid-cols-3 gap-6 md:grid-cols-5">
          {RELEASES.map(release => (
            <Link key={release.link} href={release.link} className="group">
              <div className="relative mb-3 overflow-hidden bg-gray-200 shadow-md transition-transform group-hover:scale-105 dark:bg-gray-700">
                <Image
                  src={release.img}
                  alt={release.title}
                  width={Math.sqrt(IMAGE_AREA * release.aspectRatio)}
                  height={Math.sqrt(IMAGE_AREA / release.aspectRatio)}
                />
              </div>
              <div className="text-center italic">{release.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
