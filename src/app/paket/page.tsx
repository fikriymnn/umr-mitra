import PackageTableCol from '@/components/PackageTableCol'
import SideBar from '@/components/sideBar'
import React from 'react'

function Paket() {
    return (
        <div className='flex '>
            <SideBar paket=" text-white bg-[#E3B02B]" />
            <div className='h-screen w-screen yellow px-[28px] py-[20px] overflow-y-scroll' >
                <p className='font-semibold text-[28px]'>Daftar Paket</p>
                <div className='bg-white rounded-[10px] w-full mt-[20px] p-5'>
                    <div className='flex justify-between'>

                        <div className=' min-w-full py-3 flex gap-3'>
                            <div className='flex gap-3 w-5/12 '>
                                <input type="text" placeholder='Cari paket' className='rounded-md border-2 border-slate-400 h-full px-2 py-1 w-full' />
                            </div>
                            <div className='flex gap-3 w-7/12 justify-between'>
                                <div className='w-full text-[20px] font-semibold '></div>
                                <div className='w-full  text-[20px] font-semibold '></div>
                                <div className='w-[450px] flex gap-3'>
                                    <button className='hover:scale-110 duration-100 bg-blue-600 w-full text-white px-5 py-1 rounded-md'>Paket Baru</button>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='overflow-x-scroll'>
                        <div className='h-full min-w-full py-3 flex gap-3'>
                            <div className='flex gap-3 w-5/12 '>
                                <div className='text-[20px] font-semibold w-[60px] '>No</div>
                                <div className='text-[20px] font-semibold w-full '>Nama Paket</div>
                            </div>
                            <div className='flex gap-3 w-7/12 justify-between'>
                                <div className='w-full text-[20px] font-semibold '>Harga</div>
                                <div className='w-full  text-[20px] font-semibold '>Kuota Tersisa</div>
                                <div className='w-[450px]  flex gap-3'>


                                </div>
                            </div>
                        </div>
                        <div className='max-h-[500px] overflow-y-scroll border-y-2 border-black py-3'>
                            <PackageTableCol
                                no="1"
                                title="Umroh Dream Exclusive Plus Kereta Cepat 10 Hari"
                                price="39.000.000"
                                stock="58"
                            />
                            <PackageTableCol
                                no="1"
                                title="Umroh Dream Exclusive Plus Kereta Cepat 10 Hari"
                                price="55.555.559"
                                stock="58"
                            />
                            <PackageTableCol
                                no="1"
                                title="Umroh Dream Exclusive Plus Kereta Cepat 10 Hari"
                                price="47.096.000"
                                stock="58"
                            />
                            <PackageTableCol
                                no="2"
                                title="Umroh Exclusive Plus Kereta Cepat 10 Hari"
                                price="50.500.000"
                                stock="58"
                            />
                            <PackageTableCol
                                no="2"
                                title="Umroh Exclusive Plus Kereta Cepat 10 Hari"
                                price="50.500.000"
                                stock="58"
                            />
                            <PackageTableCol
                                no="2"
                                title="Umroh Exclusive Plus Kereta Cepat 10 Hari"
                                price="50.500.000"
                                stock="58"
                            />
                            <PackageTableCol
                                no="2"
                                title="Umroh Exclusive Plus Kereta Cepat 10 Hari"
                                price="50.500.000"
                                stock="58"
                            />
                            <PackageTableCol
                                no="2"
                                title="Umroh Exclusive Plus Kereta Cepat 10 Hari"
                                price="50.500.000"
                                stock="58"
                            />
                            <PackageTableCol
                                no="2"
                                title="Umroh Exclusive Plus Kereta Cepat 10 Hari"
                                price="50.500.000"
                                stock="58"
                            />
                            <PackageTableCol
                                no="3"
                                title="Umroh Non Exclusive Plus Kereta Cepat 10 Hari"
                                price="39.999.999"
                                stock="58"
                            />
                            <PackageTableCol
                                no="4"
                                title="Umroh Plus 10 Hari"
                                price="71.890.000"
                                stock="58"
                            />
                            <PackageTableCol
                                no="5"
                                title="Umroh saja"
                                price="47.000.000"
                                stock="58"
                            />
                            <PackageTableCol
                                no="1"
                                title="Umroh Dream Exclusive Plus Kereta Cepat 10 Hari"
                                price="55.555.559"
                                stock="58"
                            />
                            <PackageTableCol
                                no="1"
                                title="Umroh Dream Exclusive Plus Kereta Cepat 10 Hari"
                                price="55.555.559"
                                stock="58"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paket