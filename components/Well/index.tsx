import type { PropsWithChildren } from "react"
export const Well = ({ children }: PropsWithChildren) => (
  <div className="mx-2 flex flex-col gap-8 rounded-2xl bg-gray-200 p-8 md:mx-0 dark:bg-black">
    {children}
  </div>
)
