import Link from "next/link"
import { FaCartShopping } from "react-icons/fa6"
import { Count } from "./Count"
export const CartButton = () => (
  <Link href="/cart" className="group relative">
    <button className="ml-4 cursor-pointer" aria-label="Cart">
      <FaCartShopping className="h-6 w-6 text-gray-700 transition-transform group-hover:scale-120 dark:text-gray-200" />
    </button>
    <Count />
  </Link>
)
