"use client"
import { type PropsWithChildren, useCallback, useContext, useRef } from "react"
import { Context } from "@/lib/cart/context/approval/Context"
import { CTA } from "@/components/CTA"
import styles from "./index.module.scss"
import { IFrameReference } from "@/components/IFrameReference"
export const PrintDialog = ({ children }: PropsWithChildren) => {
  const [approval] = useContext(Context) ?? []
  const printRef = useRef<HTMLIFrameElement | null>(null)
  const handlePrintCTAClick = useCallback(
    () => printRef.current?.contentWindow?.print(),
    [printRef],
  )
  if (!approval) {
    return null
  }
  return (
    <>
      <div className="m-6 flex items-center justify-center">
        <CTA onClick={handlePrintCTAClick}>Print Invoice</CTA>
      </div>
      <div className={styles.iFrameContainer}>
        <IFrameReference iframeRef={printRef}>{children}</IFrameReference>
      </div>
    </>
  )
}
