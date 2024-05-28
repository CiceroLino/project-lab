import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../prisma";

export default class CustomerController {
  static async list(req: NextApiRequest, res: NextApiResponse) {
    const customers = prisma.customer.findMany();
    res.json(customers);
  }
}
