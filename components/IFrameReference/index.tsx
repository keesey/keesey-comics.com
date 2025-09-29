"use client"
import {
  type PropsWithChildren,
  type RefObject,
  useEffect,
  useMemo,
  useState,
} from "react"
import { createPortal } from "react-dom"
export interface IFrameReferenceProps extends PropsWithChildren {
  iframeRef?: RefObject<HTMLIFrameElement | null>
}
export const IFrameReference = ({
  children,
  iframeRef,
}: IFrameReferenceProps) => {
  const [internalRef, setInternalRef] = useState<HTMLIFrameElement | null>(null)
  useEffect(() => {
    if (iframeRef) {
      iframeRef.current = internalRef
    }
  }, [internalRef, iframeRef])
  const container = internalRef?.contentDocument?.body
  const portal = useMemo(
    () => (container ? createPortal(children, container) : undefined),
    [children, container],
  )
  return <iframe ref={setInternalRef}>{portal}</iframe>
}
