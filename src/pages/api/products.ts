import { NextApiRequest, NextApiResponse } from "next";
import { products } from "./db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { id, page = "1", limit = "30" } = req.query;

  if (typeof id === "string") {
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
  }

  // ตรวยสอบ page && limit
  const pageNumber = Math.max(Number(page), 1);
  const limitNumber = Math.max(Number(limit), 1);

  // เริ่มตำแหน่งข้อมูลจากหน้า page
  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = startIndex + limitNumber;

  const paginatedProducts = products.slice(startIndex, endIndex);
  return res.status(200).json({
    page: pageNumber,
    limit: limitNumber,
    total: products.length,
    totalPage: Math.ceil(products.length / limitNumber),
    data: paginatedProducts,
  });
}
