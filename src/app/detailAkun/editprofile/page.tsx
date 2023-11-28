'use client';

import SideBar from '@/components/sideBar'
import Link from 'next/link'
import React from 'react'
import { useState } from "react";

function EditProfile() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState<any | null>(null);

    const imageChange = (e: any) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedImage(file);
                setImagePreview(reader.result); 0
            };

            reader.readAsDataURL(file);
        }
    };


    return (
        <div>
            <div className='flex'>
                <SideBar detailAkun="ps-3 text-white bg-[#E3B02B]" />
                <div className='h-screen w-screen bg-[#E3B02B] px-[28px] py-[20px]  overflow-y-scroll' >
                    <div>
                        <label className="text-black font-semibold text-[28px]  ">
                            Edit Detail Profile
                        </label>
                        <div className='flex '>
                            <div className='flex flex-col bg-white w-[650px] h-[720px] shadow-xl rounded-lg px-9 pt-6 pb-8 mb-4 mt-[20px]'>
                                <div className="flex flex-wrap ml-[34px]">
                                    {!imagePreview && <><img
                                        alt="logo1"
                                        src={'/profil.jpeg'}
                                        height={128}
                                        width={128}
                                        className=" w-32 h-32 bg-zinc-300 rounded-full" /></>
                                    }
                                    {imagePreview && <><img
                                        alt="logo1"
                                        src={imagePreview}
                                        height={128}
                                        width={128}
                                        className=" w-32 h-32 bg-zinc-300 rounded-full" /></>
                                    }
                                    <input

                                        type="file"
                                        onChange={imageChange}
                                        className="w-28 file:bg-amber-400 ml-[36px] mt-[58px] text file:text-white"
                                    />
                                </div>

                                <div className='mt-[20px]'>
                                    <label className="w-60 h-7 text-xl text-black  font-normal">
                                        Nama Mitra
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-xl font-normal "
                                        id="namamitra"
                                        placeholder="  Masukan Nama Mitra"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div className='mt-[7px]'>
                                    <label className="w-60 h-7 text-xl text-black  font-normal">
                                        Nama Perusahaan
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-xl font-normal "
                                        id="namaperusahaan"
                                        placeholder="  Masukan Nama Perusahaan"
                                        required
                                        type="text"
                                    />
                                </div>

                                <div className='mt-[7px]'>
                                    <label className="w-60 h-7 text-xl text-black  font-normal">
                                        Lokasi
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-xl font-normal "
                                        id="lokasimitra"
                                        placeholder="  Masukan Lokasi"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div className='mt-[7px]'>
                                    <label className="w-60 h-7 text-xl text-black  font-normal">
                                        Email (kontak)
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-xl font-normal "
                                        id="emailmitra"
                                        placeholder="  Masukan Email"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div className='mt-[7px]'>
                                    <label className="w-60 h-7 text-xl text-black  font-normal">
                                        Website
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-xl font-normal "
                                        id="websitemitra"
                                        placeholder="  Masukan website"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <button className='w-[115px] h-8 bg-amber-400 rounded-md text-white text-xl font-normal mt-[24px]'>
                                        Konfirmasi
                                    </button>
                                    <Link href='/detailAkun'>
                                        <button className="w-[80px] h-8 ml-[22px] rounded-md border border-amber-400 text-center text-amber-400 text-xl font-medium ">
                                            Batal
                                        </button>
                                    </Link>

                                </div>
                                <div className='mt-[24px]'>
                                    <label className="w-60 h-7 text-xl text-black  font-normal ">
                                        Email (Akun)
                                    </label>
                                </div>
                                <div>
                                    <label className="w-60 h-8 text-xl text-black  font-normal">
                                        traveldongsadmin@gmail.com
                                    </label>
                                </div>
                                <div>
                                    <Link href='/detailAkun/ubahpassword'>
                                        <button className='w-[170px] h-8 bg-amber-400 rounded-md text-white text-xl font-normal mt-[24px]'>
                                            Ubah Password
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )

}

export default EditProfile
