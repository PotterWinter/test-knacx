import { NextApiRequest, NextApiResponse } from "next";
import { Products } from "./db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { page = 1, limit = 10 } = req.query;

    // ดึงข้อมูลจาก localStorage
    // const localProducts = JSON.parse(localStorage.getItem("formData") || "[]");

    // คำนวณข้อมูลที่จะแสดงตามหน้า
    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const startIndex = (pageNumber - 1) * limitNumber;
    const endIndex = startIndex + limitNumber;

    // รวมข้อมูลจาก localStorage กับข้อมูลจากฐานข้อมูล
    // const combinedProducts = [...Products, ...localProducts];

    // คำนวณข้อมูลที่จะแสดงตามหน้าที่กำหนด
    const paginatedProducts = Products.slice(startIndex, endIndex);

    // ตรวจสอบจำนวนหน้าทั้งหมด
    const totalPages = Math.ceil(Products.length / limitNumber);

    return res.status(200).json({
      total: Products.length,
      totalPages,
      currentPage: pageNumber,
      data: paginatedProducts, // ส่งข้อมูลตามหน้าที่เลือก
    });
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
