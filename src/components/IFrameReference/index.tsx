import { FC, MutableRefObject, useEffect, useState } from "react"
import { createPortal } from "react-dom"
export interface Props {
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
    return <iframe ref={setInternalRef}>{container && createPortal(children, container)}</iframe>
}
export default IFrameReference
