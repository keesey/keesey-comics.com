import { Preview, type PreviewProps } from "@/components/Preview"
export type PreviewSectionProps = PreviewProps
export const PreviewSection = ({ images, size }: PreviewSectionProps) => (
  <section className="flex-grow-1 text-center">
    <h2 className="hidden">Preview</h2>
    <Preview images={images} size={size} />
  </section>
)
