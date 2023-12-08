"use client";

import DashCardDoubleRow from "@/components/Dashboard/DashCardDoubleRow";
import DashCardTripleRow from "@/components/Dashboard/DashCardTripleRow";
import GridWrapper from "@/components/Dashboard/GridWrapper";
import SideBar from "@/components/sideBar";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [dataMitra, setDataMitra] = useState([]);
  let id: any = "";
  useEffect(() => {
    getuser();
  });

  async function getuser() {
    try {
      const res = await axios.get("http://localhost:5000/api/user", {
        withCredentials: true,
      });
      if (res.data.success == true) {
        console.log(res.data.data._id);
      }
      id = res.data.data._id;
    } catch (error: any) {
      console.log(error.response);
    }
  }
  return (
    <div className="flex h-screen">
      <SideBar dashboard="ps-3 text-white bg-[#E3B02B]" />
      <div className="min-h-screen w-screen yellow px-[28px] overflow-y-scroll">
        {/* top content */}
        <div className="flex items-center justify-start bg-white  my-[21px] w-full h-[254px] rounded-[10px_10px_10px_10px] shadow-xl">
          <div
            className=" w-[148px] h-[148px] ml-[67px] rounded-full bg-black bg-cover bg-center"
            style={{ backgroundImage: `url(profil.jpeg)` }}
          ></div>
          <div className="flex flex-col items-start justify-start ml-[38px]">
            <p className="font-medium text-[40px] text-black">
              Travel Keren Dongs
            </p>
            <p className="font-medium text-medium text-black">
              PT.Travel Keren Dongs Indonesia
            </p>
          </div>
        </div>
        {/* grid content */}
        <GridWrapper>
          <DashCardDoubleRow title={"Paket Saya"} value={"9"} />
          <DashCardTripleRow
            title={"Rating"}
            ratings={3.8}
            desc={"40 Penilaian"}
          />
          <DashCardDoubleRow title={"Order Berjalan"} value={"150"} />
          <DashCardDoubleRow title={"Order Selesai"} value={"34"} />
          <DashCardDoubleRow title={"Order Gagal"} value={"1"} />
        </GridWrapper>
      </div>
    </div>
  );
}

export default Dashboard;
