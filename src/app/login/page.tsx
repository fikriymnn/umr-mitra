"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

function Page() {
  const { push } = useRouter();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const url = "http://localhost:5000/api/login_mitra";

  async function submitLogin(e: any) {
    e.preventDefault();
    try {
      const response = await axios.post(
        url,
        { email: Email, password: Password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      alert("login success");
      push("/dashboard");

    } catch (error: any) {
      alert(error.response.data.message);
    }
  }
  return (
    <>
      <div className="w-screen h-screen">
        <div className="bg-[url('/bglogin.png')] bg-cover bg-center w-full h-full">
          <div className="flex ml-[143px] p-[28px]">
            <label className="text-black text-4xl font-extrabold">
              Mitra Ibadahku
            </label>
          </div>
          <div className="flex ml-[166px] mt-[130px] text-black text-4xl font-bold ">
            <label>Selamat Datang !</label>
          </div>
          <div className="flex ml-[164px] mt-[2px]  text-black text-xl font-semibold ">
            <label>Masukan Akun Mitra Ibadahku</label>
          </div>
          <div className="flex mt-[28px] ml-[154px] mr-[881px]">
            <form
              onSubmit={submitLogin}
              className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
            >
              <div>
                <div className=" ">
                  <label className="w-80 text-black text-1xl font-semibold ">
                    Nama Mitra
                  </label>
                </div>
                <input
                  className="mb-[8px] h-11 bg-neutral-200 rounded w-80 text-stone-500 text-opacity-60 text-base font-normal "
                  id="namamitra"
                  placeholder="  Masukan Nama Mitra"
                  required
                  type="text"
                  style={{ paddingLeft: '10px' }}
                />
              </div>
              <div>
                <div className="">
                  <label className="w-80 text-black text-1xl font-semibold ">
                    Email
                  </label>
                </div>
                <input
                  className="mb-[8px] h-11 bg-neutral-200 rounded w-80 text-stone-500 text-opacity-60 text-base font-normal"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukan Email Mitra"
                  required
                  type="email"
                  style={{ paddingLeft: '10px' }}
                />
              </div>
              <div>
                <div className="">
                  <label className="w-80 text-black text-1xl font-semibold">
                    Password
                  </label>
                </div>
                <input
                  className="mb-[8px] h-11 bg-neutral-200 rounded w-80 text-stone-500 text-opacity-60 text-base font-normal "
                  onChange={(e) => setPassword(e.target.value)}
                  id="password1"
                  placeholder="Masukan Password "
                  required
                  type="password"
                  style={{ paddingLeft: '10px' }}
                />
              </div>

              <button
                type="submit"
                className='bg-amber-400  text-white font-bold w-full mt-3 h-[48px] rounded-lg focus:outline-none focus:shadow-outline"'
              >
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
