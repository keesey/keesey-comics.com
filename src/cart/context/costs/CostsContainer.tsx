import axios from "axios"
import { FC, PropsWithChildren, useContext, useEffect, useState } from "react"
import isDomestic from "~/cart/functions/isDomestic"
import { Address } from "~/cart/models/Address"
import { Costs } from "~/cart/models/Costs"
import AddressContext from "../address/Context"
import OrderContext from "../order/Context"
import Context from "./Context"
const isValidZIPCode = (s?: string) => Boolean(s && s.length >= 5)
const isValidAddress = (address?: Partial<Address>) =>
    Boolean(address?.country && (isValidZIPCode(address.postalCode) || !isDomestic(address.country)))
const CostsContainer: FC<PropsWithChildren> = ({ children }) => {
    const [pending, setPending] = useState(false)
    const [error, setError] = useState<Error | undefined>()
    const [costs, setCosts] = useState<Costs | undefined>()
    const [address] = useContext(AddressContext) ?? []
    const [order] = useContext(OrderContext) ?? []
    useEffect(() => {
        setError(undefined)
        setCosts(undefined)
        if (!isValidAddress(address) || !order?.items.length) {
            setPending(false)
        } else {
            const abortController = new AbortController()
            setPending(true)
            ;(async () => {
                try {
                    const result = await axios.post<Costs>(
                        "/api/costs",
                        { address, order },
                        { signal: abortController.signal },
                    )
                    setCosts(result.data)
                } catch (e) {
                    if (!abortController.signal.aborted) {
                        setError(e instanceof Error ? e : new Error(String(e)))
                    }
                } finally {
                    setPending(false)
                }
            })()
            return () => abortController.abort()
        }
    }, [address, order])
    return <Context.Provider value={{ costs, error, pending }}>{children}</Context.Provider>
}
export default CostsContainer
