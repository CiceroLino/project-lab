import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./prisma";

export default class ProductController {
  static async list(req: NextApiRequest, res: NextApiResponse) {
    const products = prisma.products.findMany();
    res.json(products);
  }
}
