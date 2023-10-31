import ContentTableOrder from '@/components/order/contentTable'
import SideBar from '@/components/sideBar'
import React from 'react'

function Order() {
    return (
        <div className='flex '>
            <SideBar order=" text-white bg-[#E3B02B]" />
            <div className='h-screen w-screen yellow px-[28px] py-[20px] overflow-y-scroll' >
                <p className='font-semibold text-[28px]'>Daftar Order</p>
                <div className='bg-white rounded-[10px] w-full mt-[20px] p-5'>
                    <div className='flex justify-between'>

                        <div className=' min-w-full py-3 flex gap-3'>
                            <div className='flex gap-3 w-5/12 '>
                                <input type="text" placeholder='Cari Pemesan' className='rounded-md border-2 border-slate-400 h-full px-2 py-1 w-full' />
                            </div>
                            <div className='flex gap-3 w-7/12 justify-between'>
                                <div className='w-full text-[20px] font-semibold '></div>
                                <div className='w-full  text-[20px] font-semibold '></div>
                                <div className='w-[850px] flex gap-3'>
                                    <button className='hover:scale-110 duration-100 yellow w-full text-white px-5 py-1 rounded-md'>Status</button>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='overflow-x-scroll'>
                        <div className='h-full min-w-full py-3 flex gap-3'>
                            <div className='flex gap-3 w-6/12 '>
                                <div className='text-[20px] font-semibold w-[60px] '>No</div>
                                <div className='text-[20px] font-semibold w-full '>Nama Pemesan</div>
                                <div className='w-full text-[20px] font-semibold '>Jumlah Jamaah</div>
                            </div>
                            <div className='flex gap-3 w-6/12 justify-between'>

                                <div className='w-full  text-[20px] font-semibold '>Paket</div>
                                <div className='w-[450px]  flex gap-3 text-[20px] font-semibold'>
                                    Status
                                </div>
                            </div>
                        </div>
                        <div className='max-h-[500px] overflow-y-scroll border-y-2 border-black py-3'>
                            <ContentTableOrder no={"1"} name={"Acep wahyu Kurna"} jumlah={"4"} paket={"Paket umroh untuk kalangan atas"} />


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order