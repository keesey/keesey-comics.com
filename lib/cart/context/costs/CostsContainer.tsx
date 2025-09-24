"use client"
import axios from "axios"
import { type PropsWithChildren, useContext, useEffect, useState } from "react"
import { isDomestic } from "../../functions/isDomestic"
import { Address } from "../../models/Address"
import { Costs } from "../../models/Costs"
import { Context as AddressContext } from "../address/Context"
import { Context as OrderContext } from "../order/Context"
import { Context } from "./Context"
const isValidZIPCode = (s?: string) => Boolean(s && s.length >= 5)
const isValidAddress = (address?: Partial<Address>) =>
  Boolean(
    address?.countryCode &&
      (isValidZIPCode(address.postalCode) || !isDomestic(address.countryCode)),
  )
export const CostsContainer = ({ children }: PropsWithChildren) => {
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
        } catch {
          if (!abortController.signal.aborted) {
            setError(new Error("Could not determine a shipping rate."))
          }
        } finally {
          setPending(false)
        }
      })()
      return () => abortController.abort()
    }
  }, [address, order])
  return (
    <Context.Provider value={{ costs, error, pending }}>
      {children}
    </Context.Provider>
  )
}
