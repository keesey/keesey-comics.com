import { ImageRail } from "@/components/ImageRail"
export const AllComicsAside = () => {
  return (
    <aside className="py-8">
      <h2 className="mx-auto mb-4 text-center text-xl font-bold">
        Browse all our comics:
      </h2>
      <ImageRail
        items={[
          {
            alt: "Paleocene",
            href: "/comics/paleocene",
            imgSrc: "/comics/paleocene/issues/06/front_cover.png",
          },
          {
            alt: "The Flesh",
            href: "/comics/the-flesh",
            imgSrc: "/comics/the-flesh/issues/01/front_cover.png",
          },
          {
            alt: "Pleistocene",
            href: "/comics/pleistocene",
            imgSrc: "/comics/pleistocene/front_cover_standard.jpg",
          },
          {
            alt: "Parry ‘n’ Carney",
            href: "/comics/parry-n-carney",
            imgSrc: "/comics/parry-n-carney/front_cover_standard.png",
          },
        ]}
      />
    </aside>
  )
}
