import { calculateCosts } from "@/lib/cart/functions/calculateCosts"
import type { Address } from "@/lib/cart/models/Address"
import type { Order } from "@/lib/cart/models/Order"
import { NextRequest, NextResponse } from "next/server"
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const data: { address: Address; order: Order } = await req.json()
    const costs = await calculateCosts(data.order, data.address)
    return NextResponse.json(costs)
  } catch (e) {
    console.error(e)
    return NextResponse.json(null, { status: 500 })
  }
}
