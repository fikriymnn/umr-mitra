import SideBar from '@/components/sideBar'
import React from 'react'

function Order() {
    return (
        <div className='flex'>
            <SideBar order="ps-3 text-white bg-[#E3B02B]" />
            <div className='h-screen w-screen bg-[#E3B02B]' >
                Order
            </div>
        </div>
    )
}

export default Order