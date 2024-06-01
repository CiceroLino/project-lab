import { prisma } from "@lib/prisma";
import { sales } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

interface SalesListResponse {
  sales: sales[];
  totalsales: number;
  totalPages: number;
  currentPage: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SalesListResponse | { error: string }>
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
  res: NextApiResponse<SalesListResponse>
) {
  const { page = "1", pageSize = "10" } = req.query;
  const pageNumber = parseInt(page as string);
  const pageSizeNumber = parseInt(pageSize as string);

  const sales = await prisma.sales.findMany({
    skip: (pageNumber - 1) * pageSizeNumber,
    take: pageSizeNumber,
  });

  const totalsales = await prisma.sales.count();

  res.json({
    sales,
    totalsales,
    totalPages: Math.ceil(totalsales / pageSizeNumber),
    currentPage: pageNumber,
  });
}
