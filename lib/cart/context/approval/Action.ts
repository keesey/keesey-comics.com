import type { FSAWithPayload } from "flux-standard-action"
import type { State } from "./State"
export type InitializeAction = FSAWithPayload<"INITIALIZE", State>
export type Action = InitializeAction
