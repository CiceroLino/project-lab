import { prisma } from "@lib/prisma";
import { products } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

interface ProductListResponse {
  products: products[];
  totalProducts: number;
  totalPages: number;
  currentPage: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductListResponse | { error: string }>
) {
  if (req.method === "GET") {
    return list(req, res);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function list(
  req: NextApiRequest,
  res: NextApiResponse<ProductListResponse>
) {
  const { page = "1", pageSize = "10" } = req.query;
  const pageNumber = parseInt(page as string);
  const pageSizeNumber = parseInt(pageSize as string);

  const products = await prisma.products.findMany({
    skip: (pageNumber - 1) * pageSizeNumber,
    take: pageSizeNumber,
  });

  const totalProducts = await prisma.products.count();

  res.json({
    products,
    totalProducts,
    totalPages: Math.ceil(totalProducts / pageSizeNumber),
    currentPage: pageNumber,
  });
}
