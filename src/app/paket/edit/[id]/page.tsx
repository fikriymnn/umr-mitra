"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import SideBar from "@/components/sideBar";
import axios from "axios";
import Image from "next/image";
import {
  getStorage,
  deleteObject,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "@/database/db";

function EditPaket({ params }: { params: any }) {
  //State value
  const [title, setTitle] = useState("");
  const [content, setContent] = useState([{ img: "", name: "" }]);
  const [category, setCategory] = useState("");
  const [jenisKeberangkatan, setJenisKeberangkatan] = useState("");
  const [description, setDescription] = useState("");
  const [pilihanKamar, setPilihanKamar] = useState("");
  const [waktuKeberangkatan, setWaktuKeberangkatan] = useState<string>();
  const [maskapai, setMaskapai] = useState("");
  const [kotaKeberangkatan, setKotaKeberangkatan] = useState("");
  const [durasi, setDurasi] = useState("");
  const [kelasHotel, setKelasHotel] = useState<number>();
  const [fasillitas, setFasillitas] = useState("");
  const [syarat, setSyarat] = useState("");
  const [harga, setHarga] = useState<number>();
  const [kuota, setKuota] = useState<number>();
  const [sisaKuota, setSisaKuota] = useState<number>();
  const [jadwal, setJadwal] = useState([{ hari: "Hari 1", agenda: "" }]);
  const [TahapPembayaran, setTahapPembayaran] = useState([
    { tahap: "", tanggal: "", price: "" },
  ]);
  const [hotel, setHotel] = useState([
    {
      city: "",
      fasilitas: {
        FreeWiFi: false,
        TempatMakan: false,
        PelayananKamar: false,
        Disabilitas: false,
      },
      name: "",
      content: [{ img: "", name: "" }],
    },
  ]);

  useEffect(() => {
    getDetailPaket(params.id);
  }, [params.id]);

  async function getDetailPaket(idd: any) {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/paket/${idd}`
      );
      if (res.data.success == true) {
        let data = res.data.data;
        setTitle(data.title);
        setContent(data.content_carousel);
        setCategory(data.category_paket);
        setJenisKeberangkatan(data.jenis_keberangkatan);
        setDescription(data.description);
        setPilihanKamar(data.pilihan_kamar);
        setWaktuKeberangkatan(data.waktu_keberangkatan);
        setMaskapai(data.maskapai_penerbangan);
        setKotaKeberangkatan(data.kota_keberangkatan);
        setDurasi(data.durasi_perjalanan);
        setKelasHotel(data.rating_hotel);
        setFasillitas(data.fasilitas_umroh);
        setSyarat(data.syarat_ketentuan);
        setHarga(data.price);
        setKuota(data.kuota);
        setJadwal(data.jadwal);
        setHotel(data.hotel);
        setTahapPembayaran(data.tahap_pembayaran);
        setSisaKuota(data.sisa_kuota)
      }
    } catch (error: any) {
      console.log(error.response);
    }
  }

  //handle image upload content carousel
  async function changeImageContent(e: any, event: any, i: any) {
    e.preventDefault();
    const onchangeVal = [...content];
    // get the selected file from the input
    const file = event.target.files[0];
    const fileName = file.name + "   " + new Date();

    try {
      const storageRef = ref(storage, `/paket/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (err) => console.log(err),
        () => {
          // download url

          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            onchangeVal[i]["img"] = url;

            onchangeVal[i]["name"] = fileName;
            setContent(onchangeVal);
          });
        }
      );
    } catch (error: any) {
      alert(error.response.data.message);
      console.log(error);
    }
  }

  //handle image delete content carousel
  async function deleteContent(e: any, i: any, name: any) {
    e.preventDefault();
    const onchangeVal = [...content];
    const storage = getStorage();
    // Create a reference to the file to delete
    const desertRef = ref(storage, "paket/" + name);
    try {
      deleteObject(desertRef);
      onchangeVal[i]["img"] = "";
      onchangeVal[i]["name"] = "";
      setContent(onchangeVal);
      console.log("berhasil");
    } catch (error: any) {
      alert(error.response.data.message);
    }
  }

  //handle image upload content hotel
  async function changeImage(e: any, event: any, i: any, ii: any) {
    e.preventDefault();
    const onchangeVal = [...hotel];

    const file = event.target.files[0];
    const fileName = file.name + "   " + new Date();

    try {
      const storageRef = ref(storage, `/hotel/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (err) => console.log(err),
        () => {
          // download url

          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            onchangeVal[i]["content"][ii]["img"] = url;
            onchangeVal[i]["content"][ii]["name"] = fileName;

            setHotel(onchangeVal);
          });
        }
      );
    } catch (error: any) {
      alert(error.response.data.message);
      console.log(error);
    }
  }

  //handle image delete content hotel
  async function deleteImage(e: any, event: any, i: any, ii: any, name: any) {
    e.preventDefault();
    const onchangeVal = [...hotel];

    const storage = getStorage();
    // Create a reference to the file to delete
    const desertRef = ref(storage, "hotel/" + name);
    try {
      deleteObject(desertRef);
      onchangeVal[i]["content"][ii]["img"] = "";
      onchangeVal[i]["content"][ii]["name"] = "";
      setHotel(onchangeVal);
      console.log("berhasil");
    } catch (error: any) {
      alert(error.response.data.message);
    }
  }

  //add content carousel
  const handleClickContent = () => {
    const onchangeVal = [...content];
    onchangeVal.push({ img: "", name: "" });
    setContent(onchangeVal);
  };
  //delete content carousel
  const handleDeleteContent = (ii: any) => {
    const deleteVal = [...content];
    deleteVal.splice(ii, 1);
    setContent(deleteVal);
  };

  //dinamis hotel
  //add hotel
  const handleClickHotel = () => {
    setHotel([
      ...hotel,
      {
        city: "",
        fasilitas: {
          FreeWiFi: false,
          TempatMakan: false,
          PelayananKamar: false,
          Disabilitas: false,
        },
        name: "",
        content: [{ img: "", name: "" }],
      },
    ]);
  };
  //change value hotel
  const handleChangeHotel = (e: any, i: number) => {
    const { name, value } = e.target;
    const onchangeVal: any = [...hotel];
    onchangeVal[i][name] = value;
    setHotel(onchangeVal);
  };
  //chage value hotel fasilitas
  const handleChangeHotelFasilitas = (e: any, i: number, fasilitass: any) => {
    const fs = fasilitass;
    const onchangeVal: any = [...hotel];
    if (fs == "FreeWiFi") {
      onchangeVal[i]["fasilitas"].FreeWiFi = e;
      setHotel(onchangeVal);
    } else if (fs == "Disabilitas") {
      onchangeVal[i]["fasilitas"].Disabilitas = e;
      setHotel(onchangeVal);
    } else if (fs == "TempatMakan") {
      onchangeVal[i]["fasilitas"].TempatMakan = e;
      setHotel(onchangeVal);
    } else if (fs == "PelayananKamar") {
      onchangeVal[i]["fasilitas"].PelayananKamar = e;
      setHotel(onchangeVal);
    }
  };
  //delete hotel
  const handleDeleteHotel = (i: number) => {
    const deleteVal: any = [...hotel];
    deleteVal.splice(i, 1);
    setHotel(deleteVal);
  };
  //add image in hotel dinamis
  const handleClickImg = (i: any) => {
    const onchangeVal = [...hotel];
    onchangeVal[i]["content"].push({ img: "", name: "" });
    setHotel(onchangeVal);
  };

  //delete image in hotel dinamis
  const handleDeleteImg = (i: any, ii: any) => {
    const deleteVal = [...hotel];
    deleteVal[i]["content"].splice(ii, 1);
    setHotel(deleteVal);
  };

  //dinamis jadwal
  //add jadwal
  const handleClickJadwal = (hari: any) => {
    setJadwal([...jadwal, { hari: `Hari ${hari}`, agenda: "" }]);
  };
  //change value jadwal
  const handleChangeJadwal = (e: any, i: any) => {
    const { name, value } = e.target;
    const onchangeVal: any = [...jadwal];
    onchangeVal[i][name] = value;
    setJadwal(onchangeVal);
  };
  //delete jadwal
  const handleDeleteJadwal = (i: number) => {
    const deleteVal = [...jadwal];
    deleteVal.splice(i, 1);
    setJadwal(deleteVal);
  };

  //tahap pembayaran
  const handleClickPembayaran = () => {
    setTahapPembayaran([
      ...TahapPembayaran,
      { tahap: "", tanggal: "", price: "" },
    ]);
  };

  //change value Pembayaran
  const handleChangePembayaran = (e: any, i: any) => {
    const { name, value } = e.target;
    const onchangeVal: any = [...TahapPembayaran];
    if (name == "price") {
      onchangeVal[i][name] = Number(value);
    } else {
      onchangeVal[i][name] = value;
    }

    setTahapPembayaran(onchangeVal);
  };

  //delete Pembayaran
  const handleDeletePembayaran = (i: number) => {
    const deleteVal = [...TahapPembayaran];
    deleteVal.splice(i, 1);
    setTahapPembayaran(deleteVal);
  };
  const handleFocusPembayaran = (value: any, i: any) => {
    if (value === 0) {
      const onchangeVal: any = [...TahapPembayaran];
      onchangeVal[i]["price"] = "";
      setTahapPembayaran(onchangeVal);
    }
  };

  let id: any = "";
  useEffect(() => {
    getuser();
  });
  // get user using cookie
  async function getuser() {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/user`, {
        withCredentials: true,
      });
      if (res.data.success == true) {
        console.log(res.data.data._id);
      }
      id = res.data.data._id;
    } catch (error: any) {
      console.log(error.response);
    }
  }

  // submit form paket to url
  async function submitPaket(e: any) {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_URL}/api/paket/${params.id}`,
        {
          title: title,
          description: description,
          category_paket: category,
          content_carousel: content,
          price: harga,
          kuota: kuota,
          kota_keberangkatan: kotaKeberangkatan,
          waktu_keberangkatan: waktuKeberangkatan,
          jenis_keberangkatan: jenisKeberangkatan,
          jadwal: jadwal,
          durasi_perjalanan: durasi,
          maskapai_penerbangan: maskapai,
          hotel: hotel,
          rating_hotel: kelasHotel,
          pilihan_kamar: pilihanKamar,
          fasilitas_umroh: fasillitas,
          syarat_ketentuan: syarat,
          sisa_kuota: sisaKuota,
          // tahap_pembayaran: TahapPembayaran,
        },
        {
          withCredentials: true,
        }
      );
      alert("Edit succsess");
    } catch (error: any) {
      alert(error.response.data.message);
    }
  }
  return (
    <div className="flex ">
      <SideBar paket=" text-white bg-[#E3B02B]" />
      <div className="h-screen w-screen grey px-[28px] py-[20px] overflow-y-scroll">
        <p className="font-semibold text-[28px]">Tambah Paket Baru</p>
        <form onSubmit={submitPaket}>
          <div className="bg-white rounded-[10px] w-full mt-[20px] p-5">
            <p className="font-semibold text-[20px]">Detail</p>
            <div className="flex w-full gap-10">
              <div className="py-3 w-3/6">
                <div className="pb-3">
                  <p className="text-[16px] font-medium">Nama Paket</p>
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                      placeholder="Masukkan Nama Paket"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                  </div>
                </div>
                <div className=" py-3">
                  <p className="text-[16px] font-medium">Kategori Paket</p>
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                      placeholder="Masukkan Kategori Paket"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                  </div>
                </div>
                <div className="pt-3">
                  <p className="text-[16px] font-medium">Jenis Keberangkatan</p>
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={jenisKeberangkatan}
                      onChange={(e) => setJenisKeberangkatan(e.target.value)}
                      className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                      placeholder="Masukkan Jenis Keberangkatan"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-[16px] font-medium">Deskripsi Paket</p>
                  <div className="relative w-full">
                    <textarea
                      rows={5}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="border-[1px] border-black p-2 w-full focus:outline-none focus:border-opacity-100"
                      placeholder="Masukkan Deskripsi Paket"
                      maxLength={200}
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                  </div>
                </div>
              </div>
              <div className="w-3/6">
                <p className="text-[16px] font-medium">Gambar Sampul</p>

                {/* IMAGE PICKER */}

                <div className="w-full py-2 grid grid-cols-4 gap-2 ">
                  {content.map((val: any, ii: number) => {
                    return val.img == "" ? (
                      <div key={ii} className="flex flex-col">
                        <div className=" border border-black hover:bg-slate-200">
                          <label className="w-full h-24 flex flex-col justify-center items-center">
                            <input
                              type="file"
                              required
                              className="bg-black w-full h-full hidden"
                              onChange={(e) => changeImageContent(e, e, ii)}
                            />
                            <Image
                              alt="error"
                              src={"/upload.svg"}
                              width={15}
                              height={15}
                            />
                            <p className="text-center font-semibold text-base mt-3">
                              Pilih Gambar
                            </p>
                          </label>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleDeleteContent(ii)}
                        >
                          <div className="border-[1px] border-t-0 bg-red-600 font-semibold text-white border-black">
                            Hapus
                          </div>
                        </button>
                      </div>
                    ) : (
                      <div key={ii}>
                        <img
                          src={val.img}
                          className="h-28 w-28"
                          alt={`Image ${ii + 1}`}
                        />
                        <button
                          type="button"
                          onClick={(e) => deleteContent(e, ii, val.name)}
                        >
                          delete
                        </button>
                      </div>
                    );
                  })}
                  <div className="w-full border border-black hover:bg-slate-200">
                    <label className="w-full h-28 flex flex-col justify-center items-center">
                      <button
                        type="button"
                        className="bg-black w-full h-full hidden"
                        onClick={() => handleClickContent()}
                      >
                        click
                      </button>
                      <p className="font-semibold text-4xl">+</p>
                      <p className="font-semibold text-center">Tambah Gambar</p>
                    </label>
                  </div>
                </div>

                {/* IMAGE PICKER */}

                {/* END OF IMAGE PICKER */}
              </div>
            </div>
            <div className="flex w-full gap-10">
              <div className="py-3 w-3/6">
                <div className="">
                  <p className="text-[16px] font-medium">Pilihan Kamar</p>
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={pilihanKamar}
                      onChange={(e) => setPilihanKamar(e.target.value)}
                      className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                      placeholder="Masukkan Pilihan Kamar"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-[16px] font-medium">
                    Tanggal Keberangkatan
                  </p>
                  <div className="relative w-full">
                    <input
                      type="date"
                      value={waktuKeberangkatan}
                      onChange={(e) => setWaktuKeberangkatan(e.target.value)}
                      className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                      placeholder="Pilih Tanggal Keberangkatan"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-[16px] font-medium">Maskapai Pesawat</p>
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={maskapai}
                      onChange={(e) => setMaskapai(e.target.value)}
                      className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                      placeholder="Masukkan Nama Maskapai"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-[16px] font-medium">Kota Keberangkatan</p>
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={kotaKeberangkatan}
                      onChange={(e) => setKotaKeberangkatan(e.target.value)}
                      className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                      placeholder="Masukkan Nama Kota"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-[16px] font-medium">Durasi Perjalanan</p>
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={durasi}
                      onChange={(e) => setDurasi(e.target.value)}
                      className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                      placeholder="Masukkan Durasi"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-[16px] font-medium">Kelas Hotel</p>
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={kelasHotel}
                      onChange={(e) =>
                        setKelasHotel(Number(e.target.value.replace(/\D/g, "")))
                      }
                      className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                      placeholder="Masukkan Durasi"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                  </div>
                </div>
              </div>
              <div className="py-3 w-3/6"></div>
            </div>
            <p className="font-semibold text-[20px] mt-5">Fasilitas</p>
            <div className="flex w-full gap-10">
              <div className="py-3 w-3/6">
                <div className="">
                  <p className="text-[16px] font-medium">Detail Fasilitas</p>
                  <div className="relative w-full">
                    <textarea
                      rows={5}
                      value={fasillitas}
                      onChange={(e) => setFasillitas(e.target.value)}
                      className="border-[1px] border-black p-2 w-full focus:outline-none focus:border-opacity-100"
                      placeholder="Masukkan Detail Fasilitas"
                      maxLength={200}
                    />
                  </div>
                </div>
              </div>
              <div className="py-3 w-3/6"></div>
            </div>
            <p className="font-semibold text-[20px] mt-5">Detail Hotel</p>

            {/* Array Form */}

            {hotel.map((val: any, i) => {
              return (
                <div key={i}>
                  <p className="pt-2 text-[41px] font-semibold">{i + 1}</p>
                  <div className="flex w-full gap-10">
                    <div className=" w-3/6">
                      <div className="">
                        <p className="text-[16px] font-medium">Kota</p>
                        <div className="relative w-full">
                          <input
                            type="text"
                            name="city"
                            value={val.city}
                            onChange={(e) => handleChangeHotel(e, i)}
                            className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                            placeholder="Masukkan Nama Kota"
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                        </div>
                        <div className="mt-5">
                          <p className="text-[16px] font-medium">Hotel</p>
                          <div className="relative w-full">
                            <input
                              type="text"
                              name="name"
                              value={val.name}
                              onChange={(e) => handleChangeHotel(e, i)}
                              className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                              placeholder="Masukkan Nama Hotel"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                          </div>
                        </div>
                        <div className="mt-5">
                          <p className="text-[16px] font-medium">Fasilitas</p>
                          <div className="w-full">
                            <div className="flex mt-3">
                              <div className=" w-3/6 flex justify-start">
                                <div className="flex items-center justify-center gap-2">
                                  <input
                                    checked={val.fasilitas.FreeWiFi}
                                    onChange={(e) =>
                                      handleChangeHotelFasilitas(
                                        !hotel[i]["fasilitas"].FreeWiFi,
                                        i,
                                        "FreeWiFi"
                                      )
                                    }
                                    type="checkbox"
                                    id="myCheckbox"
                                    className="text-blue-500 w-6 h-6"
                                  />
                                  <span className="text-black font-medium">
                                    Free WiFi
                                  </span>
                                </div>
                              </div>
                              <div className=" w-3/6 flex justify-start">
                                <div className="flex items-center justify-center gap-2">
                                  <input
                                    checked={val.fasilitas.Disabilitas}
                                    onChange={(e) =>
                                      handleChangeHotelFasilitas(
                                        !hotel[i]["fasilitas"].Disabilitas,
                                        i,
                                        "Disabilitas"
                                      )
                                    }
                                    type="checkbox"
                                    id="myCheckbox"
                                    className="text-blue-500 w-6 h-6"
                                  />
                                  <span className="text-black font-medium">
                                    Disabilitas
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex mt-3">
                              <div className=" w-3/6 flex justify-start">
                                <div className="flex items-center justify-center gap-2">
                                  <input
                                    checked={val.fasilitas.TempatMakan}
                                    onChange={(e) =>
                                      handleChangeHotelFasilitas(
                                        !hotel[i]["fasilitas"].TempatMakan,
                                        i,
                                        "TempatMakan"
                                      )
                                    }
                                    type="checkbox"
                                    id="myCheckbox"
                                    className="text-blue-500 w-6 h-6"
                                  />
                                  <span className="text-black font-medium">
                                    Tempat Makan
                                  </span>
                                </div>
                              </div>
                              <div className=" w-3/6"></div>
                            </div>
                            <div className="flex mt-3">
                              <div className=" w-3/6 flex justify-start">
                                <div className="flex items-center justify-center gap-2">
                                  <input
                                    checked={val.fasilitas.PelayananKamar}
                                    onChange={(e) =>
                                      handleChangeHotelFasilitas(
                                        !hotel[i]["fasilitas"].PelayananKamar,
                                        i,
                                        "PelayananKamar"
                                      )
                                    }
                                    type="checkbox"
                                    id="myCheckbox"
                                    className="text-blue-500 w-6 h-6"
                                  />
                                  <span className="text-black font-medium">
                                    Pelayanan Kamar
                                  </span>
                                </div>
                              </div>
                              <div className=" w-3/6"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="py-3 w-3/6">
                      <p className="text-[16px] font-medium">Gambar Hotel</p>

                      <div className="w-full py-2 grid grid-cols-4 gap-2 ">
                        {val.content.map((val: any, ii: number) => {
                          return val.img == "" ? (
                            <div key={ii} className="flex flex-col">
                              <div className=" border border-black hover:bg-slate-200">
                                <label className="w-full h-24 flex flex-col justify-center items-center">
                                  <input
                                    type="file"
                                    required
                                    className="bg-black w-full h-full hidden"
                                    onChange={(e) => changeImage(e, e, i, ii)}
                                  />
                                  <Image
                                    alt="error"
                                    src={"/upload.svg"}
                                    width={15}
                                    height={15}
                                  />
                                  <p className="text-center font-semibold text-base mt-3">
                                    Pilih Gambar
                                  </p>
                                </label>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleDeleteImg(i, ii)}
                              >
                                <div className="border-[1px] border-t-0 bg-red-600 font-semibold text-white border-black">
                                  Hapus
                                </div>
                              </button>
                            </div>
                          ) : (
                            <div key={ii}>
                              <img
                                src={val.img}
                                className="h-28 w-28"
                                alt={`Image ${ii + 1}`}
                              />
                              <button
                                type="button"
                                onClick={(e) =>
                                  deleteImage(e, e, i, ii, val.name)
                                }
                              >
                                delete
                              </button>
                            </div>
                          );
                        })}
                        <div className="w-full border border-black hover:bg-slate-200">
                          <label className="w-full h-28 flex flex-col justify-center items-center">
                            <button
                              type="button"
                              className="bg-black w-full h-full hidden"
                              onClick={() => handleClickImg(i)}
                            >
                              click
                            </button>
                            <p className="font-semibold text-4xl">+</p>
                            <p className="font-semibold text-center">
                              Tambah Gambar
                            </p>
                          </label>
                        </div>
                      </div>

                      {/* IMAGE PICKER */}
                      {/* END OF IMAGE PICKER */}
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 w-44 my-3">
                    {hotel.length !== 1 && (
                      <button
                        type="button"
                        onClick={(e) => handleDeleteHotel(i)}
                        className="bg-red-600 text-white font-medium hover:bg-red-500 px-5 py-2 rounded-md"
                      >
                        Hapus Hotel
                      </button>
                    )}
                  </div>
                </div>
              );
            })}

            {/* End of Array Form */}

            {/* Button Add Form Hotel */}
            <div className="flex flex-col gap-5 w-44 ">
              <button
                type="button"
                onClick={handleClickHotel}
                className="bg-blue-600 text-white font-medium hover:bg-blue-500 px-5 py-2 rounded-md"
              >
                Tambah Hotel
              </button>
            </div>
            {/* End Of Button Add Form Hotel */}

            <p className="font-semibold text-[20px] mt-7">Jadwal Perjalanan</p>
            <div className="flex w-full gap-10">
              <div className="py-3 w-3/6">
                {/* Agenda Array */}
                {jadwal.map((val, i) => {
                  return (
                    <div key={i}>
                      <p className="text-[16px] font-medium">Hari {i + 1}</p>
                      <div className="relative w-full">
                        <input
                          type="text"
                          name="agenda"
                          value={val.agenda}
                          onChange={(e) => handleChangeJadwal(e, i)}
                          className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                          placeholder="Masukkan Agenda"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                      </div>
                      <div className="flex flex-col gap-5 w-44 my-3">
                        {jadwal.length !== 1 && (
                          <button
                            type="button"
                            onClick={(e) => handleDeleteJadwal(i)}
                            className="bg-red-600 text-white font-medium hover:bg-red-500 px-5 py-2 rounded-md"
                          >
                            Hapus Jadwal
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* End Of Agenda Array */}

                {/* Agenda Button */}
                <div className="flex flex-col gap-5 w-44 mt-3">
                  <button
                    type="button"
                    onClick={() => handleClickJadwal(jadwal.length + 1)}
                    className="bg-blue-600 text-white font-medium hover:bg-blue-500 px-5 py-2 rounded-md"
                  >
                    Tambah Jadwal
                  </button>
                </div>

                {/* End Of Agenda Button */}
              </div>
              <div className="w-3/6"></div>
            </div>
            <p className="font-semibold text-[20px] mt-5">
              Syarat dan Ketentuan
            </p>
            <div className="flex w-full gap-10">
              <div className="py-3 w-3/6">
                <div className="">
                  <p className="text-[16px] font-medium">
                    Detail Syarat dan Ketentuan
                  </p>
                  <div className="relative w-full">
                    <textarea
                      rows={5}
                      required
                      value={syarat}
                      onChange={(e) => setSyarat(e.target.value)}
                      className="border-[1px] border-black p-2 w-full focus:outline-none focus:border-opacity-100"
                      placeholder="Masukkan Detail Syarat dan Ketentuan"
                      maxLength={200}
                    />
                  </div>
                </div>
              </div>
              <div className="py-3 w-3/6"></div>
            </div>
            {/* <p className="font-semibold text-[20px] mt-7">Tahap Pembayaran</p> */}
            {/* <div className="flex w-full gap-10">
              <div className="py-3 w-3/6"> */}
            {/* Pembayaran Array */}
            {/* {TahapPembayaran.map((val, i) => {
                  return (
                    <div key={i}>
                      <p className="text-[16px] font-medium">Tahap {i + 1}</p>
                      <div className="relative w-full">
                        <input
                          type="text"
                          name="tahap"
                          value={val.tahap}
                          onChange={(e) => handleChangePembayaran(e, i)}
                          className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                          placeholder="Masukkan Tahap"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                      </div>
                      <p className="text-[16px] font-medium mt-3">
                        Tanggal Pembayaran
                      </p>
                      <div className="relative w-full">
                        <input
                          type="date"
                          name="tanggal"
                          value={val.tanggal}
                          onChange={(e) => handleChangePembayaran(e, i)}
                          className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                          placeholder="Masukkan tanggal"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                      </div>
                      <p className="text-[16px] font-medium mt-3">
                        Jumlah Pembayaran
                      </p>
                      <div className="relative w-full">
                        <input
                          type="number"
                          name="price"
                          value={val.price}
                          onChange={(e) => handleChangePembayaran(e, i)}
                          onFocus={(e) =>
                            handleFocusPembayaran(Number(e.target.value), i)
                          }
                          className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                          placeholder="Masukkan Harga"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                      </div>
                      <div className="flex flex-col gap-5 w-44 my-3">
                        {TahapPembayaran.length !== 1 && (
                          <button
                            type="button"
                            onClick={(e) => handleDeletePembayaran(i)}
                            className="bg-red-600 text-white font-medium hover:bg-red-500 px-5 py-2 rounded-md"
                          >
                            Hapus Tahap Pembayaran
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })} */}

            {/* End Of Pembayaran Array */}

            {/* Pembayaran Button */}
            {/* <div className="flex flex-col gap-5 w-44 mt-3">
                  <button
                    type="button"
                    onClick={() => handleClickPembayaran()}
                    className="bg-blue-600 text-white font-medium hover:bg-blue-500 px-5 py-2 rounded-md"
                  >
                    Tambah Tahap
                  </button>
                </div>

                {/* End Of Pembayaran Button */}
            {/* </div>
              <div className="w-3/6"></div>
            </div> */}
            <p className="font-semibold text-[20px] mt-5">Harga dan Kuota</p>
            <div className="flex w-full gap-10">
              <div className="py-3 w-3/6">
                <div>
                  <p className="text-[16px] font-medium">Harga Paket</p>
                  <div className="relative w-full">
                    <input
                      type="text"
                      required
                      value={harga}
                      onChange={(e) =>
                        setHarga(Number(e.target.value.replace(/\D/g, "")))
                      }
                      className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                      placeholder="Masukkan Harga Paket"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                  </div>
                  <p className="text-[16px] font-medium mt-5">
                    Kuota Yang Disediakan
                  </p>
                  <div className="relative w-full ">
                    <input
                      type="text"
                      required
                      value={kuota}
                      onChange={(e) =>
                        setKuota(Number(e.target.value.replace(/\D/g, "")))
                      }
                      className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                      placeholder="Masukkan Jumlah Kuota"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                  </div>
                  <p className="text-[16px] font-medium mt-5">
                    Kuota Tersisa
                  </p>
                  <div className="relative w-full ">
                    <input
                      type="text"
                      required
                      value={sisaKuota}
                      onChange={(e) =>
                        setSisaKuota(Number(e.target.value.replace(/\D/g, "")))
                      }
                      className="border-b-[1px] border-black pt-2 w-full focus:outline-none focus:border-opacity-100"
                      placeholder="Masukkan Jumlah Kuota"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-2 border-gray-300 border-opacity-50"></div>
                  </div>
                </div>
              </div>
              <div className="w-3/6"></div>
            </div>
            <div className="pt-5">
              <button
                type="submit"
                className="w-full font-semibold text-xl rounded-md p-3 text-semibold text-white bg-[#E3B02B] hover:bg-[#b18a2a]"
              >
                Edit Paket
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPaket;

// //handle image upload content carousel
//   async function changeImageContent(e: any, event: any, i: any) {
//     e.preventDefault();
//     const onchangeVal = [...content];
//     // get the selected file from the input
//     const file = event.target.files[0];
//     // create a new FormData object and append the file to it
//     const formData = new FormData();
//     formData.append("content", file);
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_URL}/api/upload`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       const link = response.data.data;
//       const name = response.data.name;
//       onchangeVal[i]["img"] = link;
//       onchangeVal[i]["name"] = name;
//       setContent(onchangeVal);
//     } catch (error: any) {
//       alert(error.response.data.message);
//     }
//   }

//   //handle image delete content carousel
//   async function deleteContent(e: any, event: any, i: any, name: any) {
//     e.preventDefault();
//     const onchangeVal = [...content];
//     try {
//       const response = await axios.delete(
//         `${process.env.NEXT_PUBLIC_URL}/api/upload/${name}`
//       );
//       console.log(response);
//       onchangeVal[i]["img"] = "";
//       onchangeVal[i]["name"] = "";
//       setContent(onchangeVal);
//     } catch (error: any) {
//       alert(error.response.data.message);
//     }
//   }

//   //handle image upload content hotel
//   async function changeImage(e: any, event: any, i: any, ii: any) {
//     e.preventDefault();
//     const onchangeVal = [...hotel];
//     const file = event.target.files[0];
//     const formData = new FormData();
//     formData.append("content", file);
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_URL}/api/upload`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log(response);
//       const link = response.data.data;
//       const name = response.data.name;
//       onchangeVal[i]["content"][ii]["img"] = link;
//       onchangeVal[i]["content"][ii]["name"] = name;

//       setHotel(onchangeVal);
//     } catch (error: any) {
//       alert(error.response.data.message);
//     }
//   }

//   //handle image delete content hotel
//   async function deleteImage(e: any, event: any, i: any, ii: any, name: any) {
//     e.preventDefault();
//     const onchangeVal = [...hotel];
//     try {
//       const response = await axios.delete(
//         `${process.env.NEXT_PUBLIC_URL}/api/upload/${name}`
//       );
//       console.log(response);
//       onchangeVal[i]["content"][ii]["img"] = "";
//       onchangeVal[i]["content"][ii]["name"] = "";
//       setHotel(onchangeVal);
//     } catch (error: any) {
//       alert(error.response.data.message);
//     }
//   }
