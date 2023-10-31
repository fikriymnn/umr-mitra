import SideBar from '@/components/sideBar'
import Link from 'next/link'
import React from 'react'

function DetailAkun() {
    return (
        <div className='flex'>
            <SideBar detailAkun="ps-3 text-white bg-[#E3B02B]" />
            <div className='h-screen w-screen bg-[#E3B02B] p-[28px]' >
                <div>
                    <label className="text-black text-2xl font-semibold  ">
                        Detail Mitra
                    </label>
                    <div className='flex '>
                        <div className='flex flex-col bg-white w-[320px] h-[580px] shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 mt-[28px]'>
                            <div className="flex flex-wrap ml-[44px]">

                                <img src="" alt="..." className="shadow w-44 h-44 bg-zinc-300 rounded-full" />

                            </div>
                            <div>
                                <label className="flex ml-[33px] mt-[20px] text-black text-xl font-semibold  ">
                                    Travel Keren Dongs
                                </label>

                            </div>

                        </div>

                        <div className='flex flex-col bg-white w-[794px] h-[580px] shadow-lg rounded-lg px-12 pt-12 pb-12 mt-[28px] ml-[29px]'>
                            <div>
                                <label className="w-60 h-7 text-1xl text-black  font-normal">
                                    Nama Mitra
                                </label>
                                <Link href='/detailAkun/editprofile'>
                                    <button className="w-44 h-9 ml-[420px] bg-amber-400 rounded-md text-center text-white text-base font-normal">
                                        Perbarui Data
                                    </button>
                                </Link>


                            </div>
                            <div>
                                <label className="w-60 h-7 text-1xl text-black  font-semibold">
                                    Travel Keren Dongs
                                </label>

                            </div>
                            <div className='mt-[20px]'>
                                <label className="w-60 h-7 text-1xl text-black  font-normal">
                                    Nama Perusahaan
                                </label>
                            </div>
                            <div>
                                <label className="w-60 h-7 text-1xl text-black  font-semibold">
                                    PT. Travel Keren Dongs
                                </label>
                            </div>

                            <div className='mt-[20px]'>
                                <label className="w-60 h-7 text-1xl text-black  font-normal">
                                    Nomor Izin
                                </label>
                            </div>
                            <div>
                                <label className="w-60 h-7 text-1xl text-black  font-semibold">
                                    87687676672678
                                </label>
                            </div>
                            <div className='mt-[20px]'>
                                <label className="w-60 h-7 text-1xl text-black  font-normal">
                                    Lokasi
                                </label>
                            </div>
                            <div>
                                <label className="w-60 h-7 text-1xl text-black  font-semibold">
                                    Bandung
                                </label>
                            </div>
                            <div className='mt-[20px]'>
                                <label className="w-60 h-7 text-1xl text-black  font-normal">
                                    Email
                                </label>
                            </div>
                            <div>
                                <label className="w-60 h-7 text-1xl text-black  font-semibold">
                                    Traveldongs01@gmail.com
                                </label>
                            </div>
                            <div className='mt-[20px]'>
                                <label className="w-60 h-7 text-1xl text-black  font-normal">
                                    Website
                                </label>
                            </div>
                            <div>
                                <label className="w-60 h-7 text-1xl text-black  font-semibold">
                                    www.traveldongs.com
                                </label>
                            </div>
                            <div className='mt-[20px]'>
                                <label className="w-60 h-7 text-1xl text-black  font-normal">
                                    Rating
                                </label>
                            </div>
                            <div>
                                <label className="w-60 h-7 text-1xl text-black  font-semibold">
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