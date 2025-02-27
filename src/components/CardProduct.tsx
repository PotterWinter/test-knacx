import { useEffect, useState } from "react";
import axios from "axios";
import { FixedSizeList as List, ListOnItemsRenderedProps } from "react-window"; // นำเข้า List และ ListOnItemsRenderedProps จาก react-window สำหรับการทำ virtual list
import { useRouter } from "next/router";

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  img101: string;
};

export default function CardProduct() {
  // ใช้ useState เพื่อสร้าง state สำหรับเก็บข้อมูลสินค้า, สถานะการโหลด, หน้าเพจปัจจุบัน, และความสูงของรายการ
  const [cardProducts, setCardProducts] = useState<Product[]>([]); // เก็บรายการสินค้าที่จะถูกแสดง
  console.log("totalCardProducts", cardProducts.length);
  const [loading, setLoading] = useState<boolean>(false); // เก็บสถานะการโหลดข้อมูล
  const [page, setPage] = useState<number>(1); // เก็บหมายเลขของหน้าเพจ
  const [listHeight, setListHeight] = useState<number>(600); // เก็บความสูงของรายการ
  const maxItems = 100000; // กำหนดจำนวนสูงสุดของสินค้าที่จะโหลด
  const router = useRouter();

  // useEffect(() => {
  //   // ดึงข้อมูลจาก localStorage
  //   const savedFormData = localStorage.getItem("formData");
  //   if (savedFormData) {
  //     setCardProducts(JSON.parse(savedFormData)); // แปลงเป็น JSON ก่อนใช้งาน
  //   }
  // }, []);

  // ใช้ useEffect เพื่อให้แน่ใจว่าเมื่อขนาดของหน้าจอเปลี่ยนแปลง ความสูงของรายการจะถูกปรับตาม
  useEffect(() => {
    if (typeof window !== "undefined") {
      setListHeight(window.innerHeight); // กำหนดความสูงเริ่มต้นของรายการให้เท่ากับความสูงของหน้าต่าง
      const handleResize = () => setListHeight(window.innerHeight); // ฟังก์ชันที่จะถูกเรียกเมื่อขนาดหน้าต่างเปลี่ยนแปลง
      window.addEventListener("resize", handleResize); // เพิ่ม event listener สำหรับการเปลี่ยนขนาดหน้าต่าง
      return () => window.removeEventListener("resize", handleResize); // ลบ event listener เมื่อ component ถูก unmount
    }
  }, []); // ดำเนินการแค่ครั้งเดียวเมื่อ component ถูก mount

  // ฟังก์ชัน fetchData สำหรับดึงข้อมูลสินค้า และบันทึกลง LocalStorage
  const fetchData = async (pageNumber: number) => {
    if (loading || cardProducts.length >= maxItems) return;

    setLoading(true);
    try {
      const savedFormData = localStorage.getItem("formData");
      let formData = [];

      // หากมีข้อมูลใน localStorage ให้นำมาจัดการ
      if (savedFormData) {
        formData = JSON.parse(savedFormData); // แปลงข้อมูล formData จาก localStorage
      }
      console.log("formData", formData);
      const response = await axios.get(`/api/products`);
      console.log("API Response:", response.data);

      const newProducts = response.data.data;

      // ตรวจสอบว่า newProducts หรือ formData มีข้อมูลใหม่ที่ยังไม่เคยโหลด
      const updatedProducts = [
        ...cardProducts, // รวมข้อมูลที่มีอยู่แล้ว
        ...newProducts, // ข้อมูลใหม่จาก API
        ...formData, // ข้อมูลจาก localStorage
      ];

      // ใช้ setCardProducts เพื่ออัปเดตข้อมูลใหม่
      setCardProducts(updatedProducts);
      // router.push("/backpage")
      // router.push(router.asPath); // ใช้ URL ปัจจุบัน
      // router.reload(); // รีเฟรชหน้าใหม่
      // router.push("/backpage");  // ไปที่หน้าอื่นก่อน
      // setTimeout(() => {
      //   router.push(router.asPath);  // กลับมาที่หน้าปัจจุบัน
      // }, 100); // ใช้ timeout เพื่อให้เวลาในการเปลี่ยนหน้า
    } catch (error) {
      console.log("Error fetching data:", error);
    }
    setLoading(false);
  };

  // ใช้ useEffect เพื่อเรียก fetchData เมื่อหน้าเพจมีการเปลี่ยนแปลง
  useEffect(() => {
    fetchData(page); // ดึงข้อมูลสินค้าในหน้าเพจที่กำหนด
  }, [page]); // เรียกใหม่เมื่อ page เปลี่ยนแปลง

  useEffect(() => {
    const refreshTime = localStorage.getItem("refreshTime");

    if (refreshTime === "0") {
      const timer = setTimeout(() => {
        router.push("/edit-copy");
      }, 1000); // ตั้งเวลา 1 วินาที (1000 มิลลิวินาที)
      localStorage.setItem("refreshTime", "1"); // เปลี่ยนค่าเป็น 1 เพื่อหยุดรีเฟรชรอบต่อไป
    }
  }, []);

  // useEffect(() => {
  //   const savedFormData = localStorage.getItem("formData");
  //   if (savedFormData) {
  //     router.push("/"); // ถ้ามีข้อมูลใน localStorage ให้ redirect ไปที่หน้า '/'
  //   }
  // }, []);

  // ฟังก์ชัน handleItemsRendered ใช้ตรวจสอบเมื่อรายการสินค้าถูกแสดงครบแล้ว
  const handleItemsRendered = ({
    visibleStopIndex,
  }: ListOnItemsRenderedProps) => {
    if (visibleStopIndex >= cardProducts.length - 1 && !loading) {
      console.log("Fetching more data..."); // เมื่อแสดงสินค้าครบแล้วให้โหลดข้อมูลเพิ่มเติม
      setPage((prevPage) => prevPage + 1); // เพิ่มหมายเลขหน้าเพื่อดึงข้อมูลหน้าใหม่
    }
  };

  // ฟังก์ชัน Row สำหรับการแสดงข้อมูลสินค้าทุกๆ รายการ
  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const item = cardProducts[index]; // ดึงข้อมูลสินค้าตาม index ที่ได้รับ
    if (!item) return <div style={style}>กำลังโหลด...</div>; // ถ้ายังไม่สามารถดึงข้อมูลได้แสดงข้อความ "กำลังโหลด..."

    return (
      <>
        <div
          key={item.id} // ใช้ id ของสินค้าเป็น key
          style={style} // ใช้ style ที่ถูกส่งมาเพื่อจัดตำแหน่ง
          className="rounded-lg overflow-hidden flex flex-col justify-center items-center p-2 mt-10 "
        >
          <div className="w-full h-full flex gap-5 flex-row border border-gray-400 p-5 rounded-lg max-w-[600px] ">
            <div className="w-60 rounded-lg overflow-hidden hover:scale-[102%] transition-all duration-200 cursor-pointer shadow-md flex items-center">
              <img
                src={item.img101}
                alt={`Product ${item.id}`}
                className="w-full "
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-col gap-5">
                <div className="max-w-[90px] sm:max-w-full overflow-hidden line-clamp-2">
                  {item.name}
                </div>
                <div>{item.price} ฿</div>
              </div>
              <div className="w-10 h-10 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col items-center justify-start w-full bg-red-500 max-h-screen overflow-hidden ">
      <div className="w-full h-full">
        <List
          style={{ margin: "0 auto" }}
          height={listHeight - 80} // กำหนดความสูงของรายการให้มีขนาด 90% ของความสูงหน้าจอ
          itemCount={cardProducts.length} // จำนวนสินค้าที่จะถูกแสดง
          itemSize={180} // ขนาดของแต่ละรายการ
          width={"100%"} // กำหนดความกว้างของรายการให้เต็มความกว้าง
          onItemsRendered={handleItemsRendered} // ฟังก์ชันที่จะถูกเรียกเมื่อแสดงรายการ
        >
          {Row}
          {/* // การใช้ Row เพื่อแสดงแต่ละรายการ */}
        </List>
        {loading && <div>กำลังโหลด...</div>}
        {/* // ถ้ายังโหลดข้อมูลไม่เสร็จจะมีข้อความ "กำลังโหลด..." */}
      </div>
    </div>
  );
}
