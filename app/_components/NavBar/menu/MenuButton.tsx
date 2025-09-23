"use client"
import { useContext } from "react"
import { IoMdClose } from "react-icons/io"
import { IoMenu } from "react-icons/io5"
import { MenuContext } from "./MenuProvider"
export const MenuButton = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext) ?? {}
  return (
    <div className="space-left-2 flex items-center md:hidden">
      <button
        aria-label="Menu"
        onClick={setIsOpen ? () => setIsOpen(isOpen => !isOpen) : undefined}
      >
        {isOpen ? (
          <IoMdClose className="size-6" />
        ) : (
          <IoMenu className="size-6" />
        )}
      </button>
    </div>
  )
}
