import SideBar from '@/components/sideBar'
import React from 'react'

function DetailAkun() {
    return (
        <div className='flex'>
            <SideBar detailAkun="ps-3 text-white bg-[#E3B02B]" />
            <div className='h-screen w-screen bg-[#E3B02B]' >
                Detail Akun
            </div>
        </div>
    )
}

export default DetailAkun