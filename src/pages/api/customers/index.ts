import { prisma } from "@lib/prisma";
import { customers } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

interface CustomersListResponse {
  customers: customers[];
  totalcustomers: number;
  totalPages: number;
  currentPage: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CustomersListResponse | { error: string }>
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
  res: NextApiResponse<CustomersListResponse>
) {
  const { page = "1", pageSize = "10" } = req.query;
  const pageNumber = parseInt(page as string);
  const pageSizeNumber = parseInt(pageSize as string);

  const customers = await prisma.customers.findMany({
    skip: (pageNumber - 1) * pageSizeNumber,
    take: pageSizeNumber,
  });

  const totalcustomers = await prisma.customers.count();

  res.json({
    customers,
    totalcustomers,
    totalPages: Math.ceil(totalcustomers / pageSizeNumber),
    currentPage: pageNumber,
  });
}
