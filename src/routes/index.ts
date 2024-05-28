import { NextApiRequest, NextApiResponse } from "next";
import { NextConnect } from "next-connect";
import CustomerController from "@/api/customer.controller";
import ProductController from "@/api/product.controller";
import SalesController from "@/api/sales.controller";

export default function routes(
  api: NextConnect<NextApiRequest, NextApiResponse>
) {
  api.get("/", (req, res) => res.send("Api"));
  return api;
}
