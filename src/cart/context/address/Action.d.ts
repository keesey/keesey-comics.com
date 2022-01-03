import { FSAWithPayload } from "flux-standard-action";
import { Address } from "~/cart/models/Address";
import { State } from "./State";
export type FieldValue<TKey extends keyof Address = keyof Address> = Readonly<{
    field: TKey,
    value: Address[TKey],
}>;
export type InitializeAction = FSAWithPayload<"INITIALIZE", State>;
export type SetValueAction = FSAWithPayload<"SET_VALUE", FieldValue>;
export type Action = InitializeAction | SetValueAction;
