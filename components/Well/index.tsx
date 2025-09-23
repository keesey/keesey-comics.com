import type { PropsWithChildren } from "react"
export const Well = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col gap-8 rounded-2xl bg-gray-200 p-8 dark:bg-black">
    {children}
  </div>
)
