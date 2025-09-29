"use client"
import { Context } from "@/lib/cart/context/approval/Context"
import { useContext } from "react"
import { Document } from "./Document"
import { PrintDialog } from "./PrintDialog"
export const Invoice = () => {
  const [approval] = useContext(Context) ?? []
  return (
    <>
      <header className="text-center">
        <h1 className="text-2xl font-bold">Thanks for your order!</h1>
        <p>You may print this receipt for your records.</p>
      </header>
      <PrintDialog>
        <Document approval={approval} />
      </PrintDialog>
    </>
  )
}
