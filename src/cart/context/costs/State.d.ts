import { Costs } from "~/cart/models/Costs";
import { Order } from "~/cart/models/Order";
export type State = {
    costs?: Costs;
    error?: Error;
    pending: boolean;
};
