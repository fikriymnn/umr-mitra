"use client";
import React, { useEffect, useState } from "react";
import SideBar from "@/components/sideBar";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { format } from "date-fns";

function Detail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [DetailPaket, setDetailPaket] = useState<any>(null);
  useEffect(() => {
    getDetailPaket(id);
  }, [id]);

  async function getDetailPaket(idd: any) {
    try {
      const res = await axios.get(`http://localhost:5000/api/paket/${idd}`);
      if (res.data.success == true) {
        setDetailPaket(res.data.data);

      }
    } catch (error: any) {
      console.log(error.response);
    }
  }
  const date = DetailPaket == null ? new Date() : new Date(DetailPaket.waktu_keberangkatan);
  // Format tanggal
  const WaktuKeberangkatan = format(date, "d MMM y");

  return (

    <div className="flex">
      <SideBar paket=" text-white bg-[#E3B02B]" />
      <div className="h-screen w-screen grey px-[28px] py-[20px] overflow-y-scroll">
        <p className="font-semibold text-[28px]">Detail Paket</p>
        <div className="bg-white rounded-[10px] w-4/6 mt-[20px] p-5">
          <p className="font-semibold text-[20px]">Detail</p>
          <div className="w-full py-2 grid grid-cols-4 gap-2 ">
            {
              DetailPaket == null ? <div></div> :
                DetailPaket.content_carousel.map((data: any, i: number) => {
                  return <img key={i} src={`http://localhost:5000/images/${data.img}`} alt="" className="bg-slate-200 h-20"></img>
                })
            }


          </div>
          <div className="flex w-full gap-10">
            <div className="py-3 w-full">
              <div className="py-1 ">
                <p className="text-[18px] font-medium">Nama Paket</p>
                <div className="relative w-full">
                  <p>{DetailPaket == null ? "" : DetailPaket.title}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
              <div className="py-1 ">
                <p className="text-[18px] font-medium">Kategori Paket</p>
                <div className="relative w-full">
                  <p>{DetailPaket == null ? "" : DetailPaket.category_paket}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
              <div className="py-1 ">
                <p className="text-[18px] font-medium">Jenis Keberangkatan</p>
                <div className="relative w-full">
                  <p>{DetailPaket == null ? "" : DetailPaket.jenis_keberangkatan}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
              <div className="py-1 mt-5">
                <p className="text-[18px] font-medium">Deskripsi Paket</p>
                <div className="relative w-full">
                  <p>
                    {DetailPaket == null ? "" : DetailPaket.description}
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-10">
            <div className="py-3 w-full">
              <div className="">
                <p className="text-[18px] font-medium">Pilihan Kamar</p>
                <div className="relative w-full">
                  <p>{DetailPaket == null ? "" : DetailPaket.pilihan_kamar}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[18px] font-medium">Tanggal Keberangkatan</p>
                <div className="relative w-full">
                  <p>{WaktuKeberangkatan}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[18px] font-medium">Maskapai Pesawat</p>
                <div className="relative w-full">
                  <p>{DetailPaket == null ? "" : DetailPaket.maskapai_penerbangan}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[18px] font-medium">Kota Keberangkatan</p>
                <div className="relative w-full">
                  <p>{DetailPaket == null ? "" : DetailPaket.kota_keberangkatan}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[18px] font-medium">Durasi Perjalanan</p>
                <div className="relative w-full">
                  <p>{DetailPaket == null ? "" : DetailPaket.durasi_perjalanan}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[18px] font-medium">Kelas Hotel</p>
                <div className="relative w-full">
                  <p>{DetailPaket == null ? "" : DetailPaket.rating_hotel + "/5"}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
            </div>
            <div className="py-3 w-full"></div>
          </div>
          <p className="font-semibold text-[20px] mt-5">Fasilitas</p>
          <div className="flex w-full gap-10">
            <div className="py-3 w-full">
              <div className="">
                <p className="text-[18px] font-medium">Detail Fasilitas</p>
                <div className="relative w-full">
                  <p>{DetailPaket == null ? "" : DetailPaket.fasilitas_umroh}</p>
                </div>
              </div>
            </div>
            <div className="py-3 w-full"></div>
          </div>
          <p className="font-semibold text-[20px] mt-5">Detail Hotel</p>

          {/* ARRAY HOTEL */}
          {
            DetailPaket == null ? <div></div> :
              DetailPaket.hotel.map((data: any, i: number) => {
                return (
                  <div key={i}>
                    <p className="pt-2 text-[41px] font-semibold">{i + 1}</p>
                    <div className="w-full py-2 grid grid-cols-4 gap-2 ">
                      {
                        data.content.map((data: any, ii: number) => {
                          return <img key={ii} src={`http://localhost:5000/images/${data.img}`} alt="" className="bg-slate-200 h-20"></img>
                        })
                      }


                    </div>
                    <div className="flex w-full gap-10">
                      <div className=" w-3/6">
                        <div className="">
                          <p className="text-[18px] font-medium">Kota</p>
                          <div className="relative w-full">
                            <p>{data.city}</p>
                            <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                          </div>
                          <div className="mt-5">
                            <p className="text-[18px] font-medium">Hotel</p>
                            <div className="relative w-full">
                              <p>{data.name}</p>
                              <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                            </div>
                          </div>
                          <div className="mt-5">
                            <p className="text-[18px] font-medium">Fasilitas</p>
                            <div className="w-full">
                              <div className="flex flex-col mt-1">

                                <p>{
                                  data.fasilitas.FreeWiFi == false ? "" : "Free Wifi"
                                }</p>

                                <p>{
                                  data.fasilitas.Disabilitas == false ? "" : "Disabilitas"
                                }</p>

                                <p>{
                                  data.fasilitas.TempatMakan == false ? "" : "Tempat Makan"
                                }</p>

                                <p>{
                                  data.fasilitas.PelayananKamar == false ? "" : "Pelayanan Kamar"
                                }</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
          }


          {/* END OF ARRAY HOTEL */}

          <p className="font-semibold text-[20px] mt-7">Jadwal Perjalanan</p>
          <div className="flex w-full gap-10">
            <div className="py-3 w-full">
              {/* AGENDA ARRAY */}
              {
                DetailPaket == null ? <div></div> :
                  DetailPaket.jadwal.map((data: any, i: number) => {
                    return (
                      <div key={i}>
                        <p className="text-[18px] font-medium">{data.hari}</p>
                        <div className="relative w-full">
                          <p>{data.agenda}</p>
                          <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                        </div>
                      </div>
                    )
                  })
              }



              {/* END OF AGENDA ARRAY */}
            </div>
            <div className="w-3/6"></div>
          </div>
          <p className="font-semibold text-[20px] mt-5">Syarat dan Ketentuan</p>
          <div className="flex w-full gap-10">
            <div className="py-3 w-full">
              <div className="">
                <p className="text-[18px] font-medium">
                  Detail Syarat dan Ketentuan
                </p>
                <div className="relative w-full">
                  <p>{DetailPaket == null ? "" : DetailPaket.syarat_ketentuan}</p>
                </div>
              </div>
            </div>
            <div className="py-3 w-full"></div>
          </div>
          <p className="font-semibold text-[20px] mt-5">Harga dan Kuota</p>
          <div className="flex w-full gap-10">
            <div className="py-3 w-full">
              <div>
                <p className="text-[18px] font-medium">Harga Paket</p>
                <div className="relative w-full">
                  <p>Rp {DetailPaket == null ? "" : DetailPaket.price}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
                <p className="text-[18px] font-medium mt-5">
                  Kuota Yang Disediakan
                </p>
                <div className="relative w-full ">
                  <p>{DetailPaket == null ? "" : DetailPaket.kuota}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
            </div>
            <div className="w-3/6"></div>
          </div>
          <div className="pt-5">
            <a className="w-full font-semibold text-xl rounded-md p-3 text-semibold text-white bg-[#E3B02B] hover:bg-[#b18a2a]">
              Edit Paket
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
