import Image from "next/image"
export const Logo = () => {
  return (
    <div className="relative h-[48px] w-[80px] md:h-[72px] md:w-[120px]">
      <Image
        alt="Keesey Comics"
        fill
        className="inline-block dark:hidden"
        src="/logos/black/keesey-comics.svg"
        priority
      />
      <Image
        alt="Keesey Comics"
        className="hidden dark:inline-block"
        fill
        src="/logos/white/keesey-comics.svg"
        priority
      />
    </div>
  )
}
