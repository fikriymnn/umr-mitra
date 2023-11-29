import SideBar from '@/components/sideBar'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
function DetailAkun() {
    return (
        <div className='flex'>
            <SideBar detailAkun="ps-3 text-white bg-[#E3B02B]" />
            <div className='h-screen w-screen bg-[#E3B02B] px-[28px] py-[20px]  overflow-y-scroll' >
                <div>
                    <label className="text-black font-semibold text-[28px] ">
                        Detail Mitra
                    </label>
                    <div className='flex '>
                        <div className='flex flex-col bg-white w-2/6 h-[660px] shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4 mt-[20px]'>
                            <div className="flex flex-wrap justify-items-center justify-center">
                                <Image
                                    alt="logo1"
                                    src={"/profil.jpeg"}
                                    height={176}
                                    width={176}
                                    className="shadow w-44 h-44 bg-zinc-300 rounded-full"
                                />


                            </div>
                            <div>
                                <label className="flex justify-items-center justify-center mt-[20px] text-black text-xl font-semibold  ">
                                    Travel Keren Dongs
                                </label>

                            </div>

                        </div>

                        <div className='flex flex-col bg-white w-full h-[660px] shadow-xl rounded-lg px-20 pt-12 pb-12 mt-[20px] ml-[29px]'>

                            <div className='grid grid-cols-2'>

                                <label className="grid w-60 h-7 text-xl text-black  font-normal">
                                    Nama Mitra
                                </label>
                                <div className='grid justify-end'>
                                    <button className="w-44 h-8 justify-items-end bg-amber-400 rounded-md text-center text-white font-normal">
                                        <Link href='/detailAkun/editprofile'>
                                            Perbarui Data
                                        </Link>
                                    </button>
                                </div>

                            </div>
                            <div>
                                <label className="w-60 h-7 text-xl text-black  font-semibold">
                                    Travel Keren Dongs
                                </label>

                            </div>

                            <div className='mt-[28px]'>
                                <label className="w-full h-7 text-xl text-black  font-normal">
                                    Nama Perusahaan
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-xl text-black  font-semibold">
                                    PT. Travel Keren Dongs
                                </label>
                            </div>

                            <div className='mt-[28px]'>
                                <label className="w-full h-7 text-xl text-black  font-normal">
                                    Nomor Izin
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-xl text-black  font-semibold">
                                    87687676672678
                                </label>
                            </div>
                            <div className='mt-[28px]'>
                                <label className="w-full h-7 text-xl text-black  font-normal">
                                    Lokasi
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-xl text-black  font-semibold">
                                    Bandung
                                </label>
                            </div>
                            <div className='mt-[28px]'>
                                <label className="w-full h-7 text-xl text-black  font-normal">
                                    Email
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-xl text-black  font-semibold">
                                    Traveldongs01@gmail.com
                                </label>
                            </div>
                            <div className='mt-[28px]'>
                                <label className="w-full h-7 text-xl text-black  font-normal">
                                    Website
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-xl text-black  font-semibold">
                                    www.traveldongs.com
                                </label>
                            </div>
                            <div className='mt-[28px]'>
                                <label className="w-full h-7 text-xl text-black  font-normal">
                                    Rating
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-xl text-black  font-semibold">
                                    5/5
                                </label>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetailAkun