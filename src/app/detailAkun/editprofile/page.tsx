'use client';

import SideBar from '@/components/sideBar'
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from "react";

function EditProfile() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState<any | null>(null);
    const [dataMitra, setDataMitra] = useState<any>([]);
    const [nama_mitra, setnama_mitra] = useState('');
    const [nama_pt, setnama_pt] = useState('');
    const [email, setemail] = useState('');
    const [location, setlocation] = useState('');
    const [website, setwebsite] = useState('');
    const [foto_profil, setfoto_profile] = useState(null);

    const imageChange = (e: any) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedImage(file);
                setImagePreview(reader.result); 0
            };
            setfoto_profile(e.target.files[0]);
            reader.readAsDataURL(file);
        }
    };

    let id: any = "";
    useEffect(() => {
        async function getuser() {
            try {
                const res = await axios.get("http://localhost:5000/api/user", { withCredentials: true });
                if (res.data.success == true) {
                    getdetailuser(res.data.data._id)
                }
                id = res.data.data._id;
            } catch (error: any) {
                console.log(error.response);
            }
        }
        async function getdetailuser(idd: any) {

            try {
                const res = await axios.get(`http://localhost:5000/api/mitra/${idd}`);
                if (res.data.success == true) {
                    setDataMitra(res.data.data)
                }
                id = res.data.data._id;

            } catch (error: any) {
                console.log(error.response);
            }
        }
        getuser();
    });

    useEffect(() => {
        async function setuser() {
            try {
                const res = await axios.get("http://localhost:5000/api/user", { withCredentials: true });
                if (res.data.success == true) {
                    setdetailuser(res.data.data._id)
                }
                id = res.data.data._id;
            } catch (error: any) {
                console.log(error.response);
            }
        }
        async function setdetailuser(idd: any) {

            try {
                const res = await axios.get(`http://localhost:5000/api/mitra/${idd}`);
                if (res.data.success == true) {
                    setDataMitra(res.data.data)
                    setnama_mitra(res.data.data.nama_mitra)
                    setnama_pt(res.data.data.nama_pt)
                    setemail(res.data.data.email)
                    setlocation(res.data.data.location)
                    setwebsite(res.data.data.website)
                    setfoto_profile(res.data.data.foto_profil)
                }
                id = res.data.data._id;

            } catch (error: any) {
                console.log(error.response);
            }
        }
        setuser();
    }, []);


    // const url = `http://localhost:5000/api/mitra/${id}`;
    async function updatedetailuser(e: any) {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:5000/api/mitra/${id}`, {
                nama_mitra,
                nama_pt,
                email,
                location,
                website,
                foto_profil,

            },
                { withCredentials: true }
            )
            alert('update sukses')
        } catch (error: any) {
            alert(error.response);
            console.log(error.response);
        }
    }

    async function uploadImage(event: any) {
        event.preventDefault();
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("content", file);
        try {
            const response = await axios.post(
                "http://localhost:5000/api/upload",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log(response);
            setfoto_profile(response.data.data);
        } catch (error: any) {
            alert(error.response.data.message);
        }
    }
    return (
        <div>
            <div className='flex'>
                <SideBar detailAkun="ps-3 text-white bg-[#E3B02B]" />
                <div className='h-screen w-screen grey px-[28px] py-[20px]  overflow-y-scroll' >
                    <form onSubmit={updatedetailuser}>
                        <div>
                            <label className="text-black font-semibold text-[28px]  ">
                                Edit Detail Profile
                            </label>
                            <div className='flex '>
                                <div className='flex flex-col bg-white w-2/4 h-[730px] shadow-xl rounded-lg px-9 pt-6 pb-8 mb-4 mt-[20px]'>
                                    <div className="flex flex-wrap ">
                                        <img
                                            alt="logo1"
                                            src={`http://localhost:5000/images/${foto_profil}`}
                                            height={128}
                                            width={128}
                                            className="w-32 h-32 bg-zinc-300 rounded-full" />
                                        <label className='w-24 h-7 bg-amber-400 rounded-sm ml-[26px] mt-[58px] cursor-pointer pt-[2px]'>
                                            <span className='ml-[10px] text-white  font-normal text-center'>Pilih Foto</span>
                                            <input
                                                accept='image/*'
                                                type="file"
                                                onChange={(e) => uploadImage(e)}
                                                className="hidden"
                                            />
                                        </label>

                                    </div>

                                    <div className='mt-[20px]'>
                                        <label className="w-60 h-7 text-xl text-black  font-normal">
                                            Nama Mitra
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            className="w-full h-8 bg-zinc-300 rounded-sm text-opacity-60 text-[18px]  font-normal "
                                            id="namamitra"
                                            placeholder="Masukkan Nama Mitra"
                                            required
                                            type="text"
                                            value={nama_mitra}
                                            style={{ paddingLeft: '10px' }}
                                            onChange={(e) => setnama_mitra(e.target.value)}

                                        />
                                    </div>
                                    <div className='mt-[7px]'>
                                        <label className="w-60 h-7 text-xl text-black  font-normal">
                                            Nama Perusahaan
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            className="w-full h-8 bg-zinc-300 rounded-sm text-opacity-60 text-[18px]  font-normal "
                                            id="namaperusahaan"
                                            placeholder="Masukkan Nama Perusahaan"
                                            required
                                            type="text"
                                            value={nama_pt}
                                            style={{ paddingLeft: '10px' }}
                                            onChange={(e) => setnama_pt(e.target.value)}
                                        />
                                    </div>

                                    <div className='mt-[7px]'>
                                        <label className="w-60 h-7 text-xl text-black  font-normal">
                                            Lokasi
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            className="w-full h-8 bg-zinc-300 rounded-sm text-opacity-60 text-[18px]  font-normal "
                                            id="lokasimitra"
                                            placeholder="Masukkan Lokasi"
                                            required
                                            type="text"
                                            value={location}
                                            style={{ paddingLeft: '10px' }}
                                            onChange={(e) => setlocation(e.target.value)}
                                        />
                                    </div>
                                    <div className='mt-[7px]'>
                                        <label className="w-60 h-7 text-xl text-black  font-normal">
                                            Email (kontak)
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            className="w-full h-8 bg-zinc-300 rounded-sm text-opacity-60 text-[18px]  font-normal "
                                            id="emailmitra"
                                            placeholder="Masukkan Email"
                                            required
                                            type="email"
                                            value={email}
                                            style={{ paddingLeft: '10px' }}
                                            onChange={(e) => setemail(e.target.value)}
                                        />
                                    </div>
                                    <div className='mt-[7px]'>
                                        <label className="w-60 h-7 text-xl text-black  font-normal">
                                            Website
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            className="w-full h-8 bg-zinc-300 rounded-sm text-opacity-60 text-[18px] font-normal "
                                            id="websitemitra"
                                            placeholder="Masukkan Website"
                                            required
                                            type="text"
                                            value={website}
                                            style={{ paddingLeft: '10px' }}
                                            onChange={(e) => setwebsite(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <button className='w-[125px] h-8 bg-amber-400 rounded-md text-white  font-normal mt-[24px]'>
                                            Konfirmasi
                                        </button>
                                        <Link href='/detailAkun'>
                                            <button className="w-[80px] h-8 ml-[22px] rounded-md border border-amber-400 text-center text-amber-400  font-medium ">
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
                                            {dataMitra.email}
                                        </label>
                                    </div>
                                    <div>
                                        <Link href='/detailAkun/ubahpassword'>
                                            <button className='w-[170px] h-8 bg-amber-400 rounded-md text-white  font-normal mt-[24px]'>
                                                Ubah Password
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )

}

export default EditProfile
