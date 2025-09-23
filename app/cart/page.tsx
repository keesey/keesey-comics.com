import { Breadcrumbs } from "@/components/Breadcrumbs"
import { AddressContainer } from "@/lib/cart/context/address/AddressContainer"
import { ApprovalContainer } from "@/lib/cart/context/approval/ApprovalContainer"
import { CostsContainer } from "@/lib/cart/context/costs/CostsContainer"
import type { Metadata } from "next"
import { Cart } from "./_components/Cart"
import { METADATA_BASE } from "../_lib/METADATA_BASE"
export const metadata: Metadata = {
  alternates: { canonical: "/cart" },
  metadataBase: METADATA_BASE,
  robots: { follow: true, index: false },
  title: "Your Shopping Cart – Keesey Comics",
}
export default function CartPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[{ label: "Home", href: "/" }, { label: "Your Cart" }]}
      />
      <ApprovalContainer>
        <AddressContainer>
          <CostsContainer>
            <Cart />
          </CostsContainer>
        </AddressContainer>
      </ApprovalContainer>
    </>
  )
}
