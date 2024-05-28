import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../prisma";

export default class SalesController {
  static async list(req: NextApiRequest, res: NextApiResponse) {
    const sales = prisma.sales.findMany();
    res.json(sales);
  }
}
