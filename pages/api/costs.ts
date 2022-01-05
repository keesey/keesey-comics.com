import { NextApiHandler } from "next";
import calculateCosts from "~/cart/functions/calculateCosts";
import { Address } from "~/cart/models/Address";
import { Order } from "~/cart/models/Order";
const costs: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  try {
    const data: { order: Order; address: Address } = req.body;
    const costs = await calculateCosts(data.order, data.address);
    res.json(costs);
  } catch (e) {
    res.status(500).send(String(e))
  }
};
export default costs;
