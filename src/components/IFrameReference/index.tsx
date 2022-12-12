import { FC, MutableRefObject, PropsWithChildren, ReactNode, useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
export interface Props extends PropsWithChildren {
    iframeRef?: MutableRefObject<HTMLIFrameElement | null>
}
const IFrameReference: FC<Props> = ({ children, iframeRef: iframRef }) => {
    const [internalRef, setInternalRef] = useState<HTMLIFrameElement | null>(null)
    useEffect(() => {
        if (iframRef) {
            iframRef.current = internalRef
        }
    }, [internalRef, iframRef])
    const container = internalRef?.contentDocument?.body
    const portal = useMemo(
        () => (container ? (createPortal(children, container) as ReactNode) : undefined),
        [children, container],
    )
    return <iframe ref={setInternalRef}>{portal}</iframe>
}
export default IFrameReference
