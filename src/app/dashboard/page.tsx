import SideBar from '@/components/sideBar'
import React from 'react'

function Dashboard() {
    return (
        <div className='flex'>
            <SideBar dashboard="ps-3 text-white bg-[#E3B02B]" />
            <div className='h-screen w-screen bg-[#E3B02B]' >
                Dashboard
            </div>
        </div>
    )
}

export default Dashboard