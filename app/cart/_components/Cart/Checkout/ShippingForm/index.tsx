import { AddressForm } from "./AddressForm"
import { CostsTable } from "./CostsTable"
import { ShippingOptionForm } from "./ShippingOptionForm"
export const ShippingForm = () => {
  return (
    <section className="mx-auto flex w-xl max-w-screen flex-col items-center justify-center gap-4 rounded-4xl border-2 border-gray-200 bg-white p-4 dark:border-none dark:bg-black">
      <h2 className="text-xl font-bold">2. Calculate Shipping</h2>
      <AddressForm />
      <ShippingOptionForm />
      <CostsTable />
    </section>
  )
}
