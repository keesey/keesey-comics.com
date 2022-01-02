import { Package } from "./Package";
export type Container = Package & Readonly<{
    maxCountForProductType: Readonly<Record<string, number>>;
}>;
