import { PropsWithChildren } from "react"

export interface TrailerSectionProps extends PropsWithChildren {
  source: "vimeo" | "youtube"
  title: string
  videoId: string
}
export const TrailerSection = ({
  children,
  source,
  title,
  videoId,
}: TrailerSectionProps) => {
  return (
    <section className="mb-8 text-center">
      <h2 className="text-lg font-bold">{children}</h2>
      <div className="bg-black">
        {source === "vimeo" && (
          <iframe
            className="mx-auto aspect-video max-w-screen min-w-[240px] md:w-[560px] lg:w-[800px]"
            src={`https://player.vimeo.com/video/${encodeURIComponent(videoId)}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title={title}
          />
        )}
        {source === "youtube" && (
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mx-auto aspect-video max-w-screen min-w-[240px] md:w-[560px] lg:w-[800px]"
            src={`https://www.youtube.com/embed/${encodeURIComponent(videoId)}`}
          />
        )}
      </div>
    </section>
  )
}
