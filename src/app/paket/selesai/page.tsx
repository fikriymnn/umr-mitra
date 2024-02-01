"use client";
import PackageTableCol from "@/components/PackageTableCol";
import PackageTableColDtl from "@/components/PackageTableColDtl";
import SideBar from "@/components/sideBar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Selesai() {
  const router = useRouter();
  const [paket, setPaket] = useState([]);
  let loading = false;

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
      getpaket(res.data.data._id);
    } catch (error: any) {
      console.log(error.response);
    }
  }

  async function getpaket(id: any) {
    const url = `${process.env.NEXT_PUBLIC_URL}/api/paket?id_mitra=${id}&status=non_aktif&skip=0&limit=10`;
    try {
      const res = await axios.get(url);

      setPaket(res.data.data.paket);
    } catch (error: any) {
      console.log(error.response);
    }
  }

  if ((loading = false)) {
    return <div>Loading</div>;
  }
  return (
    <div className="flex">
      <SideBar paket=" text-white bg-[#E3B02B]" />
      <div className="h-screen w-screen grey px-[28px] py-[20px] overflow-y-scroll">
        <p className="font-semibold text-[28px]">
          Daftar Paket Selesai &#40; {paket.length} &#41;
        </p>
        <div className="bg-white rounded-[10px] w-full mt-[20px] p-5">
          <div className="flex justify-between">
            <div className=" min-w-full py-3 pe-2 flex gap-3">
              <div className="flex gap-3 w-5/12 ">
                <input
                  type="text"
                  placeholder="Cari paket"
                  className="rounded-md bg-slate-200 h-full px-2 py-1 w-full"
                />
              </div>
              <div className="flex gap-3 w-7/12 justify-between">
                <div className="w-full text-[20px] font-semibold "></div>
                <div className="w-full  text-[20px] font-semibold "></div>
                <div className="w-[450px] flex gap-3"></div>
              </div>
            </div>
          </div>
          <div className="overflow-x-scroll">
            <div className="h-full min-w-full py-3 flex gap-3">
              <div className="flex gap-3 w-5/12 ">
                <div className="text-[20px] font-semibold w-[60px] ">No</div>
                <div className="text-[20px] font-semibold w-full ">
                  Nama Paket
                </div>
              </div>
              <div className="flex gap-3 w-7/12 justify-between">
                <div className="w-full text-[20px] font-semibold ">Harga</div>
                <div className="w-full  text-[20px] font-semibold ">
                  jumlah Jemaah
                </div>
                <div className="w-[450px]  flex gap-3"></div>
              </div>
            </div>
            <div className="max-h-[500px] overflow-y-scroll border-y-2 border-slate-400 py-3">
              {paket != null &&
                paket.map((data: any, i: number) => {
                  return (
                    <PackageTableCol
                      key={i}
                      id={data._id}
                      no={i + 1}
                      title={data.title}
                      price={data.price}
                      stock={data.sisa_kuota}
                      status={data.status}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selesai;
