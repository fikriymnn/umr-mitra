"use client";
import ContentTableOrder from "@/components/order/contentTable";
import SideBar from "@/components/sideBar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Order() {
  const router = useRouter();
  const [Order, setOrder] = useState<any>(null);
  const [cari, setCari] = useState<any>(null);
  const [IdMitra, setIdMitra] = useState<any>("");

  useEffect(() => {
    getuser();
  }, []);

  async function getuser() {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/user`, {
        withCredentials: true,
      });
      if (res.data.success == false) {
        router.push("/login");
      }
      setIdMitra(res.data.data._id)
      getOrder(res.data.data._id);
    } catch (error: any) {
      console.log(error.response);
    }
  }

  async function getOrder(id: any) {
    const url = `${process.env.NEXT_PUBLIC_URL}/api/order?id_mitra=${id}&skip=0&limit=100`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });

      setOrder(res.data.data);
    } catch (error: any) {
      console.log(error.response);
    }
  }
  async function searchOrder(id: any) {
    const url = `${process.env.NEXT_PUBLIC_URL}/api/order?id_mitra=${id}&skip=0&limit=100`;
    try {
      const res = await axios.get(url, {
        params: {
          nama_lengkap: cari
        },
        withCredentials: true,
      })

      setOrder(res.data.data);
    } catch (error: any) {
      console.log(error.response);
    }
  }
  return (
    <div className="flex ">
      <SideBar order=" text-white bg-[#E3B02B]" />
      <div className="h-screen w-screen grey px-[28px] py-[20px] overflow-y-scroll">
        <p className="font-semibold text-[28px]">
          Daftar Order Berjalan &#40; {Order == null ? "" : Order.length} &#41;
        </p>
        <div className="bg-white rounded-[10px] w-full mt-[20px] p-5">
          <div className="relative pt-3 flex gap-3 w-6/12">
            <input
              type="text"
              className="pl-10 pr-4 py-1 border rounded-md  text-black bg-slate-200 h-8 px-2  w-full"
              placeholder="Cari Order"
              onChange={(e) => setCari(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 pt-[10px] flex items-center pointer-events-none">
              <svg
                width="14"
                height="14"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7593 10.9907L9.74977 8.99734C10.5298 8.02473 10.9076 6.79021 10.8054 5.54762C10.7032 4.30504 10.1288 3.14884 9.20026 2.31677C8.27176 1.48469 7.05974 1.03999 5.81343 1.07409C4.56712 1.1082 3.38124 1.61852 2.49963 2.50012C1.61803 3.38173 1.10771 4.56761 1.0736 5.81392C1.0395 7.06023 1.48421 8.27225 2.31628 9.20074C3.14836 10.1292 4.30455 10.7037 5.54714 10.8059C6.78972 10.9081 8.02424 10.5303 8.99685 9.75025L10.9902 11.7436C11.0405 11.7944 11.1004 11.8347 11.1665 11.8622C11.2325 11.8897 11.3033 11.9038 11.3748 11.9038C11.4463 11.9038 11.5171 11.8897 11.5831 11.8622C11.6491 11.8347 11.709 11.7944 11.7593 11.7436C11.857 11.6426 11.9116 11.5076 11.9116 11.3671C11.9116 11.2267 11.857 11.0917 11.7593 10.9907ZM5.9581 9.75025C5.20818 9.75025 4.4751 9.52788 3.85156 9.11124C3.22802 8.69461 2.74204 8.10243 2.45506 7.4096C2.16807 6.71676 2.09299 5.95438 2.23929 5.21887C2.38559 4.48336 2.74671 3.80775 3.27699 3.27747C3.80726 2.7472 4.48287 2.38608 5.21838 2.23978C5.95389 2.09347 6.71627 2.16856 7.40911 2.45554C8.10194 2.74253 8.69412 3.22851 9.11075 3.85205C9.52739 4.47559 9.74977 5.20867 9.74977 5.95859C9.74977 6.9642 9.35029 7.92862 8.63921 8.6397C7.92814 9.35078 6.96371 9.75025 5.9581 9.75025Z"
                  fill="#717171"
                />
              </svg>
            </div>
            <button className="bg-slate-200 px-2 py-1 font-semibold rounded-md"
              onClick={() => searchOrder(IdMitra)}>
              Search
            </button>
          </div>
          <div className="flex justify-between">
            <div className=" min-w-full pt-3 pe-2 flex gap-3">
              <div className="flex gap-3 w-7/12 justify-between">
                <div className="w-full text-[20px] font-semibold "></div>
                <div className="w-full  text-[20px] font-semibold "></div>
                <div className="w-[820px] flex gap-3">
                  {/* <button className="hover:scale-110 duration-100 yellow w-full text-white px-5 py-1 rounded-md">
                    Status
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-scroll">
            <div className="h-full min-w-full py-3 flex gap-3">
              <div className="flex gap-3 w-full ">
                <div className="text-[20px] font-semibold w-[60px] ">No</div>
                <div className="text-[20px] font-semibold w-8/12 ">
                  Nama Pemesan
                </div>
                <div className="w-4/12 text-[20px] font-semibold ">Jumlah</div>
                <div className="w-full  text-[20px] font-semibold ">Paket</div>
                <div className="w-9/12  flex gap-3 text-[20px] font-semibold">
                  Status
                </div>
              </div>
            </div>
            <div className="max-h-[500px] overflow-y-scroll border-y-2 border-slate-400 py-3">
              {Order == null ? (
                <>
                  <div>
                    <div className="w-full h-10 bg-slate-300 rounded-md"></div>
                  </div>
                </>
              ) : (
                Order.map((data: any, i: number) => {
                  return (
                    <ContentTableOrder
                      key={i}
                      id={data._id}
                      no={i + 1}
                      name={data.nama_lengkap}
                      jumlah={data.jamaah.length}
                      paket={data.paket[0].title}
                      status={data.status}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
