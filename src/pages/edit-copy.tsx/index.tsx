import React, { useState } from "react";
import { usePagination } from "@/components/CustomHook/PaginationEdit";
import { useDarkMode } from "@/context/DarkModeContext";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ProductTable() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [popEdit, setPopEdit] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [products, setProducts] = useState<any>(null);
  console.log(products);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // ตั้งเวลาเพื่อเปลี่ยนเส้นทางหลังจาก 1 วินาที
    const timer = setTimeout(() => {
      router.push("/"); // เปลี่ยนเส้นทางไปหน้า "/"
    }, 1000); // ตั้งเวลา 1 วินาที (1000 มิลลิวินาที)

    // ล้างการตั้งเวลาเมื่อคอมโพเนนต์ถูก unmount
    return () => clearTimeout(timer);
  }, []); // ใช้ useEffect แบบที่ทำงานครั้งเดียวหลังจากคอมโพเนนต์ถูกแสดง

  const { data, loading, totalItems } = usePagination(
    currentPage,
    itemsPerPage
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  const handleShowPopup = async (id: number) => {
    setPopEdit(true);
    try {
      const response = await axios.get(`/api/products?id=${id}`);
      console.log("Response Data:", response.data);

      // ตรวจสอบว่า response.data เป็นอ็อบเจ็กต์ที่ต้องการเลยหรือไม่
      if (response.data) {
        setProducts(response.data); // อัปเดต state โดยตรงจาก response.data
        setPopEdit(true);
      } else {
        console.log("Invalid response structure:", response.data);
      }
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProducts((prev: any) => ({
      ...prev,
      [name]: value, // ปรับค่าใน products ตามชื่อของ input
    }));
  };

 

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center gap-10${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      ></div>
      <div className="min-w-screen min-h-screen flex flex-col justify-start items-center p-5">
        <table
          className={`border border-gray-300 rounded-md overflow-hidden shadow-lg w-full max-w-[1000px] mt-10 `}
        >
          <thead
            className={`${
              isDarkMode ? "bg-white text-black" : "bg-black  text-white"
            }`}
          >
            <tr className="border-gray-300">
              <th className="py-2 px-4 text-left text-sm font-semibold ">ID</th>
              <th className="py-2 px-4 text-left text-sm font-semibold">
                Name
              </th>
              <th className="py-2 px-4 text-left text-sm font-semibold">
                Stock
              </th>
              <th className="py-2 px-4 text-left text-sm font-semibold">
                Image
              </th>
              <th className="py-2 px-4 text-left text-sm font-semibold">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((product: any) => (
              <tr
                key={product.id}
                className="hover:bg-gray-50 hover:text-black cursor-pointer"
                onClick={() => {
                  setSelectedId(product.id);
                  handleShowPopup(product.id);
                }}
              >
                <td className="py-2 px-4 text-sm ">{product.id}</td>
                <td className="py-2 px-4 text-sm">{product.name}</td>
                <td className="py-2 px-4 text-sm">{product.stock}</td>
                <td className="py-2 px-4 text-sm">
                  <img
                    src={product.img101}
                    alt={product.name}
                    className="w-10 h-auto object-cover rounded-md"
                  />
                </td>
                <td className="py-2 px-4 text-sm">Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-between items-center w-full max-w-[1000px]">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`  px-4 py-2 rounded-md shadow-sm ${
              isDarkMode
                ? "bg-white text-black disabled:bg-gray-400"
                : "bg-black  text-white disabled:bg-gray-400"
            }`}
          >
            Previous
          </button>
          <span className="text-lg font-semibold">
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`  px-4 py-2 rounded-md shadow-sm ${
              isDarkMode
                ? "bg-white text-black disabled:bg-gray-400"
                : "bg-black  text-white disabled:bg-gray-400"
            }`}
          >
            Next
          </button>
        </div>
      </div>
      {popEdit && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 gap-10">
          <div
            className={`rounded-lg shadow-lg w-full max-w-[900px] h-full max-h-[400px] flex flex-col items-center justify-center 
            bg-white text-black gap-5`}
          >
            <section className="w-full flex flex-row justify-center items-start bg-white gap-5">
              <div className="flex flex-col gap-3 bg-white">
                <div className="text-black bg-white">
                  <p>Id</p>
                  <input
                    name="id"
                    // value={products ? products.id : ''}
                    readOnly
                    placeholder={products ? products.id : ""}
                    className={`border border-gray-400 rounded-md px-2 py-1 w-[350px] text-black`}
                    type="number"
                  />
                </div>
                <div className="text-black bg-white">
                  <p>Name</p>
                  <input
                    name="name"
                    value={products ? products.name : ""}
                    onChange={handleChange}
                    className={`border border-gray-400 rounded-md px-2 py-1 w-[350px] text-black`}
                    type="text"
                  />
                </div>
                <div className="text-black bg-white">
                  <p>Price</p>
                  <input
                    name="price"
                    value={products ? products.price : ""}
                    onChange={handleChange}
                    className={`border border-gray-400 rounded-md px-2 py-1 w-[350px] text-black`}
                    type="number"
                  />
                </div>
                <div className="text-black bg-white">
                  <p>Stock</p>
                  <input
                    name="stock"
                    value={products ? products.stock : ""}
                    onChange={handleChange}
                    className={`border border-gray-400 rounded-md px-2 py-1 w-[350px] text-black`}
                    type="number"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 bg-white">
                <div className="text-black bg-white">
                  <p>
                    Image Cover{" "}
                    <span className="text-xs text-gray-400"> image url</span>
                  </p>

                  <input
                    name="img101"
                    value={products ? products.img101 : ""}
                    onChange={handleChange}
                    className={`border border-gray-400 rounded-md px-2 py-1 w-[350px] text-black`}
                    type="text"
                  />
                </div>
                <div className="text-black bg-white">
                  <p>
                    Sub Image 01{" "}
                    <span className="text-xs text-gray-400"> image url</span>
                  </p>
                  <input
                    name="img102"
                    value={products ? products.img102 : ""}
                    onChange={handleChange}
                    className={`border border-gray-400 rounded-md px-2 py-1 w-[350px] text-black`}
                    type="text"
                  />
                </div>
                <div className="text-black bg-white">
                  <p>
                    Sub Image 02{" "}
                    <span className="text-xs text-gray-400"> image url</span>
                  </p>
                  <input
                    name="img103"
                    value={products ? products.img103 : ""}
                    onChange={handleChange}
                    className={`border border-gray-400 rounded-md px-2 py-1 w-[350px] text-black`}
                    type="text"
                  />
                </div>
                <div className="text-black bg-white">
                  <p>
                    Sub Image 03{" "}
                    <span className="text-xs text-gray-400"> image url</span>
                  </p>
                  <input
                    name="img104"
                    value={products ? products.img104 : ""}
                    onChange={handleChange}
                    className={`border border-gray-400 rounded-md px-2 py-1 w-[350px] text-black`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col h-full bg-white justify-start gap-3">
                <img
                  src={products ? products.img101 : ""}
                  alt=""
                  onMouseEnter={() => setPreviewImage(products.img101)}
                  className="h-[58px] w-auto object-cover rounded-sm cursor-pointer"
                />
                <img
                  src={products ? products.img102 : ""}
                  alt=""
                  onMouseEnter={() => setPreviewImage(products.img102)}
                  className="h-[58px] w-auto object-cover rounded-sm cursor-pointer"
                />
                <img
                  src={products ? products.img103 : ""}
                  alt=""
                  onMouseEnter={() => setPreviewImage(products.img103)}
                  className="h-[58px] w-auto object-cover rounded-sm cursor-pointer"
                />
                <img
                  src={products ? products.img104 : ""}
                  alt=""
                  onMouseEnter={() => setPreviewImage(products.img104)}
                  className="h-[58px] w-auto object-cover rounded-sm cursor-pointer"
                />
              </div>
            </section>
            <section className=" flex gap-5 pl-3 bg-white w-full justify-center flex-row">
              <button className="mt-4 p-2 px-10 bg-black text-white rounded transition-all hover:scale-105">
                Edit
              </button>
              <button
                onClick={() => setPopEdit(false)}
                className="mt-4 p-2 px-10 bg-black text-white rounded transition-all hover:scale-105"
              >
                Close
              </button>
            </section>
          </div>

          <img
            src={previewImage ? previewImage : products ? products.img101 : ""}
            alt=""
            className={`w-[400px] h-auto object-cover rounded-md ${
              !products ? "bg-gray-400" : ""
            }`}
          />
        </div>
      )}
    </>
  );
}
