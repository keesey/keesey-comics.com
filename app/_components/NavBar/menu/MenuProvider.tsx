"use client"
import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useState,
} from "react"
export type MenuState = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
export const MenuContext = createContext<MenuState | undefined>(undefined)
export const MenuProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  )
}
