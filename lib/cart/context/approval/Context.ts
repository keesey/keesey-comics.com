"use client"
import { createContext, type Dispatch } from "react"
import type { Action } from "./Action"
import type { State } from "./State"
export const Context = createContext<[State, Dispatch<Action>] | undefined>(
  undefined,
)
