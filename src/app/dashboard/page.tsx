"use client"

import SideBar from '@/components/sideBar'
import { Rating } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'





function Dashboard() {

    return (
        <div className='flex h-screen'>
            <SideBar dashboard="ps-3 text-white bg-[#E3B02B]" />
            <div className='min-h-screen w-screen yellow px-[28px] overflow-y-scroll' >
                {/* top content */}
                <div className='flex items-center justify-start bg-white  my-[21px] w-full h-[254px] rounded-[10px_10px_10px_10px] shadow-xl'>

                    <div className=' w-[148px] h-[148px] ml-[67px] rounded-full bg-black bg-cover bg-center' style={{ backgroundImage: `url(profil.jpeg)` }}>

                    </div>
                    <div className='flex flex-col items-start justify-start ml-[38px]'>
                        <p className='font-medium text-[40px] text-black'>Travel Keren Dongs</p>
                        <p className='font-medium text-medium text-black'>PT.Travel Keren Dongs Indonesia</p>
                    </div>
                </div>
                {/* grid content */}
                <div className='grid grid-cols-2 gap-[33.2px] mb-[28px]'>
                    <div className='h-[254px] bg-white rounded-[10px_10px_10px_10px]'>
                        {/* paket saya */}
                        <div className='flex items-center justify-start h-[94px] w-full bg-black  rounded-[10px_10px_0px_0px] '>
                            <p className='ml-[67px] yellowtext text-[35px] font-[500]'>paket Saya</p>

                        </div>
                        <div className='flex items-center justify-start w-full '>
                            <p className='ml-[67px] text-black text-[109px] font-medium'>9</p>
                        </div>
                    </div>
                    {/* order berjalan */}
                    <div className='h-[254px] bg-white rounded-[10px_10px_10px_10px]'>
                        <div className='flex items-center justify-start h-[94px] w-full bg-black  rounded-[10px_10px_0px_0px] '>
                            <p className='ml-[67px] yellowtext text-[35px] font-[500]'>Order Berjalan</p>

                        </div>
                        <div className='flex items-center justify-start w-full '>
                            <p className='ml-[67px] text-black text-[109px] font-medium'>159</p>
                        </div>
                    </div>
                    {/* rating */}

                    <div className='h-[254px] bg-white rounded-[10px_10px_10px_10px]'>
                        <div className='flex items-center justify-start h-[94px] w-full bg-black  rounded-[10px_10px_0px_0px] '>
                            <p className='ml-[67px] yellowtext text-[35px] font-[500]'>Rating</p>

                        </div>

                        <div className='flex items-center justify-start w-full h-[160px] '>
                            <div>

                                <Rating className='ml-[67px]' name="half-rating-read" defaultValue={5} precision={0.5} readOnly size='large' />

                                <p className='ml-[67px] text-black text-[39px] font-medium'>260 Penilaian</p>
                            </div>

                        </div>
                    </div>
                    {/* order selesai */}
                    <div className='h-[254px] bg-white rounded-[10px_10px_10px_10px]'>
                        <div className='flex items-center justify-start h-[94px] w-full bg-black  rounded-[10px_10px_0px_0px] '>
                            <p className='ml-[67px] yellowtext text-[35px] font-[500]'>Order Selesai</p>

                        </div>
                        <div className='flex items-center justify-start w-full '>
                            <p className='ml-[67px] text-black text-[109px] font-medium'>480</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard