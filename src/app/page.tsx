"use client";
import SideBar from "@/components/sideBar";
import Image from "next/image";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  let loading = false;

  useEffect(() => {
    getuser();
  });
  async function getuser() {
    loading = true;

    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/user`, {
        withCredentials: true,
      });
      if (res.data.success === true) {
        loading = false;
        router.push("/dashboard");
      } else {
        loading = false;
        router.push("/login");
      }
    } catch (error: any) {
      console.log(error.response);
    }
  }

  if ((loading = false)) {
    return <div>Loading</div>;
  }

  return <div className="flex"></div>;
}
