import { State } from "./State";
export type InitializeAction = FSAWithPayload<"INITIALIZE", State>;
export type Action = InitializeAction;
