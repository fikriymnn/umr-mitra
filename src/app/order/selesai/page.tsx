"use client";
import ContentTableFinished from "@/components/order/contentTableFinished";
import SideBar from "@/components/sideBar";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function OrderSelesai() {
  const router = useRouter();
  const [Order, setOrder] = useState<any>(null);

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
      getOrder(res.data.data._id);
    } catch (error: any) {
      console.log(error.response);
    }
  }

  async function getOrder(id: any) {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/order?id_mitra=${id}&status=pembayaran selesai&skip=0&limit=100`,
        {
          withCredentials: true,
        }
      );

      setOrder(res.data.data);
      console.log(res.data.data);
    } catch (error: any) {
      console.log(error.response);
    }
  }


  return (
    <div className="flex ">
      <SideBar order=" text-white bg-[#E3B02B]" />
      <div className="h-screen w-screen grey px-[28px] py-[20px] overflow-y-scroll">
        <p className="font-semibold text-[28px]">
          Daftar Order Selesai &#40; {Order == null ? "" : Order.length} &#41;
        </p>
        <div className="bg-white rounded-[10px] w-full mt-[20px] p-5">
          <div className="flex justify-between">
            <div className=" min-w-full py-3 flex gap-3">
              <div className="flex gap-3 w-5/12 ">
                <input
                  type="text"
                  placeholder="Cari Pemesan"
                  className="rounded-md bg-slate-200 h-full px-2 py-1 w-full"
                />
              </div>
              <div className="flex gap-3 w-7/12 justify-between">
                <div className="w-full text-[20px] font-semibold "></div>
                <div className="w-full  text-[20px] font-semibold "></div>
                <div className="w-[850px] flex gap-3">
                  {/* <button className="hover:scale-110 duration-100 yellow w-full text-white px-5 py-1 rounded-md">
                                        Status
                                    </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-scroll">
            <div className="h-full min-w-full py-3 flex gap-3">
              <div className="flex gap-3 w-5/12 ">
                <div className="text-[20px] font-semibold w-[60px] ">No</div>
                <div className="text-[20px] font-semibold w-full">
                  Nama Pemesan
                </div>
                <div className="w-5/12 text-[20px] font-semibold ">Jumlah</div>
              </div>
              <div className="flex gap-3 w-8/12 justify-between">
                <div className="w-full  text-[20px] font-semibold ">Paket</div>
                <div className="w-[450px]  flex gap-3 text-[20px] font-semibold">
                  Detail
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
                    <ContentTableFinished
                      key={i}
                      id={data.order._id}
                      no={i + 1}
                      name={data.order.nama_lengkap}
                      jumlah={data.order.jamaah.length}
                      paket={data.paket.title}
                      status={data.order.status}
                    />
                  );
                }
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSelesai;
