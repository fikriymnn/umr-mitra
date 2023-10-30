"use client"
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";


export default function SideBar({ dashboard, detailAkun, order, paket }: { dashboard?: any, detailAkun?: any, order?: any, paket?: any }
) {

    const [bar, setBar] = useState(1);
    const toggleBar = () => {
        setBar((prevBar) => (prevBar === 1 ? 0 : 1));
    };
    const { push } = useRouter();
    return (
        <div className="z-40 ">
            <div
                className={`${bar == 1
                    ? " w-[252px] duration-100 ease-in-out"
                    : " w-[80px] duration-100 ease-in-out"
                    } h-full  flex-col text-black bg-white`}
            >


                <div className="w-full pt-[38px] pb-[33px] px-[25px] ">
                    <button className="w-full h-full" onClick={toggleBar}>
                        {bar === 0 ? (
                            <div className="text-[40px] font-[800] text-black">I</div>
                        ) : (
                            <>
                                <div className="text-[40px] font-[800] text-black">Ibadahku</div>
                            </>
                        )}
                    </button>
                </div>

                <div className="flex flex-col justify-between ">
                    <div>


                        <a href="/dashboard">
                            <button

                                className={`${bar == 1
                                    ? "ms-[18px] justify-start items-center"
                                    : "ms-2 justify-center items-center"
                                    } w-full  h-[58px] flex my-3  mb-[24px] hover:ps-3
                            rounded-[10px_0px_0px_10px] hover:bg-[#E3B02B] shrink-0 hover:text-white duration-200 ease-in-out ${dashboard}`}
                            >
                                {bar === 0 ? (
                                    <div className="w-10">
                                        <svg width="20" height="20" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.0001 6.02393L11.0001 0.763932C10.4501 0.271977 9.73803 0 9.00009 0C8.26216 0 7.55012 0.271977 7.00009 0.763932L1.00009 6.02393C0.682463 6.30801 0.428995 6.65649 0.256567 7.04618C0.0841385 7.43586 -0.00329256 7.85781 9.47941e-05 8.28393V17.0239C9.47941e-05 17.8196 0.316165 18.5826 0.878775 19.1453C1.44138 19.7079 2.20445 20.0239 3.00009 20.0239H15.0001C15.7957 20.0239 16.5588 19.7079 17.1214 19.1453C17.684 18.5826 18.0001 17.8196 18.0001 17.0239V8.27393C18.0021 7.84949 17.9139 7.42947 17.7416 7.04161C17.5692 6.65375 17.3165 6.30689 17.0001 6.02393ZM11.0001 18.0239H7.00009V13.0239C7.00009 12.7587 7.10545 12.5044 7.29299 12.3168C7.48052 12.1293 7.73488 12.0239 8.00009 12.0239H10.0001C10.2653 12.0239 10.5197 12.1293 10.7072 12.3168C10.8947 12.5044 11.0001 12.7587 11.0001 13.0239V18.0239ZM16.0001 17.0239C16.0001 17.2891 15.8947 17.5435 15.7072 17.731C15.5197 17.9186 15.2653 18.0239 15.0001 18.0239H13.0001V13.0239C13.0001 12.2283 12.684 11.4652 12.1214 10.9026C11.5588 10.34 10.7957 10.0239 10.0001 10.0239H8.00009C7.20444 10.0239 6.44138 10.34 5.87877 10.9026C5.31616 11.4652 5.00009 12.2283 5.00009 13.0239V18.0239H3.00009C2.73488 18.0239 2.48052 17.9186 2.29299 17.731C2.10545 17.5435 2.00009 17.2891 2.00009 17.0239V8.27393C2.00027 8.13195 2.03069 7.99163 2.08931 7.86231C2.14794 7.73299 2.23343 7.61764 2.3401 7.52393L8.34009 2.27393C8.52258 2.11361 8.75719 2.0252 9.00009 2.0252C9.243 2.0252 9.47761 2.11361 9.66009 2.27393L15.6601 7.52393C15.7668 7.61764 15.8523 7.73299 15.9109 7.86231C15.9695 7.99163 15.9999 8.13195 16.0001 8.27393V17.0239Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex gap-[15px] justify-center items-center ml-[12px] ">
                                        <div className=" ">
                                            <svg width="20" height="20" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.0001 6.02393L11.0001 0.763932C10.4501 0.271977 9.73803 0 9.00009 0C8.26216 0 7.55012 0.271977 7.00009 0.763932L1.00009 6.02393C0.682463 6.30801 0.428995 6.65649 0.256567 7.04618C0.0841385 7.43586 -0.00329256 7.85781 9.47941e-05 8.28393V17.0239C9.47941e-05 17.8196 0.316165 18.5826 0.878775 19.1453C1.44138 19.7079 2.20445 20.0239 3.00009 20.0239H15.0001C15.7957 20.0239 16.5588 19.7079 17.1214 19.1453C17.684 18.5826 18.0001 17.8196 18.0001 17.0239V8.27393C18.0021 7.84949 17.9139 7.42947 17.7416 7.04161C17.5692 6.65375 17.3165 6.30689 17.0001 6.02393ZM11.0001 18.0239H7.00009V13.0239C7.00009 12.7587 7.10545 12.5044 7.29299 12.3168C7.48052 12.1293 7.73488 12.0239 8.00009 12.0239H10.0001C10.2653 12.0239 10.5197 12.1293 10.7072 12.3168C10.8947 12.5044 11.0001 12.7587 11.0001 13.0239V18.0239ZM16.0001 17.0239C16.0001 17.2891 15.8947 17.5435 15.7072 17.731C15.5197 17.9186 15.2653 18.0239 15.0001 18.0239H13.0001V13.0239C13.0001 12.2283 12.684 11.4652 12.1214 10.9026C11.5588 10.34 10.7957 10.0239 10.0001 10.0239H8.00009C7.20444 10.0239 6.44138 10.34 5.87877 10.9026C5.31616 11.4652 5.00009 12.2283 5.00009 13.0239V18.0239H3.00009C2.73488 18.0239 2.48052 17.9186 2.29299 17.731C2.10545 17.5435 2.00009 17.2891 2.00009 17.0239V8.27393C2.00027 8.13195 2.03069 7.99163 2.08931 7.86231C2.14794 7.73299 2.23343 7.61764 2.3401 7.52393L8.34009 2.27393C8.52258 2.11361 8.75719 2.0252 9.00009 2.0252C9.243 2.0252 9.47761 2.11361 9.66009 2.27393L15.6601 7.52393C15.7668 7.61764 15.8523 7.73299 15.9109 7.86231C15.9695 7.99163 15.9999 8.13195 16.0001 8.27393V17.0239Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <div className="flex items-center justify-center font-[600] text-[24px]">
                                            <p>Dashboard</p>
                                        </div>
                                    </div>
                                )}
                            </button>
                        </a>
                        <a href="/detailAkun">
                            <button

                                className={`${bar == 1
                                    ? "ms-[18px] justify-start items-center"
                                    : "ms-2 justify-center items-center"
                                    } w-full  h-[58px] flex my-3  mb-[24px] hover:ps-3
                            rounded-[10px_0px_0px_10px] hover:bg-[#E3B02B] shrink-0 hover:text-white duration-200 ease-in-out ${detailAkun}`}
                            >
                                {bar === 0 ? (
                                    <div className="w-10">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34874 18.9425 4.80691 17.0678 2.93219C15.1931 1.05746 12.6513 0.00294858 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C17.9976 12.121 17.1539 14.1544 15.6542 15.6542C14.1544 17.1539 12.121 17.9976 10 18ZM10 9.5C9.73479 9.5 9.48043 9.60536 9.2929 9.79289C9.10536 9.98043 9 10.2348 9 10.5V13.5C9 13.7652 9.10536 14.0196 9.2929 14.2071C9.48043 14.3946 9.73479 14.5 10 14.5C10.2652 14.5 10.5196 14.3946 10.7071 14.2071C10.8946 14.0196 11 13.7652 11 13.5V10.5C11 10.2348 10.8946 9.98043 10.7071 9.79289C10.5196 9.60536 10.2652 9.5 10 9.5ZM10 5.5C9.75278 5.5 9.5111 5.57331 9.30554 5.71066C9.09998 5.84801 8.93976 6.04324 8.84516 6.27165C8.75055 6.50005 8.72579 6.75139 8.77402 6.99386C8.82225 7.23634 8.94131 7.45907 9.11612 7.63388C9.29094 7.8087 9.51367 7.92775 9.75614 7.97598C9.99862 8.02421 10.25 7.99946 10.4784 7.90485C10.7068 7.81024 10.902 7.65002 11.0393 7.44446C11.1767 7.2389 11.25 6.99723 11.25 6.75C11.25 6.41848 11.1183 6.10054 10.8839 5.86612C10.6495 5.6317 10.3315 5.5 10 5.5Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex gap-[15px] justify-center items-center ml-[12px] ">
                                        <div className=" ">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34874 18.9425 4.80691 17.0678 2.93219C15.1931 1.05746 12.6513 0.00294858 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C17.9976 12.121 17.1539 14.1544 15.6542 15.6542C14.1544 17.1539 12.121 17.9976 10 18ZM10 9.5C9.73479 9.5 9.48043 9.60536 9.2929 9.79289C9.10536 9.98043 9 10.2348 9 10.5V13.5C9 13.7652 9.10536 14.0196 9.2929 14.2071C9.48043 14.3946 9.73479 14.5 10 14.5C10.2652 14.5 10.5196 14.3946 10.7071 14.2071C10.8946 14.0196 11 13.7652 11 13.5V10.5C11 10.2348 10.8946 9.98043 10.7071 9.79289C10.5196 9.60536 10.2652 9.5 10 9.5ZM10 5.5C9.75278 5.5 9.5111 5.57331 9.30554 5.71066C9.09998 5.84801 8.93976 6.04324 8.84516 6.27165C8.75055 6.50005 8.72579 6.75139 8.77402 6.99386C8.82225 7.23634 8.94131 7.45907 9.11612 7.63388C9.29094 7.8087 9.51367 7.92775 9.75614 7.97598C9.99862 8.02421 10.25 7.99946 10.4784 7.90485C10.7068 7.81024 10.902 7.65002 11.0393 7.44446C11.1767 7.2389 11.25 6.99723 11.25 6.75C11.25 6.41848 11.1183 6.10054 10.8839 5.86612C10.6495 5.6317 10.3315 5.5 10 5.5Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <div className="flex items-center justify-center font-[600] text-[24px]">
                                            <p>Detail Akun</p>
                                        </div>
                                    </div>
                                )}
                            </button>
                        </a>
                        <a href="/paket">
                            <button

                                className={`${bar == 1
                                    ? "ms-[18px] justify-start items-center"
                                    : "ms-2 justify-center items-center"
                                    } w-full  h-[58px] flex my-3  mb-[24px] hover:ps-3
                            rounded-[10px_0px_0px_10px] hover:bg-[#E3B02B] shrink-0 hover:text-white duration-200 ease-in-out ${paket}`}
                            >
                                {bar === 0 ? (
                                    <div className="w-10">
                                        <svg width="20" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.8873 5.53119C16.8816 5.50482 16.8816 5.47755 16.8873 5.45119C16.8824 5.42811 16.8824 5.40427 16.8873 5.38119V5.29119L16.8273 5.14119C16.8029 5.10026 16.7726 5.06319 16.7373 5.03119L16.6473 4.95119H16.5973L12.6573 2.46119L8.93728 0.161189C8.85122 0.0929191 8.75274 0.0419794 8.64728 0.0111891H8.56728C8.4779 -0.00372972 8.38667 -0.00372972 8.29728 0.0111891H8.19728C8.08113 0.0368814 7.96976 0.0807551 7.86729 0.141189L0.397285 4.79119L0.307285 4.86119L0.217285 4.94119L0.117285 5.01119L0.067285 5.07119L0.00728483 5.22119V5.31119V5.37119C-0.00242828 5.4375 -0.00242828 5.50488 0.00728483 5.57119V14.3012C0.00694475 14.4711 0.049921 14.6384 0.132156 14.7871C0.214391 14.9358 0.333172 15.0611 0.477285 15.1512L7.97728 19.7912L8.12728 19.8512H8.20728C8.37647 19.9048 8.5581 19.9048 8.72728 19.8512H8.80728L8.95728 19.7912L16.3973 15.2212C16.5414 15.1311 16.6602 15.0058 16.7424 14.8571C16.8246 14.7084 16.8676 14.5411 16.8673 14.3712V5.64119C16.8673 5.64119 16.8873 5.57119 16.8873 5.53119ZM8.39728 2.18119L10.1773 3.28119L4.58728 6.74119L2.79729 5.64119L8.39728 2.18119ZM7.39728 17.1812L1.89728 13.8212V7.43119L7.39728 10.8312V17.1812ZM8.39728 9.07119L6.48729 7.92119L12.0773 4.45119L13.9973 5.64119L8.39728 9.07119ZM14.8973 13.7912L9.39728 17.2112V10.8312L14.8973 7.43119V13.7912Z" fill="currentColor" />
                                        </svg>

                                    </div>
                                ) : (
                                    <div className="flex gap-[15px] justify-center items-center ml-[12px] ">
                                        <div className=" ">
                                            <svg width="20" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.8873 5.53119C16.8816 5.50482 16.8816 5.47755 16.8873 5.45119C16.8824 5.42811 16.8824 5.40427 16.8873 5.38119V5.29119L16.8273 5.14119C16.8029 5.10026 16.7726 5.06319 16.7373 5.03119L16.6473 4.95119H16.5973L12.6573 2.46119L8.93728 0.161189C8.85122 0.0929191 8.75274 0.0419794 8.64728 0.0111891H8.56728C8.4779 -0.00372972 8.38667 -0.00372972 8.29728 0.0111891H8.19728C8.08113 0.0368814 7.96976 0.0807551 7.86729 0.141189L0.397285 4.79119L0.307285 4.86119L0.217285 4.94119L0.117285 5.01119L0.067285 5.07119L0.00728483 5.22119V5.31119V5.37119C-0.00242828 5.4375 -0.00242828 5.50488 0.00728483 5.57119V14.3012C0.00694475 14.4711 0.049921 14.6384 0.132156 14.7871C0.214391 14.9358 0.333172 15.0611 0.477285 15.1512L7.97728 19.7912L8.12728 19.8512H8.20728C8.37647 19.9048 8.5581 19.9048 8.72728 19.8512H8.80728L8.95728 19.7912L16.3973 15.2212C16.5414 15.1311 16.6602 15.0058 16.7424 14.8571C16.8246 14.7084 16.8676 14.5411 16.8673 14.3712V5.64119C16.8673 5.64119 16.8873 5.57119 16.8873 5.53119ZM8.39728 2.18119L10.1773 3.28119L4.58728 6.74119L2.79729 5.64119L8.39728 2.18119ZM7.39728 17.1812L1.89728 13.8212V7.43119L7.39728 10.8312V17.1812ZM8.39728 9.07119L6.48729 7.92119L12.0773 4.45119L13.9973 5.64119L8.39728 9.07119ZM14.8973 13.7912L9.39728 17.2112V10.8312L14.8973 7.43119V13.7912Z" fill="currentColor" />
                                            </svg>

                                        </div>
                                        <div className="flex items-center justify-center font-[600] text-[24px]">
                                            <p>Paket</p>
                                        </div>
                                    </div>
                                )}
                            </button>
                        </a>
                        <a href="/order">
                            <button

                                className={`${bar == 1
                                    ? "ms-[18px] justify-start items-center"
                                    : "ms-2 justify-center items-center"
                                    } w-full  h-[58px] flex my-3  mb-[24px] hover:ps-3
                            rounded-[10px_0px_0px_10px] hover:bg-[#E3B02B] shrink-0 hover:text-white duration-200 ease-in-out ${order}`}
                            >
                                {bar === 0 ? (
                                    <div className="w-10">
                                        <svg width="20" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 8H14C13.7348 8 13.4804 8.10536 13.2929 8.29289C13.1054 8.48043 13 8.73478 13 9C13 9.26522 13.1054 9.51957 13.2929 9.70711C13.4804 9.89464 13.7348 10 14 10H15C15.2652 10 15.5196 9.89464 15.7071 9.70711C15.8946 9.51957 16 9.26522 16 9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8ZM15 12H14C13.7348 12 13.4804 12.1054 13.2929 12.2929C13.1054 12.4804 13 12.7348 13 13C13 13.2652 13.1054 13.5196 13.2929 13.7071C13.4804 13.8946 13.7348 14 14 14H15C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13C16 12.7348 15.8946 12.4804 15.7071 12.2929C15.5196 12.1054 15.2652 12 15 12ZM9 6H15C15.2652 6 15.5196 5.89464 15.7071 5.70711C15.8946 5.51957 16 5.26522 16 5C16 4.73478 15.8946 4.48043 15.7071 4.29289C15.5196 4.10536 15.2652 4 15 4H9C8.73478 4 8.48043 4.10536 8.29289 4.29289C8.10536 4.48043 8 4.73478 8 5C8 5.26522 8.10536 5.51957 8.29289 5.70711C8.48043 5.89464 8.73478 6 9 6ZM19 0H5C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H16C17.0609 18 18.0783 17.5786 18.8284 16.8284C19.5786 16.0783 20 15.0609 20 14V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0ZM4 15C4 15.2652 3.89464 15.5196 3.70711 15.7071C3.51957 15.8946 3.26522 16 3 16C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V6H4V15ZM18 14C18 14.5304 17.7893 15.0391 17.4142 15.4142C17.0391 15.7893 16.5304 16 16 16H5.82C5.93642 15.6793 5.9973 15.3411 6 15V2H18V14ZM9 10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9C11 8.73478 10.8946 8.48043 10.7071 8.29289C10.5196 8.10536 10.2652 8 10 8H9C8.73478 8 8.48043 8.10536 8.29289 8.29289C8.10536 8.48043 8 8.73478 8 9C8 9.26522 8.10536 9.51957 8.29289 9.70711C8.48043 9.89464 8.73478 10 9 10ZM9 14H10C10.2652 14 10.5196 13.8946 10.7071 13.7071C10.8946 13.5196 11 13.2652 11 13C11 12.7348 10.8946 12.4804 10.7071 12.2929C10.5196 12.1054 10.2652 12 10 12H9C8.73478 12 8.48043 12.1054 8.29289 12.2929C8.10536 12.4804 8 12.7348 8 13C8 13.2652 8.10536 13.5196 8.29289 13.7071C8.48043 13.8946 8.73478 14 9 14Z" fill="currentColor" />
                                        </svg>

                                    </div>
                                ) : (
                                    <div className="flex gap-[15px] justify-center items-center ml-[12px] ">
                                        <div className=" ">
                                            <svg width="20" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 8H14C13.7348 8 13.4804 8.10536 13.2929 8.29289C13.1054 8.48043 13 8.73478 13 9C13 9.26522 13.1054 9.51957 13.2929 9.70711C13.4804 9.89464 13.7348 10 14 10H15C15.2652 10 15.5196 9.89464 15.7071 9.70711C15.8946 9.51957 16 9.26522 16 9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8ZM15 12H14C13.7348 12 13.4804 12.1054 13.2929 12.2929C13.1054 12.4804 13 12.7348 13 13C13 13.2652 13.1054 13.5196 13.2929 13.7071C13.4804 13.8946 13.7348 14 14 14H15C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13C16 12.7348 15.8946 12.4804 15.7071 12.2929C15.5196 12.1054 15.2652 12 15 12ZM9 6H15C15.2652 6 15.5196 5.89464 15.7071 5.70711C15.8946 5.51957 16 5.26522 16 5C16 4.73478 15.8946 4.48043 15.7071 4.29289C15.5196 4.10536 15.2652 4 15 4H9C8.73478 4 8.48043 4.10536 8.29289 4.29289C8.10536 4.48043 8 4.73478 8 5C8 5.26522 8.10536 5.51957 8.29289 5.70711C8.48043 5.89464 8.73478 6 9 6ZM19 0H5C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H16C17.0609 18 18.0783 17.5786 18.8284 16.8284C19.5786 16.0783 20 15.0609 20 14V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0ZM4 15C4 15.2652 3.89464 15.5196 3.70711 15.7071C3.51957 15.8946 3.26522 16 3 16C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V6H4V15ZM18 14C18 14.5304 17.7893 15.0391 17.4142 15.4142C17.0391 15.7893 16.5304 16 16 16H5.82C5.93642 15.6793 5.9973 15.3411 6 15V2H18V14ZM9 10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9C11 8.73478 10.8946 8.48043 10.7071 8.29289C10.5196 8.10536 10.2652 8 10 8H9C8.73478 8 8.48043 8.10536 8.29289 8.29289C8.10536 8.48043 8 8.73478 8 9C8 9.26522 8.10536 9.51957 8.29289 9.70711C8.48043 9.89464 8.73478 10 9 10ZM9 14H10C10.2652 14 10.5196 13.8946 10.7071 13.7071C10.8946 13.5196 11 13.2652 11 13C11 12.7348 10.8946 12.4804 10.7071 12.2929C10.5196 12.1054 10.2652 12 10 12H9C8.73478 12 8.48043 12.1054 8.29289 12.2929C8.10536 12.4804 8 12.7348 8 13C8 13.2652 8.10536 13.5196 8.29289 13.7071C8.48043 13.8946 8.73478 14 9 14Z" fill="currentColor" />
                                            </svg>

                                        </div>
                                        <div className="flex items-center justify-center font-[600] text-[24px]">
                                            <p>Order</p>
                                        </div>
                                    </div>
                                )}
                            </button>
                        </a>
                    </div>
                    <button
                        className={`${bar == 1
                            ? "ms-5 justify-start items-center"
                            : "ms-2 justify-center items-center"
                            } w-[175px] h-[58px] duration-100 hover:translate-y-[-10px]  `}
                        onClick={() => {

                        }}
                    >
                        {bar === 0 ? (
                            <div className=" w-16  h-[58px] bg-red-600 text-white p-2 pe-3 shrink-0 rounded-[10px] flex gap-2 items-center justify-center">
                                <svg
                                    fill="none"
                                    width="20px"
                                    height="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.5,15.1a1,1,0,0,0-1.34.45A8,8,0,1,1,12,4a7.93,7.93,0,0,1,7.16,4.45,1,1,0,0,0,1.8-.9,10,10,0,1,0,0,8.9A1,1,0,0,0,20.5,15.1ZM21,11H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H21a1,1,0,0,0,0-2Z" fill="currentColor" />
                                    </svg>
                                </svg>
                            </div>
                        ) : (
                            <div className=" bg-red-600 text-white p-2 pe-3 shrink-0 rounded-[10px] flex gap-2 items-center justify-center 
                        w-[175px] h-[58px]">
                                <div className="w-8">
                                    <svg
                                        fill="none"

                                        width="20px"
                                        height="20px"

                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <svg
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.5,15.1a1,1,0,0,0-1.34.45A8,8,0,1,1,12,4a7.93,7.93,0,0,1,7.16,4.45,1,1,0,0,0,1.8-.9,10,10,0,1,0,0,8.9A1,1,0,0,0,20.5,15.1ZM21,11H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H21a1,1,0,0,0,0-2Z" fill="currentColor" />
                                        </svg>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center font-semibold">
                                    <p>Log Out</p>
                                </div>
                            </div>
                        )}
                    </button>
                </div>

            </div>
        </div>
    );
}
