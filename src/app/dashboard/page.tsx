"use client";

import DashCardDoubleRow from "@/components/Dashboard/DashCardDoubleRow";
import DashCardTripleRow from "@/components/Dashboard/DashCardTripleRow";
import GridWrapper from "@/components/Dashboard/GridWrapper";
import SideBar from "@/components/sideBar";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Dashboard() {
  const router = useRouter();
  const [dataMitra, setDataMitra] = useState<any>(null);

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

      getMitras(res.data.data._id);
    } catch (error: any) {
      console.log(error.response);
    }
  }

  async function getMitras(id: any) {
    const url = `${process.env.NEXT_PUBLIC_URL}/api/mitra/${id}`;

    try {
      const res = await axios.get(url);

      setDataMitra(res.data.data.mitra);

      console.log(res.data.data);
    } catch (error: any) {
      console.log(error.response);
    }
  }

  // if (loading == false) {
  //   return <div>Loading</div>;
  // }

  return (
    <>
      <div className="flex h-screen">
        <SideBar dashboard=" text-white bg-[#E3B02B]" />

        <div className="min-h-screen w-screen grey px-[28px] overflow-y-scroll">
          <div className="flex items-center justify-start bg-white  my-[21px] w-full h-[254px] rounded-[10px_10px_10px_10px] shadow-xl">
            {dataMitra == null ? (
              <div className="w-[148px] h-[148px] ml-[67px] rounded-full bg-zinc-300"></div>
            ) : (
              <img
                src={dataMitra.foto_profil}
                alt="Profil"
                className="w-[148px] h-[148px] ml-[67px] rounded-full bg-zinc-300 bg-cover bg-center"
              />
            )}

            <div className="flex flex-col items-start justify-start ml-[38px]">
              {dataMitra == null ? (
                <div className="w-44 h-10 rounded-md bg-zinc-200 "></div>
              ) : (
                <p className="font-medium text-[40px] text-black">
                  {dataMitra.nama_mitra}
                </p>
              )}

              {dataMitra == null ? (
                <div className="w-32 h-7 rounded-md bg-zinc-200  mt-2"></div>
              ) : (
                <p className="font-medium text-medium text-black">
                  {dataMitra.nama_pt}
                </p>
              )}
            </div>
          </div>
          {/* grid content */}
          <GridWrapper>
            <DashCardTripleRow
              title={"Rating"}
              ratings={3.8}
              desc={"40 Penilaian"}
            />
            <DashCardDoubleRow title={"Order Berjalan"} value={"150"} />
            <DashCardDoubleRow title={"Order Selesai"} value={"34"} />
            <DashCardDoubleRow title={"Paket Aktif"} value={"9"} />
            <DashCardDoubleRow title={"Paket Selesai"} value={"15"} />
          </GridWrapper>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
