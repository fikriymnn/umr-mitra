"use client"
import SideBar from '@/components/sideBar'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import axios from 'axios';
import { useRouter } from "next/navigation";


function DetailAkun() {
    const router = useRouter();
    const [dataMitra, setDataMitra] = useState<any>(null);
    let loading = false;

    useEffect(() => {
        getuser();
    });


    async function getuser() {
        loading = true
        const dataStorage = await sessionStorage.getItem("id_user")
        const encriptData = atob(`${dataStorage}`);
        const id = encriptData;

        if (!dataStorage) {
            loading = false
            router.push("/login");
          }

        getdetailuser(id)

         loading = false
        return dataStorage
    }


    async function getdetailuser(id: any) {
        try {
            const res = await axios.get(`http://localhost:5000/api/mitra/${id}`);
            if (res.data.success == true) {
                setDataMitra(res.data.data)
            }
            id = res.data.data._id;
        } catch (error: any) {
            console.log(error.response);
        }
    }

    if(loading = false){
        return (
          <div>Loading</div>
        )
      }
    

    return (
        <div className='flex'>
            <SideBar detailAkun="text-white bg-[#E3B02B]" />
            <div className='h-screen w-screen grey px-[28px] py-[20px]  overflow-y-scroll' >

                <div>
                    <label className="text-black font-semibold text-[28px] ">
                        Detail Mitra
                    </label>
                    <div className='flex '>
                        <div className='flex flex-col bg-white w-2/6 h-[600px] shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4 mt-[20px]'>

                            <div className="flex flex-wrap justify-items-center justify-center">
                                {
                                    dataMitra == null ? <div className="shadow w-44 h-44 bg-zinc-300 rounded-full">

                                    </div> :
                                    <img src={dataMitra.foto_profil} alt='Profil' className="shadow w-44 h-44 bg-zinc-300 rounded-full " />
                                        
                                }

                            </div>
                            <div>
                                <label className="flex justify-items-center justify-center mt-[20px] text-black text-2xl text-center font-semibold  ">
                                    {dataMitra == null ? "" : dataMitra.nama_mitra}
                                </label>
                            </div>
                        </div>

                        <div className='flex flex-col bg-white w-full h-[600px] shadow-xl rounded-lg px-20 pt-12 pb-12 mt-[20px] ml-[29px] '>

                            <div className='grid grid-cols-2'>

                                <label className="grid w-60 h-7 text-base text-black  font-normal">
                                    Nama Mitra
                                </label>
                                <div className='grid justify-end'>
                                    <button className="w-40 h-8 justify-items-end bg-amber-400 rounded-md text-center text-base text-white font-medium">
                                        <Link href={`/detailAkun/editprofile/${dataMitra == null ? "" :dataMitra._id}`}>
                                            Perbarui Data
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="w-60 h-7 text-lg text-black  font-semibold">
                                    {dataMitra == null ? "" : dataMitra.nama_mitra}
                                </label>
                            </div>

                            <div className='mt-[22px]'>
                                <label className="w-full h-7 text-base text-black  font-normal">
                                    Nama Perusahaan
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-lg text-black  font-semibold">
                                    {dataMitra == null ? "" : dataMitra.nama_pt}
                                </label>
                            </div>

                            <div className='mt-[22px]'>
                                <label className="w-full h-7 text-base text-black  font-normal">
                                    Nomor Izin
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-lg text-black  font-semibold">
                                    {dataMitra == null ? "" : dataMitra.no_izin_umroh}
                                </label>
                            </div>
                            <div className='mt-[22px]'>
                                <label className="w-full h-7 text-base text-black  font-normal">
                                    Lokasi
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-lg text-black  font-semibold">
                                    {dataMitra == null ? "" : dataMitra.location}
                                </label>
                            </div>
                            <div className='mt-[22px]'>
                                <label className="w-full h-7 text-base text-black  font-normal">
                                    Email
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-lg text-black  font-semibold">
                                    {dataMitra == null ? "" : dataMitra.email}
                                </label>
                            </div>
                            <div className='mt-[22px]'>
                                <label className="w-full h-7 text-base text-black  font-normal">
                                    Website
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-lg text-black  font-semibold">
                                    {dataMitra == null ? "" : dataMitra.website}
                                </label>
                            </div>
                            <div className='mt-[22px]'>
                                <label className="w-full h-7 text-base text-black  font-normal">
                                    Rating
                                </label>
                            </div>
                            <div>
                                <label className="w-full h-7 text-lg text-black  font-semibold">
                                    {dataMitra == null ? "" : dataMitra.rating}/5
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