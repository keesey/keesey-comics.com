"use client"
import { State } from "@/lib/cart/context/approval/State"
import { useEffect, useState } from "react"
export interface DocumentHeadProps {
  approval?: State
}
export const DocumentHead = ({ approval }: DocumentHeadProps) => {
  const [css, setCSS] = useState("")
  useEffect(() => {
    if (approval) {
      let newCSS = ""
      for (const styleSheet of window?.top?.document?.styleSheets ?? []) {
        if (styleSheet.cssRules) {
          for (const cssRule of styleSheet.cssRules) {
            newCSS += cssRule.cssText
          }
        }
      }
      setCSS(newCSS)
    }
  }, [approval])
  if (!approval) {
    return null
  }
  return (
    <head>
      <title>Keesey Comics: Order #{approval.data.orderID}</title>
      <style dangerouslySetInnerHTML={{ __html: css }} />
    </head>
  )
}
