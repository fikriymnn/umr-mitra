'use client';
import SideBar from '@/components/sideBar'
import Link from 'next/link';
import React from 'react'
import { useState, useEffect } from 'react';

function UbahPassword() {
    const [password, setPassword] = useState('')
    const [confpassword, setconfpassword] = useState('')
    const [passwordMatch, setPasswordmatch] = useState(false);

    useEffect(() => {
        checkpassword();
    }, [password, confpassword]);

    const checkpassword = () => {

        setPasswordmatch(password === confpassword)
    };

    return (
        <div className='flex'>
            <SideBar detailAkun="ps-3 text-white bg-[#E3B02B]" />
            <div className='h-screen w-screen grey px-[28px] py-[20px]  overflow-y-scroll' >
                <div>
                    <label className="text-black font-semibold text-[28px] ">
                        Ubah Password
                    </label>
                    <div className='flex mt-[20px] '>

                        <form className="bg-white w-2/4 shadow-xl rounded-lg px-9 pt-7 pb-9 mb-4 ">
                            <div>
                                <label className="w-60 h-7 text-xl text-black  font-semibold">
                                    Email akun
                                </label>
                            </div>
                            <div>
                                <input
                                    className="w-full h-8 bg-zinc-300 rounded-sm mb-[7px] text-opacity-60 text-[18px]  font-normal"
                                    id="emailakun"
                                    placeholder="Masukkan Email"
                                    required
                                    type="email"
                                    style={{ paddingLeft: '10px' }}
                                />
                            </div>
                            <div className='mt-[7px]'>
                                <label className="w-full h-7 text-xl  text-black  font-semibold ">
                                    Password saat ini
                                </label>
                            </div>
                            <div>
                                <input
                                    className="w-full h-8 bg-zinc-300 rounded-sm mb-[7px] text-opacity-60 text-[18px]  font-normal"
                                    id="oldpassword"
                                    placeholder="Masukkan Password Saat Ini"
                                    required
                                    type="password"
                                    style={{ paddingLeft: '10px' }}
                                />
                            </div>
                            <div className='mt-[7px]'>
                                <label className="w-60 h-7 text-xl text-black  font-semibold ">
                                    Password baru
                                </label>
                            </div>
                            <div>
                                <input
                                    className='w-full h-8 bg-zinc-300 rounded-sm mb-[7px] text-opacity-60 text-[18px]  font-normal '

                                    id="newpassword"
                                    placeholder="Masukkan Password Baru"
                                    required
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{ paddingLeft: '10px' }}
                                />
                            </div>
                            <div className='grid grid-cols-2 mt-[7px]'>
                                <label className="w-60 h-7 text-xl text-black  font-semibold ">
                                    Konfirmasi password baru

                                </label>

                                {!passwordMatch && <label className='grid text-red-600 font-semibold text-xl justify-items-end justify-end'> Password tidak cocok </label>}


                            </div>
                            <div>
                                <input
                                    className={`... ${!passwordMatch ? 'w-full h-8 bg-zinc-300 rounded-sm mb-[7px] text-opacity-60 text-[18px]  font-normal  border border-red-500' : 'w-full h-8 bg-zinc-300 rounded-sm mb-[7px] text-opacity-60 text-[18px]  font-normal'} ...`}

                                    id="confirmoldpassword"
                                    placeholder="Masukkan Password Baru"
                                    required
                                    value={confpassword}
                                    type="password"
                                    onChange={(e) => setconfpassword(e.target.value)}
                                    style={{ paddingLeft: '10px' }}
                                />

                            </div>
                            <button type="submit" className=' bg-amber-400 text-white font-normal w-[170px] h-8 mt-[14px] rounded-md focus:outline-none focus:shadow-outline"'>
                                Ubah Password
                            </button>
                            <Link href='/detailAkun/editprofile'>
                                <button className="w-[80px] h-8 ml-[22px] rounded-md border border-amber-400 text-center text-amber-400 font-medium ">
                                    Batal
                                </button>
                            </Link>

                        </form>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default UbahPassword;
