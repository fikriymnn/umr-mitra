import SideBar from '@/components/sideBar'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
function EditProfile() {
    return (
        <div>
            <div className='flex'>
                <SideBar detailAkun="ps-3 text-white bg-[#E3B02B]" />
                <div className='h-screen w-screen bg-[#E3B02B] p-[28px]  overflow-y-scroll' >
                    <div>
                        <label className="text-black font-semibold text-[28px]  ">
                            Edit Detail Profile
                        </label>
                        <div className='flex '>
                            <div className='flex flex-col bg-white w-[550px] h-[670px] shadow-lg rounded-lg px-9 pt-6 pb-8 mb-4 mt-[28px]'>
                                <div className="flex flex-wrap ml-[34px]">
                                    <Image
                                        alt="logo1"
                                        src={"/profil.jpeg"}
                                        height={128}
                                        width={128}
                                        className="shadow w-32 h-32 bg-zinc-300 rounded-full"
                                    />
                                    <button className='w-24 h-6 bg-amber-400 rounded-md text-white text-base font-normal ml-[36px] mt-[58px]'>
                                        Pilih Foto
                                    </button>
                                </div>
                                <div className='mt-[20px]'>
                                    <label className="w-60 h-7 text-1xl text-black  font-normal">
                                        Nama Mitra
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-base font-normal "
                                        id="namamitra"
                                        placeholder="  Masukan Nama Mitra"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div className='mt-[7px]'>
                                    <label className="w-60 h-7 text-1xl text-black  font-normal">
                                        Nama Perusahaan
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-base font-normal "
                                        id="namaperusahaan"
                                        placeholder="  Masukan Nama Perusahaan"
                                        required
                                        type="text"
                                    />
                                </div>

                                <div className='mt-[7px]'>
                                    <label className="w-60 h-7 text-1xl text-black  font-normal">
                                        Lokasi
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-base font-normal "
                                        id="lokasimitra"
                                        placeholder="  Masukan Lokasi"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div className='mt-[7px]'>
                                    <label className="w-60 h-7 text-1xl text-black  font-normal">
                                        Email (kontak)
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-base font-normal "
                                        id="emailmitra"
                                        placeholder="  Masukan Email"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div className='mt-[7px]'>
                                    <label className="w-60 h-7 text-1xl text-black  font-normal">
                                        Website
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="w-full h-7 bg-zinc-300 rounded-sm text-opacity-60 text-base font-normal "
                                        id="websitemitra"
                                        placeholder="  Masukan website"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <button className='w-24 h-7 bg-amber-400 rounded-md text-white text-base font-normal mt-[24px]'>
                                        Konfirmasi
                                    </button>
                                    <Link href='/detailAkun'>
                                        <button className="w-16 h-7 ml-[22px] rounded-md border border-amber-400 text-center text-amber-400 text-base font-medium ">
                                            Batal
                                        </button>
                                    </Link>

                                </div>
                                <div className='mt-[24px]'>
                                    <label className="w-60 h-7 text-1xl text-black  font-normal ">
                                        Email (Akun)
                                    </label>
                                </div>
                                <div>
                                    <label className="w-60 h-7 text-1xl text-black  font-normal">
                                        traveldongsadmin@gmail.com
                                    </label>
                                </div>
                                <div>
                                    <Link href='/detailAkun/ubahpassword'>
                                        <button className='w-36 h-7 bg-amber-400 rounded-md text-white text-base font-normal mt-[24px]'>
                                            Ubah Password
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
