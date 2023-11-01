"use client"
import React, { useState } from 'react'
import SideBar from '@/components/sideBar'
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";


function Tambah() {
    const modules = {
        toolbar: {
            container: [
                ["bold", "italic", "underline", "strike", "link"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }], // superscript/subscript
                [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
                [{ direction: "rtl" }], // text direction
                [{ color: [] }, { background: [] }],
                [{ align: [] }],

                ["clean"],
            ],
        },
    };
    const formats = [
        "strike",
        "bold",
        "italic",
        "underline",
        "link",
        "align",
        "direction",
        "list",
        "code-block",
        "script",
        "indent",
        "direction",
        "color",
        "background",
    ];

    const [hotel, setHotel] = useState([
        { kota: "", fasilitas: [], hotel: "", img: "" },
    ]);

    const [jadwal, setJadwal] = useState([
        { hari: "", agenda: "" }]);



    const handleClickHotel = () => {
        setHotel([
            ...hotel,
            { kota: "", fasilitas: [], hotel: "", img: "" },
        ]);
    };
    //   const handleChangeHotel = (e, i) => {
    //     const { name, value } = e.target;
    //     const onchangeVal = [...hotel];
    //     onchangeVal[i][name] = value;
    //     setHotel(onchangeVal);
    //   };
    const handleDeleteHotel = (i: number) => {
        const deleteVal = [...hotel];
        deleteVal.splice(i, 1);
        setHotel(deleteVal);
    };

    const handleClickJadwal = () => {
        setJadwal([
            ...jadwal,
            { hari: "", agenda: "" },
        ]);
    };
    //   const handleChangeHotel = (e, i) => {
    //     const { name, value } = e.target;
    //     const onchangeVal = [...jadwal];
    //     onchangeVal[i][name] = value;
    //     setJadwal(onchangeVal);
    //   };
    const handleDeleteJadwal = (i: number) => {
        const deleteVal = [...jadwal];
        deleteVal.splice(i, 1);
        setJadwal(deleteVal);
    };
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
                            <button className='w-full border border-black mt- hover:bg-slate-200'>
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
                                        type="date"
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
                            <div className='mt-5'>
                                <p className='text-[16px] font-medium'>Kelas Hotel</p>
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
                    <p className='font-semibold text-[20px] mt-5'>Fasilitas</p>
                    <div className='flex w-full gap-10'>
                        <div className='py-3 w-3/6'>
                            <div className=''>
                                <p className='text-[16px] font-medium'>Detail Fasilitas</p>
                                <div className="relative w-full">
                                    <ReactQuill
                                        modules={modules}
                                        formats={formats}
                                        placeholder="Masukkan Detail Fasilitas"
                                        className=" w-full   "
                                    />
                                </div>
                            </div>

                        </div>
                        <div className='py-3 w-3/6'>

                        </div>
                    </div>
                    <p className='font-semibold text-[20px] mt-5'>Detail Hotel</p>


                    {/* Array Form */}

                    {
                        hotel.map((val, i) => {
                            return (
                                <>
                                    <div>
                                        <p className='pt-2 text-[41px] font-semibold'>{i + 1}</p>
                                        <div className='flex w-full gap-10'>
                                            <div className=' w-3/6'>
                                                <div className=''>
                                                    <p className='text-[16px] font-medium'>Kota</p>
                                                    <div className="relative w-full">
                                                        <input
                                                            type="text"
                                                            className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                                                            placeholder="Masukkan Nama Kota"
                                                        />
                                                        <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                                                    </div>
                                                    <div className='mt-5'>
                                                        <p className='text-[16px] font-medium'>Hotel</p>
                                                        <div className="relative w-full">
                                                            <input
                                                                type="text"
                                                                className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                                                                placeholder="Masukkan Nama Hotel"
                                                            />
                                                            <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                                                        </div>
                                                    </div>
                                                    <div className='mt-5'>
                                                        <p className='text-[16px] font-medium'>Fasilitas</p>
                                                        <div className="w-full">
                                                            <div className='flex mt-3'>
                                                                <div className=' w-3/6 flex justify-start'>
                                                                    <div className='flex items-center justify-center gap-2'>

                                                                        <input type="checkbox" id="myCheckbox" className="text-blue-500 w-6 h-6" />
                                                                        <span className="text-black font-medium">Free WiFi</span>
                                                                    </div>
                                                                </div>
                                                                <div className=' w-3/6 flex justify-start'>
                                                                    <div className='flex items-center justify-center gap-2'>

                                                                        <input type="checkbox" id="myCheckbox" className="text-blue-500 w-6 h-6" />
                                                                        <span className="text-black font-medium">Disabilitas</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='flex mt-3'>
                                                                <div className=' w-3/6 flex justify-start'>
                                                                    <div className='flex items-center justify-center gap-2'>

                                                                        <input type="checkbox" id="myCheckbox" className="text-blue-500 w-6 h-6" />
                                                                        <span className="text-black font-medium">Tempat Makan</span>
                                                                    </div>
                                                                </div>
                                                                <div className=' w-3/6'></div>
                                                            </div>
                                                            <div className='flex mt-3'>
                                                                <div className=' w-3/6 flex justify-start'>
                                                                    <div className='flex items-center justify-center gap-2'>

                                                                        <input type="checkbox" id="myCheckbox" className="text-blue-500 w-6 h-6" />
                                                                        <span className="text-black font-medium">Pelayanan Kamar</span>
                                                                    </div>
                                                                </div>
                                                                <div className=' w-3/6'></div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className='py-3 w-3/6'>
                                                <p className='text-[16px] font-medium'>Gambar Hotel</p>
                                                <button className='w-full border border-black mt- hover:bg-slate-200'>
                                                    <div className='w-full h-28 flex flex-col justify-center items-center'>
                                                        <p className='font-semibold text-4xl'>+</p>
                                                        <p className='font-semibold'>Tambah Gambar</p>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-5 w-44 my-3'>
                                            {
                                                hotel.length !== 1 && (

                                                    <button onClick={(e) => handleDeleteHotel(i)} className='bg-red-600 text-white font-medium hover:bg-red-500 px-5 py-2 rounded-md'>Hapus Hotel</button>
                                                )
                                            }

                                        </div>
                                    </div>
                                </>

                            )
                        })
                    }

                    {/* End of Array Form */}

                    {/* Button Add Form Hotel */}
                    <div className='flex flex-col gap-5 w-44 '>

                        <button onClick={handleClickHotel} className='bg-blue-600 text-white font-medium hover:bg-blue-500 px-5 py-2 rounded-md'>Tambah Hotel</button>
                    </div>
                    {/* End Of Button Add Form Hotel */}

                    <p className='font-semibold text-[20px] mt-7'>Jadwal Perjalanan</p>
                    <div className='flex w-full gap-10'>
                        <div className='py-3 w-3/6'>

                            {/* Agenda Array */}
                            {
                                jadwal.map((val, i) => {
                                    return (
                                        <>

                                            <div>
                                                <p className='text-[16px] font-medium'>Hari {i + 1}</p>
                                                <div className="relative w-full">
                                                    <input
                                                        type="text"
                                                        className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                                                        placeholder="Masukkan Agenda"
                                                    />
                                                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                                                </div>
                                                <div className='flex flex-col gap-5 w-44 my-3'>
                                                    {
                                                        jadwal.length !== 1 && (
                                                            <button onClick={(e) => handleDeleteJadwal(i)} className='bg-red-600 text-white font-medium hover:bg-red-500 px-5 py-2 rounded-md'>Hapus Jadwal</button>
                                                        )
                                                    }


                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                            {/* End Of Agenda Array */}

                            {/* Agenda Button */}
                            <div className='flex flex-col gap-5 w-44 mt-3'>

                                <button onClick={handleClickJadwal} className='bg-blue-600 text-white font-medium hover:bg-blue-500 px-5 py-2 rounded-md'>Tambah Jadwal</button>
                            </div>
                            {/* End Of Agenda Button */}

                        </div>
                        <div className='w-3/6'>

                        </div>
                    </div>
                    <p className='font-semibold text-[20px] mt-5'>Syarat dan Ketentuan</p>
                    <div className='flex w-full gap-10'>
                        <div className='py-3 w-3/6'>
                            <div className=''>
                                <p className='text-[16px] font-medium'>Detail Syarat dan Ketentuan</p>
                                <div className="relative w-full">
                                    <ReactQuill
                                        modules={modules}
                                        formats={formats}
                                        placeholder="Masukkan Detail Fasilitas"
                                        className=" w-full   "
                                    />
                                </div>
                            </div>

                        </div>
                        <div className='py-3 w-3/6'>

                        </div>
                    </div>
                    <p className='font-semibold text-[20px] mt-5'>Harga dan Kuota</p>
                    <div className='flex w-full gap-10'>
                        <div className='py-3 w-3/6'>
                            <div>
                                <p className='text-[16px] font-medium'>Harga Paket</p>
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                                        placeholder="Masukkan Harga Paket"
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                                </div>
                                <p className='text-[16px] font-medium mt-5'>Kuota Yang Disediakan</p>
                                <div className="relative w-full ">
                                    <input
                                        type="text"
                                        className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                                        placeholder="Masukkan Jumlah Kuota"
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                                </div>
                            </div>

                        </div>
                        <div className='w-3/6'>

                        </div>
                    </div>
                    <div className='pt-5'>
                        <button className='w-full font-semibold text-xl rounded-md p-3 text-semibold text-white bg-[#E3B02B] hover:bg-[#b18a2a]'>Ubah detail Paket</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tambah