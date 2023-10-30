
import React from 'react'

function page() {
    return (
        <>
            <div className='bg-gradient-to-r from-amber-400 to-white'>
                <div className='flex ml-[153px] mt-[74px]'>
                    <label className="text-black text-4xl font-extrabold font-['Montserrat']">
                        Mitra Ibadahku
                    </label>
                </div>
                <div className="flex ml-[156px] mt-[150px] text-white text-4xl font-bold font-['Montserrat']">
                    <label>
                        Selamat Datang!
                    </label>
                </div>
                <div className="flex ml-[154px] mt-[2px]  text-white text-xl font-semibold font-[' Montserrat']">
                    <label>
                        Masukan Akun Mitra Ibadahku
                    </label>
                </div>
                <div className='flex mt-[28px] ml-[154px] mr-[881px]'>

                    <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">

                        <div>
                            <div className=" ">
                                <label className="w-80 text-black text-1xl font-semibold font-['Montserrat']">
                                    Nama Mitra
                                </label>
                            </div>
                            <input
                                // className=' mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
                                className="mb-[8px] h-11 bg-neutral-200 rounded w-80 text-stone-500 text-opacity-60 text-base font-normal font-['Montserrat']"
                                id="namamitra"
                                placeholder="Masukan Nama Mitra"
                                required
                                type="text"

                            />
                        </div>
                        <div>
                            <div className="">
                                <label className="w-80 text-black text-1xl font-semibold font-['Montserrat']">
                                    Email
                                </label>
                            </div>
                            <input
                                className="mb-[8px] h-11 bg-neutral-200 rounded w-80 text-stone-500 text-opacity-60 text-base font-normal font-['Montserrat']"
                                //className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
                                id="emailmitra"
                                placeholder="Masukan Email Mitra"
                                required
                                type="email"
                            />
                        </div>
                        <div>
                            <div className="">
                                <label className="w-80 text-black text-1xl font-semibold font-['Montserrat']">
                                    Password
                                </label>
                            </div>
                            <input
                                className="mb-[8px] h-11 bg-neutral-200 rounded w-80 text-stone-500 text-opacity-60 text-base font-normal font-['Montserrat']"
                                // className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
                                id="password1"
                                placeholder='Masukan Password '
                                required
                                type="password"
                            />
                        </div>

                        <button type="submit" className='bg-amber-400 hover:bg-amber-500 text-white font-bold w-full mt-3 h-[48px] rounded-lg focus:outline-none focus:shadow-outline"'>
                            Masuk
                        </button>

                    </form>

                </div>
            </div >

        </>

    )
}

export default page
