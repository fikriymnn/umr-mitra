
import React from 'react'

function page() {
    return (
        <>
            <div className='bg-gradient-to-r from-amber-400 to-white h-screen w-screen'>
                <div className='flex ml-[153px] p-[28px]'>
                    <label className="text-black text-4xl font-extrabold">
                        Mitra Ibadahku
                    </label>
                </div>
                <div className="flex ml-[156px] mt-[150px] text-white text-4xl font-bold ">
                    <label>
                        Selamat Datang!
                    </label>
                </div>
                <div className="flex ml-[154px] mt-[2px]  text-white text-xl font-semibold ">
                    <label>
                        Masukan Akun Mitra Ibadahku
                    </label>
                </div>
                <div className='flex mt-[28px] ml-[154px] mr-[881px]'>

                    <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">

                        <div>
                            <div className=" ">
                                <label className="w-80 text-black text-1xl font-semibold ">
                                    Nama Mitra
                                </label>
                            </div>
                            <input
                                className="mb-[8px] h-11 bg-neutral-200 rounded w-80 text-stone-500 text-opacity-60 text-base font-normal "
                                id="namamitra"
                                placeholder="  Masukan Nama Mitra"
                                required
                                type="text"

                            />
                        </div>
                        <div>
                            <div className="">
                                <label className="w-80 text-black text-1xl font-semibold ">
                                    Email
                                </label>
                            </div>
                            <input
                                className="mb-[8px] h-11 bg-neutral-200 rounded w-80 text-stone-500 text-opacity-60 text-base font-normal"
                                id="emailmitra"
                                placeholder="  Masukan Email Mitra"
                                required
                                type="email"
                            />
                        </div>
                        <div>
                            <div className="">
                                <label className="w-80 text-black text-1xl font-semibold">
                                    Password
                                </label>
                            </div>
                            <input
                                className="mb-[8px] h-11 bg-neutral-200 rounded w-80 text-stone-500 text-opacity-60 text-base font-normal "

                                id="password1"
                                placeholder='  Masukan Password '
                                required
                                type="password"
                            />
                        </div>

                        <button type="submit" className='bg-amber-400  text-white font-bold w-full mt-3 h-[48px] rounded-lg focus:outline-none focus:shadow-outline"'>
                            Masuk
                        </button>

                    </form>

                </div>
            </div >

        </>

    )
}

export default page
