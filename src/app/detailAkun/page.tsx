"use client";
import SideBar from "@/components/sideBar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

function DetailAkun() {
  const router = useRouter();
  const [dataMitra, setDataMitra] = useState<any>(null);
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
      getdetailuser(res.data.data._id);
    } catch (error: any) {
      console.log(error.response);
    }
  }

  async function getdetailuser(id: any) {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/mitra/${id}`
      );
      if (res.data.success == true) {
        setDataMitra(res.data.data);
      }
      id = res.data.data._id;
    } catch (error: any) {
      console.log(error.response);
    }
  }

  if ((loading = false)) {
    return <div>Loading</div>;
  }

  return (
    <>
      <div className="flex">
        <SideBar detailAkun="text-white bg-[#E3B02B]" />
        <div className="h-screen w-screen grey px-[28px] py-[20px]  overflow-y-scroll">
          <div>

            <label className="text-black font-semibold text-[28px] ">
              Detail Mitra
            </label>
            <div className="flex ">
              <div className="flex flex-col bg-white w-2/6 h-[600px] shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4 mt-[20px]">
                <div className="flex flex-wrap justify-items-center justify-center">
                  {dataMitra == null ? (
                    <div className="shadow w-44 h-44 bg-zinc-300 rounded-full"></div>
                  ) : (
                    <img
                      src={dataMitra.foto_profil}
                      alt="Profil"
                      className="shadow w-44 h-44 bg-zinc-300 rounded-full "
                    />
                  )}
                </div>
                <div>

                  {dataMitra == null ? (
                    <div className="w-full h-7 rounded-md bg-zinc-200  mt-5" />
                  ) : (
                    <p className="flex justify-items-center justify-center mt-[20px] text-black text-2xl text-center font-semibold ">
                      {dataMitra.nama_mitra}
                    </p>
                  )
                  }

                </div>
              </div>

              <div className="flex flex-col bg-white w-full h-[600px] shadow-xl rounded-lg px-20 pt-12 pb-12 mt-[20px] ml-[29px] ">
                <div className="grid grid-cols-2">
                  <label className="grid w-60 h-7 text-base text-black  font-normal">
                    Nama Mitra
                  </label>
                  <div className="grid justify-end">
                    <button className="w-40 h-8 justify-items-end bg-amber-400 rounded-md text-center text-base text-white font-medium">
                      <Link
                        href={`/detailAkun/editprofile/${dataMitra == null ? "" : dataMitra._id
                          }`}
                      >
                        Perbarui Data
                      </Link>
                    </button>
                  </div>
                </div>
                <div>

                  {dataMitra == null ? (
                    <div className=" w-6/12 h-7 rounded-md bg-zinc-200" />
                  ) : (
                    <p className="w-full h-7 text-lg text-black  font-semibold">
                      {dataMitra.nama_mitra}
                    </p>
                  )
                  }
                </div>

                <div className="mt-[22px]">
                  <label className="w-full h-7 text-base text-black  font-normal">
                    Nama Perusahaan
                  </label>
                </div>
                <div>
                  {dataMitra == null ? (
                    <div className=" w-6/12 h-7 rounded-md bg-zinc-200"></div>
                  ) : (
                    <p className="w-full h-7 text-lg text-black  font-semibold">
                      {dataMitra.nama_pt}
                    </p>
                  )
                  }
                </div>

                <div className="mt-[22px]">
                  <label className="w-full h-7 text-base text-black  font-normal">
                    Nomor Izin
                  </label>
                </div>
                <div>

                  {dataMitra == null ? (
                    <div className=" w-6/12 h-7 rounded-md bg-zinc-200"></div>
                  ) : (
                    <p className="w-full h-7 text-lg text-black  font-semibold">
                      {dataMitra.no_izin_umroh}
                    </p>
                  )
                  }

                </div>
                <div className="mt-[22px]">
                  <label className="w-full h-7 text-base text-black  font-normal">
                    Lokasi
                  </label>
                </div>
                <div>
                  {dataMitra == null ? (
                    <div className=" w-6/12 h-7 rounded-md bg-zinc-200"></div>
                  ) : (
                    <p className="w-full h-7 text-lg text-black  font-semibold">
                      {dataMitra.location}
                    </p>
                  )
                  }
                </div>
                <div className="mt-[22px]">
                  <label className="w-full h-7 text-base text-black  font-normal">
                    Email
                  </label>
                </div>
                <div>

                  {dataMitra == null ? (
                    <div className=" w-6/12 h-7 rounded-md bg-zinc-200"></div>
                  ) : (
                    <p className="w-full h-7 text-lg text-black  font-semibold">
                      {dataMitra.email}
                    </p>
                  )
                  }

                </div>
                <div className="mt-[22px]">
                  <label className="w-full h-7 text-base text-black  font-normal">
                    Website
                  </label>
                </div>
                <div>

                  {dataMitra == null ? (
                    <div className=" w-6/12 h-7 rounded-md bg-zinc-200"></div>
                  ) : (
                    <p className="w-full h-7 text-lg text-black  font-semibold">
                      {dataMitra.website}
                    </p>
                  )
                  }

                </div>
                <div className="mt-[22px]">
                  <label className="w-full h-7 text-base text-black  font-normal">
                    Rating
                  </label>
                </div>
                <div>

                  {dataMitra == null ? (
                    <div className=" w-6/12 h-7 rounded-md bg-zinc-200"></div>
                  ) : (
                    <p className="w-full h-7 text-lg text-black  font-semibold">
                      {dataMitra.rating}/5
                    </p>
                  )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default DetailAkun;
