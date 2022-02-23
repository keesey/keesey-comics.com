import { NextApiHandler } from "next"
import calculateCosts from "~/cart/functions/calculateCosts"
import { Address } from "~/cart/models/Address"
import { Costs } from "~/cart/models/Costs"
import { Order } from "~/cart/models/Order"
const costs: NextApiHandler<Costs | string | void> = async (req, res) => {
    if (req.method !== "POST") {
        res.status(405)
    } else {
        try {
            const data: { order: Order; address: Address } = req.body
            const costs = await calculateCosts(data.order, data.address)
            res.json(costs)
        } catch (e) {
            res.status(500).send(String(e))
        }
    }
}
export default costs
