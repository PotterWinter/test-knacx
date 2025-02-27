import React, { useEffect, useState } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import axios from "axios";
import { useRouter } from "next/router";

export default function CreateProduct() {
  const { isDarkMode } = useDarkMode();
  const router = useRouter();

  // State สำหรับเก็บค่าฟอร์ม
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    price: "",
    stock: "",
    img101: "",
    img102: "",
    img103: "",
    img104: "",
  });

  // save data to local storage
  // useEffect(() => {
  //   if (formData) {
  //     localStorage.setItem("formData", JSON.stringify(formData));
  //   }
  // }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ดึงข้อมูลจาก localStorage
    const savedFormData = localStorage.getItem("formData");

    // ถ้า localStorage ไม่มีข้อมูล หรือข้อมูลไม่เป็น array ก็ให้ตั้งค่าเป็น array ว่างๆ
    let formDataArray = [];

    if (savedFormData) {
      try {
        // ถ้ามีข้อมูลใน localStorage ให้แปลงเป็น array
        formDataArray = JSON.parse(savedFormData);

        // ตรวจสอบว่าเป็น array จริงหรือไม่
        if (!Array.isArray(formDataArray)) {
          formDataArray = []; // ถ้าไม่ใช่ array ให้ตั้งเป็น array ว่างๆ
        }
      } catch (error) {
        // ถ้าเกิดข้อผิดพลาดในการแปลงข้อมูล ให้ตั้งเป็น array ว่างๆ
        formDataArray = [];
      }
    }

    // สร้างข้อมูลใหม่ที่จะเพิ่มลงใน array
    const newProduct = {
      id: Date.now(),
      name: formData.name,
      price: formData.price,
      stock: formData.stock,
      img101: formData.img101,
      img102: formData.img102,
      img103: formData.img103,
      img104: formData.img104,
    };

    // เพิ่มข้อมูลใหม่ลงใน array
    formDataArray.push(newProduct);

    try {
      await axios.post("/api/products", formData);
      // บันทึกข้อมูลลง localStorage เสร็จแล้ว
      localStorage.setItem("formData", JSON.stringify(formDataArray));
      // รีเซ็ต refreshTime เป็น 0 เพื่อให้รีเฟรชหน้าใหม่
      localStorage.setItem("refreshTime", "0");

      alert("Product created successfully!");
      router.push("/");

      localStorage.setItem("testKey", "Hello World");
      console.log(localStorage.getItem("testKey")); //"Hello World"
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to create product. Please try again.");
    }
  };

  return (
    <form
      className="min-w-screen min-h-screen flex flex-col justify-start items-center mt-12 gap-5"
      onSubmit={handleSubmit}
    >
      <div
        className={`flex flex-col gap-2 border border-gray-400 p-4 pb-6 rounded-lg shadow-md${
          isDarkMode ? "border border-white" : "border border-black"
        }`}
      >
        {/* Name */}
        <div className="flex flex-col gap-1">
          <p
            className={`text-xl ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Name
          </p>
          <div className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-2 py-1 w-[400px] bg-white text-black"
              type="text"
            />
          </div>
        </div>

        {/* Price */}
        <div className="flex flex-col gap-1">
          <p
            className={`text-xl ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Price
          </p>
          <div className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-2 py-1 w-[400px] bg-white text-black"
              type="number"
            />
          </div>
        </div>

        {/* Stock */}
        <div className="flex flex-col gap-1">
          <p
            className={`text-xl ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Stock
          </p>
          <div className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
            <input
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-2 py-1 w-[400px] bg-white text-black"
              type="number"
            />
          </div>
        </div>

        {/* Image Cover */}
        <div className="flex flex-col gap-1">
          <p
            className={`text-xl ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Image Cover <span className="text-xs text-gray-400">image url</span>
          </p>
          <div className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
            <input
              name="img101"
              value={formData.img101}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-2 py-1 w-[400px] bg-white text-black"
              type="text"
            />
          </div>
        </div>

        {/* Sub Image 01 */}
        <div className="flex flex-col gap-1">
          <p
            className={`text-xl ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Sub Image 01{" "}
            <span className="text-xs text-gray-400">image url</span>
          </p>
          <div className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
            <input
              name="img102"
              value={formData.img102}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-2 py-1 w-[400px] bg-white text-black"
              type="text"
            />
          </div>
        </div>

        {/* Sub Image 02 */}
        <div className="flex flex-col gap-1">
          <p
            className={`text-xl ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Sub Image 02{" "}
            <span className="text-xs text-gray-400">image url</span>
          </p>
          <div className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
            <input
              name="img103"
              value={formData.img103}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-2 py-1 w-[400px] bg-white text-black"
              type="text"
            />
          </div>
        </div>

        {/* Sub Image 03 */}
        <div className="flex flex-col gap-1">
          <p
            className={`text-xl ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Sub Image 03{" "}
            <span className="text-xs text-gray-400">image url</span>
          </p>
          <div className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
            <input
              name="img104"
              value={formData.img104}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-2 py-1 w-[400px] bg-white text-black"
              type="text"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className={`px-4 py-2 border rounded-md transition-all duration-300 hover:scale-105 ${
          isDarkMode ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        Create
      </button>
    </form>
  );
}
