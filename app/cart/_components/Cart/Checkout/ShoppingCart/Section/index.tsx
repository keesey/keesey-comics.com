import type { PropsWithChildren } from "react"
export const Section = ({ children }: PropsWithChildren) => {
  return (
    <section className="mb-[-2] border-2 border-gray-200 p-4 first-of-type:rounded-t-xl last-of-type:rounded-b-xl dark:border-0 dark:border-t-2 dark:border-gray-800 dark:bg-black dark:first-of-type:border-0">
      {children}
    </section>
  )
}
