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
            <div className='h-screen w-screen bg-[#E3B02B] p-[28px]' >
                <div>
                    <label className="text-black text-2xl font-semibold  ">
                        Ubah Password
                    </label>
                    <div className='flex mt-[28px] '>

                        <form className="bg-white w-[617px] shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                            <div>
                                <label className="w-60 h-7 text-1xl text-black  font-semibold">
                                    Email akun
                                </label>
                            </div>
                            <div>
                                <input
                                    className="w-full h-[29px] bg-zinc-300 rounded-sm mb-[7px] text-opacity-60 text-1xl font-normal"
                                    id="emailakun"
                                    placeholder="  Masukkan email"
                                    required
                                    type="email"
                                />
                            </div>
                            <div>
                                <label className="w-full h-[29px] text-1xl  text-black  font-semibold ">
                                    Password saat ini
                                </label>
                            </div>
                            <div>
                                <input
                                    className="w-full h-[29px] bg-zinc-300 rounded-sm mb-[7px] text-opacity-60 text-1xl font-normal"
                                    id="oldpassword"
                                    placeholder="  Masukkan password saat ini"
                                    required
                                    type="password"
                                />
                            </div>
                            <div>
                                <label className="w-60 h-7 text-1xl text-black  font-semibold ">
                                    Password baru
                                </label>
                            </div>
                            <div>
                                <input
                                    className="w-full h-[29px] bg-zinc-300 rounded-sm mb-[7px] text-opacity-60 text-1xl font-normal"

                                    id="newpassword"
                                    placeholder="  Masukkan password baru"
                                    required
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                            </div>
                            <div>
                                <label className="w-60 h-7 text-1xl text-black  font-semibold ">
                                    Konfirmasi password baru

                                </label>

                                {!passwordMatch && <label className='text-red-600 font-semibold text-1xl ml-[150px]'> Password tidak cocok </label>}


                            </div>
                            <div>
                                <input
                                    className="w-full h-[29px] bg-zinc-300 rounded-sm mb-[7px]  text-opacity-60 text-1xl font-normal"
                                    id="confirmoldpassword"
                                    placeholder="  Masukkan password baru"
                                    required
                                    value={confpassword}
                                    type="password"
                                    onChange={(e) => setconfpassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className='bg-amber-400 text-white font-bold w-36 h-7 mt-[10px]  rounded-sm focus:outline-none focus:shadow-outline"'>
                                Ubah Password
                            </button>
                            <Link href='/detailAkun/editprofile'>
                                <button className="w-16 h-7 ml-[22px] rounded-sm border border-amber-400 text-center text-amber-400 text-base font-medium ">
                                    Batal
                                </button>
                            </Link>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UbahPassword;
