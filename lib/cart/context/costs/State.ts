import type { Costs } from "../../models/Costs"
export type State = {
  costs?: Costs
  error?: Error
  pending: boolean
}
