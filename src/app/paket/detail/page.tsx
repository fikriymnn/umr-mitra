"use client";
import React from "react";
import SideBar from "@/components/sideBar";

function detail() {
  return (
    <div className="flex">
      <SideBar paket=" text-white bg-[#E3B02B]" />
      <div className="h-screen w-screen grey px-[28px] py-[20px] overflow-y-scroll">
        <p className="font-semibold text-[28px]">Detail Paket</p>
        <div className="bg-white rounded-[10px] w-4/6 mt-[20px] p-5">
          <p className="font-semibold text-[20px]">Detail</p>
          <div className="w-full py-2 grid grid-cols-4 gap-2 ">
            <img src="" alt="" className="bg-slate-200 h-20"></img>
            <img src="" alt="" className="bg-slate-200 h-20"></img>
            <img src="" alt="" className="bg-slate-200 h-20"></img>
            <img src="" alt="" className="bg-slate-200 h-20"></img>
          </div>
          <div className="flex w-full gap-10">
            <div className="py-3 w-full">
              <div className="py-1 ">
                <p className="text-[18px] font-medium">Nama Paket</p>
                <div className="relative w-full">
                  <p>Paket Umroh Plus kereta Cepat 10 Hari</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
              <div className="py-1 ">
                <p className="text-[18px] font-medium">Kategori Paket</p>
                <div className="relative w-full">
                  <p>Kategori Paket</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
              <div className="py-1 ">
                <p className="text-[18px] font-medium">Jenis Keberangkatan</p>
                <div className="relative w-full">
                  <p>Jenis Keberangkatan</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
              <div className="py-1 mt-5">
                <p className="text-[18px] font-medium">Deskripsi Paket</p>
                <div className="relative w-full">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
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
                  <p>Satu Kamar 4 Orang</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[18px] font-medium">Tanggal Keberangkatan</p>
                <div className="relative w-full">
                  <p>3 Agtember 2093</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[18px] font-medium">Maskapai Pesawat</p>
                <div className="relative w-full">
                  <p>Garuda Indonesia</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[18px] font-medium">Kota Keberangkatan</p>
                <div className="relative w-full">
                  <p>Bandung</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[18px] font-medium">Durasi Perjalanan</p>
                <div className="relative w-full">
                  <p>9 Hari</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[18px] font-medium">Kelas Hotel</p>
                <div className="relative w-full">
                  <p>5/5</p>
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
                  <p>Isi Detail Fasilitas</p>
                </div>
              </div>
            </div>
            <div className="py-3 w-full"></div>
          </div>
          <p className="font-semibold text-[20px] mt-5">Detail Hotel</p>

          {/* ARRAY HOTEL */}
          <div>
            <p className="pt-2 text-[41px] font-semibold">1</p>
            <div className="w-full py-2 grid grid-cols-4 gap-2 ">
              <img src="" alt="" className="bg-slate-200 h-20"></img>
              <img src="" alt="" className="bg-slate-200 h-20"></img>
              <img src="" alt="" className="bg-slate-200 h-20"></img>
              <img src="" alt="" className="bg-slate-200 h-20"></img>
            </div>
            <div className="flex w-full gap-10">
              <div className=" w-3/6">
                <div className="">
                  <p className="text-[18px] font-medium">Kota</p>
                  <div className="relative w-full">
                    <p>Makkah</p>
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                  </div>
                  <div className="mt-5">
                    <p className="text-[18px] font-medium">Hotel</p>
                    <div className="relative w-full">
                      <p>Rayyana Hotel</p>
                      <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="text-[18px] font-medium">Fasilitas</p>
                    <div className="w-full">
                      <div className="flex flex-col mt-1">
                        <p>Free WiFi</p>

                        <p>Disabilitas</p>

                        <p>Tempat Makan</p>

                        <p>Pelayanan Kamar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* END OF ARRAY HOTEL */}

          <p className="font-semibold text-[20px] mt-7">Jadwal Perjalanan</p>
          <div className="flex w-full gap-10">
            <div className="py-3 w-full">
              {/* AGENDA ARRAY */}

              <div>
                <p className="text-[18px] font-medium">Hari 1</p>
                <div className="relative w-full">
                  <p>Agenda Hari 1</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
              </div>

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
                  <p>Syarat dan Ketentuan</p>
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
                  <p>Rp 300.000.000</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                </div>
                <p className="text-[18px] font-medium mt-5">
                  Kuota Yang Disediakan
                </p>
                <div className="relative w-full ">
                  <p>78</p>
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

export default detail;
