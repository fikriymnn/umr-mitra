import React from 'react'

function PackageTableColDtl({ no, title, price, stock, id }: { no?: any, title?: any, price?: any, stock?: any, id: any }) {
    return (
        <div>
            <div className='min-w-full flex gap-3 border-b-2 border-slate-400 mb-2 pb-2'>
                <div className='flex gap-3 w-5/12 '>
                    <div className='text-[20px] w-[60px] line-clamp-1'><p>{no}</p></div>
                    <div className='text-[20px] w-full line-clamp-1'><p>{title}</p></div>
                </div>
                <div className='flex gap-3 w-7/12 justify-between'>
                    <div className='w-full text-[20px] line-clamp-1'><p>{price}</p></div>
                    <div className='w-full  text-[20px] line-clamp-1'><p>{stock}</p></div>
                    <div className='w-[450px] flex gap-3'>
                        <div className='bg-white w-full'>
                            <a href={`/paket/detail?id=${id}`}>
                                <button className='w-full flex justify-center items-center bg-blue-600 text-white px-5 py-1 rounded-md hover:scale-110 duration-100'>Detail</button>
                            </a>
                        </div>


                    </div>
                </div>
            </div>
            <div className='bg-slate-600 min-w-full'>
            </div>

        </div>
    )
}

export default PackageTableColDtl