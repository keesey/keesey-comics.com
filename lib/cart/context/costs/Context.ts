"use client"
import { createContext } from "react"
import type { State } from "./State"
export const Context = createContext<State | undefined>(undefined)
