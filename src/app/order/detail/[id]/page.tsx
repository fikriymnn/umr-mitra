"use client";
import React, { useEffect, useState } from "react";
import SideBar from "@/components/sideBar";
import Image from "next/image";
import axios from "axios";
import Order from "../../page";
import { format } from "date-fns";

function Detail({ params }: { params: any }) {
  const [DetailOrder, setDetailOrder] = useState<any>(null);

  useEffect(() => {
    getDetailPaket(params.id);
  }, [params.id]);

  async function getDetailPaket(idd: any) {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/order/${idd}`,
        {
          withCredentials: true,
        }
      );
      if (res.data.success == true) {
        console.log(res.data.data);
        setDetailOrder(res.data.data);
      }
    } catch (error: any) {
      console.log(error.response);
    }
  }

  if (DetailOrder == null) {
    return <div>Loading</div>;
  }
  const date =
    DetailOrder.paket.waktu_keberangkatan == null
      ? new Date()
      : new Date(DetailOrder.paket.waktu_keberangkatan);
  // Format tanggal
  const WaktuKeberangkatan = format(date, "d MMM y");

  return (
    <>
      <div className="flex ">
        <SideBar order=" text-white bg-[#E3B02B]" />
        <div className="h-screen w-screen grey px-[28px] py-[20px] overflow-y-scroll">
          <div className="bg-white rounded-[10px] w-full mt-[20px] p-5 pb-40">
            {" "}
            <p className=" text-xl font-semibold">Detail Pesanan Jemaah</p>
            <div className="mt-3 ">
              <p className="ml-3 text-base font-semibold">Status Pembayaran</p>
              <div className="w-full bg-neutral-200 p-2 rounded-md">
                <p className="text-[19px]">{DetailOrder.order.status}</p>
              </div>
            </div>
            <div className="mt-3 ">
              <p className="ml-3 text-base font-semibold">
                Status Keberangkatan
              </p>
              <div className="w-full bg-neutral-200 p-2 rounded-md">
                <p className="text-[19px]">
                  {DetailOrder.order.status_keberangkatan}
                </p>
              </div>
            </div>
            <div className="flex mt-5 gap-4 ml-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.8334 3.16667C13.6179 3.16626 11.4411 3.74694 9.52015 4.85074C7.59924 5.95455 6.00143 7.54287 4.88621 9.45718C3.77099 11.3715 3.17736 13.5448 3.16457 15.7602C3.15179 17.9757 3.7203 20.1557 4.81335 22.0827C5.55215 21.1226 6.50187 20.3452 7.58907 19.8106C8.67627 19.2761 9.87184 18.9987 11.0834 19H20.5834C21.7949 18.9987 22.9904 19.2761 24.0776 19.8106C25.1648 20.3452 26.1145 21.1226 26.8533 22.0827C27.9464 20.1557 28.5149 17.9757 28.5021 15.7602C28.4893 13.5448 27.8957 11.3715 26.7805 9.45718C25.6653 7.54287 24.0675 5.95455 22.1466 4.85074C20.2256 3.74694 18.0488 3.16626 15.8334 3.16667ZM28.4098 25.4537C30.5267 22.6939 31.6718 19.3116 31.6667 15.8333C31.6667 7.08858 24.5781 0 15.8334 0C7.0886 0 1.78176e-05 7.08858 1.78176e-05 15.8333C-0.00520946 19.3116 1.13987 22.6939 3.25693 25.4537L3.24902 25.4822L3.8111 26.1361C5.29609 27.8722 7.13988 29.2657 9.21538 30.2205C11.2909 31.1753 13.5488 31.6687 15.8334 31.6667C19.0433 31.6726 22.1784 30.6975 24.8188 28.8721C25.9444 28.0944 26.9651 27.1748 27.8556 26.1361L28.4177 25.4822L28.4098 25.4537ZM15.8334 6.33333C14.5736 6.33333 13.3654 6.83378 12.4746 7.72458C11.5838 8.61537 11.0834 9.82355 11.0834 11.0833C11.0834 12.3431 11.5838 13.5513 12.4746 14.4421C13.3654 15.3329 14.5736 15.8333 15.8334 15.8333C17.0931 15.8333 18.3013 15.3329 19.1921 14.4421C20.0829 13.5513 20.5834 12.3431 20.5834 11.0833C20.5834 9.82355 20.0829 8.61537 19.1921 7.72458C18.3013 6.83378 17.0931 6.33333 15.8334 6.33333Z"
                  fill="black"
                />
              </svg>

              <p className="text-xl font-semibold ">Detail Pemesan</p>
            </div>
            <div className="mt-5 ">
              <p className="ml-3 text-base font-semibold">Nama Pemesan</p>
              <div className="w-full bg-neutral-200 p-2 rounded-md">
                <p className="text-[19px]">{DetailOrder.order.nama_lengkap}</p>
              </div>
            </div>
            <div className="mt-3 ">
              <p className="ml-3 text-base font-semibold">No WhatsApp</p>
              <div className="w-full bg-neutral-200 p-2 rounded-md">
                <p className="text-[19px]">{DetailOrder.order.no_telp}</p>
              </div>
            </div>
            <div className="mt-3 ">
              <p className="ml-3 text-base font-semibold">Alamat Email</p>
              <div className="w-full bg-neutral-200 p-2 rounded-md">
                <p className="text-[19px]">{DetailOrder.order.email}</p>
              </div>
            </div>
            <p className=" text-xl mt-5 font-semibold">Detail Paket</p>
            <div className="mt-5 ">
              <p className="ml-3 text-base font-semibold">Nama Paket</p>
              <div className="w-full bg-neutral-200 p-2 rounded-md">
                <p className="text-[19px]">{DetailOrder.paket.title}</p>
              </div>
            </div>
            <div className="mt-3 ">
              <p className="ml-3 text-base font-semibold">Harga Paket</p>
              <div className="w-full bg-neutral-200 p-2 rounded-md">
                <p className="text-[19px]">{DetailOrder.paket.price}</p>
              </div>
            </div>
            <div className="mt-3 ">
              <p className="ml-3 text-base font-semibold">Kota Keberangkatan</p>
              <div className="w-full bg-neutral-200 p-2 rounded-md">
                <p className="text-[19px]">
                  {DetailOrder.paket.kota_keberangkatan}
                </p>
              </div>
            </div>
            <div className="mt-3 ">
              <p className="ml-3 text-base font-semibold">
                Waktu Keberangkatan
              </p>
              <div className="w-full bg-neutral-200 p-2 rounded-md">
                <p className="text-[19px]">{WaktuKeberangkatan}</p>
              </div>
            </div>
            <div className="flex mt-5 gap-4 ml-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.648 11.2652H6.35001C5.43573 11.2652 5.04389 10.2693 5.76226 9.79581L15.4112 3.47744C15.5894 3.37264 15.7923 3.31738 15.999 3.31738C16.2057 3.31738 16.4086 3.37264 16.5867 3.47744L26.2357 9.79581C26.9541 10.2693 26.5623 11.2652 25.648 11.2652Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25.7959 20.2451H6.20402C5.75318 20.2451 5.3877 20.6106 5.3877 21.0614V23.5104C5.3877 23.9613 5.75318 24.3267 6.20402 24.3267H25.7959C26.2467 24.3267 26.6122 23.9613 26.6122 23.5104V21.0614C26.6122 20.6106 26.2467 20.2451 25.7959 20.2451Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.83594 11.2656V20.2452M11.9176 11.2656V20.2452M15.9992 11.2656V20.2452M20.0808 11.2656V20.2452M24.1625 11.2656V20.2452"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="15"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>

              <p className="text-xl font-semibold ">Detail Pembayaran</p>
            </div>
            <p className="ml-3 text-base font-semibold mt-5">
              Metode Pembayaran
            </p>
            <div className="flex  py-3 gap-2">
              <div className="border-2 rounded-md bg-white">
                <Image src={"/bca.png"} alt="" width={55} height={55} />
              </div>
              <p className="my-auto text-black font-medium">
                {DetailOrder.order.no_rekening_bank}
              </p>
            </div>
            <div className="mt-3 ">
              <p className="ml-3 text-base font-semibold">Total Pembayaran</p>
              <div className="w-full bg-neutral-200 p-2 rounded-md">
                <p className="text-[19px]">{DetailOrder.order.jumlah_bayar}</p>
              </div>
            </div>
            <div className="mt-3 ">
              <p className="ml-3 text-base font-semibold">
                Nama Pemilik Rekening
              </p>
              <div className="w-full bg-neutral-200 p-2 rounded-md">
                <p className="text-[19px]">
                  {DetailOrder.order.nama_pemilik_rekening}
                </p>
              </div>
            </div>
            <div className="mt-3 ">
              <p className="ml-3 text-base font-semibold">Bukti Pembayaran</p>
              {DetailOrder.order.bukti_pembayaran == "" ? (
                <div className="w-[400px] h-[400px] bg-neutral-200 p-2 rounded-md flex justify-center items-center">
                  <p>Bukti Belum Diunggah</p>
                </div>
              ) : (
                <div className="w-[400px] h-[400px] bg-neutral-200 p-2 rounded-md flex justify-center items-center">
                  <img
                    alt="bukti pembayaran"
                    src={DetailOrder.order.bukti_pembayaran}
                    className="w-[400px] h-[400px] p-2 rounded-md"
                  />
                </div>
              )}
            </div>
            <div className="flex mt-10 gap-4 ml-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.8334 3.16667C13.6179 3.16626 11.4411 3.74694 9.52015 4.85074C7.59924 5.95455 6.00143 7.54287 4.88621 9.45718C3.77099 11.3715 3.17736 13.5448 3.16457 15.7602C3.15179 17.9757 3.7203 20.1557 4.81335 22.0827C5.55215 21.1226 6.50187 20.3452 7.58907 19.8106C8.67627 19.2761 9.87184 18.9987 11.0834 19H20.5834C21.7949 18.9987 22.9904 19.2761 24.0776 19.8106C25.1648 20.3452 26.1145 21.1226 26.8533 22.0827C27.9464 20.1557 28.5149 17.9757 28.5021 15.7602C28.4893 13.5448 27.8957 11.3715 26.7805 9.45718C25.6653 7.54287 24.0675 5.95455 22.1466 4.85074C20.2256 3.74694 18.0488 3.16626 15.8334 3.16667ZM28.4098 25.4537C30.5267 22.6939 31.6718 19.3116 31.6667 15.8333C31.6667 7.08858 24.5781 0 15.8334 0C7.0886 0 1.78176e-05 7.08858 1.78176e-05 15.8333C-0.00520946 19.3116 1.13987 22.6939 3.25693 25.4537L3.24902 25.4822L3.8111 26.1361C5.29609 27.8722 7.13988 29.2657 9.21538 30.2205C11.2909 31.1753 13.5488 31.6687 15.8334 31.6667C19.0433 31.6726 22.1784 30.6975 24.8188 28.8721C25.9444 28.0944 26.9651 27.1748 27.8556 26.1361L28.4177 25.4822L28.4098 25.4537ZM15.8334 6.33333C14.5736 6.33333 13.3654 6.83378 12.4746 7.72458C11.5838 8.61537 11.0834 9.82355 11.0834 11.0833C11.0834 12.3431 11.5838 13.5513 12.4746 14.4421C13.3654 15.3329 14.5736 15.8333 15.8334 15.8333C17.0931 15.8333 18.3013 15.3329 19.1921 14.4421C20.0829 13.5513 20.5834 12.3431 20.5834 11.0833C20.5834 9.82355 20.0829 8.61537 19.1921 7.72458C18.3013 6.83378 17.0931 6.33333 15.8334 6.33333Z"
                  fill="black"
                />
              </svg>

              <p className="text-xl font-semibold my-auto">
                Detail Jemaah Didaftarkan
              </p>
            </div>
            {DetailOrder.order.jamaah.map((data: any, i: number) => {
              return (
                <div
                  key={i}
                  className=" border-2 bg-neutral-200 border-neutral-400 rounded-lg mt-5"
                >
                  <div className="flex  ">
                    <div className="flex flex-col  w-full ">
                      <div className="border-b-2 border-neutral-400 ">
                        <p className="p-2 font-semibold   md:text-base sm:text-sm text-xs ">
                          Jemaah Ke-{i + 1}
                        </p>
                      </div>
                      <div className="p-2 border-b-2 border-neutral-400">
                        <p className="font-semibold md:text-base sm:text-sm text-xs">
                          Nama Lengkap
                        </p>
                        <p className="font-normal md:text-base sm:text-sm text-xs">
                          {data.name}
                        </p>
                      </div>
                      <div className="p-2 border-b-2 border-neutral-400">
                        <p className="font-semibold md:text-base sm:text-sm text-xs">
                          Gender
                        </p>
                        <p className="font-normal md:text-base sm:text-sm text-xs">
                          {data.gender}
                        </p>
                      </div>
                      <div className="p-2 border-b-2 border-neutral-400">
                        <p className="font-semibold md:text-base sm:text-sm text-xs">
                          Nomor WhatsApp
                        </p>
                        <p className="font-normal md:text-base sm:text-sm text-xs">
                          {data.noWhatsapp}
                        </p>
                      </div>
                      <div className="p-2">
                        <p className="font-semibold md:text-base sm:text-sm text-xs">
                          Alamat Email
                        </p>
                        <p className="font-normal md:text-base sm:text-sm text-xs">
                          {data.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
