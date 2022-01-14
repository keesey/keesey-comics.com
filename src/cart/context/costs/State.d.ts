import { Costs } from "~/cart/models/Costs"
export type State = {
    costs?: Costs
    error?: Error
    pending: boolean
}
