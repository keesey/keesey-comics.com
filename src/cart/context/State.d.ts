import { Container } from "../models/Container";
import { Order } from "../models/Order";
import { Product } from "../models/Product";
export type State = {
    containers: readonly Container[];
    order: Order;
    products: readonly Product[];
};
