import { NextApiRequest, NextApiResponse } from "next";
import { Products } from "./db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { id } = req.query;

    if (typeof id === "string") {
      const product = Products.find((p) => p.id === Number(id));

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json(product);
    }

    // ถ้าหากไม่มีการระบุ id ให้ส่งข้อมูลทั้งหมด
    return res.status(200).json({
      total: Products.length,
      data: Products, // ส่งข้อมูลทั้งหมด
    });
  }

  if (req.method === "POST") {
    const { id, name, price, stock, img101, img102, img103, img104 } = req.body;

    if (!name || !price || !stock || !img101 || !img102 || !img103 || !img104) {
      return res.status(400).json({ message: "Incomplete information filled" });
    }

    const newProduct = {
      id,
      name,
      price,
      stock,
      img101,
      img102,
      img103,
      img104,
    };

    Products.push(newProduct);
    return res.status(201).json(newProduct);
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}
