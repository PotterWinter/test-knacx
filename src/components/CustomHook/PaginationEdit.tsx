// usePagination.tsx (Custom Hook)
import { useState, useEffect } from "react";
import axios from "axios";

// กำหนด interface สำหรับข้อมูลสินค้าที่ดึงมา
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  img101: string;
  img102: string;
  img103: string;
  img104: string;
}

export function usePagination(page: number, itemsPerPage: number) {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/edit", {
          params: {
            page,
            limit: itemsPerPage,
          },
        });
        // const response = await axios.get(`/api/edit?page=${page}&limit=10`);
        setData(response.data.data); // ดึงข้อมูลจาก field 'data'
        console.log("response.data.data", response.data.data);
        setTotalItems(Number(response.data.total)); // จำนวนข้อมูลทั้งหมด
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, itemsPerPage]); // เมื่อ page หรือ itemsPerPage เปลี่ยนให้ดึงข้อมูลใหม่

  return { data, loading, totalItems };
}
