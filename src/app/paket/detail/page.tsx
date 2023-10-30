import React from 'react'
import SideBar from '@/components/sideBar'

function DetailPaket() {
    return (
        <div className='flex '>
            <SideBar paket=" text-white bg-[#E3B02B]" />
            <div className='h-screen w-screen yellow px-[28px] py-[20px] overflow-y-scroll' >
                <p className='font-semibold text-[28px]'>Tambah Paket Baru</p>
                <div className='bg-white rounded-[10px] w-full mt-[20px] p-5'>
                    <p className='font-semibold text-[20px]'>Detail</p>
                    <div className='flex w-full gap-10'>
                        <div className='py-3 w-3/6'>
                            <div>
                                <p className='text-[16px] font-medium'>Nama Paket</p>
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                                        placeholder="Masukkan Nama Paket"
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <p className='text-[16px] font-medium'>Deskripsi Paket</p>
                                <div className="relative w-full">
                                    <textarea
                                        rows={5}
                                        className="border-[1px] border-black p-2 w-full focus:outline-none focus:border-opacity-100"
                                        placeholder="Masukkan Deskripsi Paket"
                                        maxLength={200}
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                                </div>
                            </div>
                        </div>
                        <div className='w-3/6'>
                            <p className='text-[16px] font-medium'>Gambar Sampul</p>
                            <button className='w-full border border-black mt-5 hover:bg-slate-200'>
                                <div className='w-full h-28 flex flex-col justify-center items-center'>
                                    <p className='font-semibold text-4xl'>+</p>
                                    <p className='font-semibold'>Tambah Gambar</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='flex w-full gap-10'>
                        <div className='py-3 w-3/6'>
                            <div className=''>
                                <p className='text-[16px] font-medium'>Pilihan Kamar</p>
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                                        placeholder="Masukkan Pilihan Kamar"
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <p className='text-[16px] font-medium'>Tanggal Keberangkatan</p>
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                                        placeholder="Pilih Tanggal Keberangkatan"
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <p className='text-[16px] font-medium'>Maskapai Pesawat</p>
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                                        placeholder="Masukkan Nama Maskapai"
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <p className='text-[16px] font-medium'>Kota Keberangkatan</p>
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                                        placeholder="Masukkan Nama Kota"
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <p className='text-[16px] font-medium'>Durasi Perjalanan</p>
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                                        placeholder="Masukkan Durasi"
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                                </div>
                            </div>
                        </div>
                        <div className='py-3 w-3/6'>

                        </div>
                    </div>
                </div>








            </div>
        </div>

    )
}

export default DetailPaket