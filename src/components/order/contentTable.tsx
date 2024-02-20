import React from "react";

function ContentTableOrder({
  no,
  id,
  name,
  jumlah,
  paket,
  status,
}: {
  no: any;
  id: any;
  name: any;
  jumlah: any;
  paket: any;
  status: any;
}) {
  let buttonColor;
  let statusPaket;
  switch (status) {
    case "belum bayar":
      buttonColor = "#DC2626";
      break;
    case "diproses":
      buttonColor = "#FFC107";
      break;
    case "pembayaran selesai":
      buttonColor = "#66BB6A";
      break;
    default:
      buttonColor = "white";
  }

  switch (status) {
    case "belum bayar":
      statusPaket = "Belum Bayar";
      break;
    case "diproses":
      statusPaket = "Diproses";
      break;
    case "pembayaran selesai":
      statusPaket = "Pembayaran Selesai";
      break;
    default:
      statusPaket = "Belum Bayar";
  }
  const buttonStyle = {
    backgroundColor: buttonColor,
  };

  return (
    <div>
      <div className="rounded-md min-w-full flex gap-3 bg-slate-300 mb-1 px-2 py-2">
        <div className="flex gap-3 w-5/12 ">
          <div className="text-[20px] w-[60px] line-clamp-1">
            <p>{no}</p>
          </div>
          <div className="text-[20px] w-full line-clamp-1">
            <p>{name}</p>
          </div>
          <div className="w-6/12 text-[20px] line-clamp-1">
            <p>{jumlah}</p>
          </div>
        </div>
        <div className="flex gap-3 w-8/12 justify-between">
          <div className="w-full  text-[20px] line-clamp-1">
            <p>{paket}</p>
          </div>
          <div className="w-full flex gap-3">
            <div className=" w-full">
              <div
                style={buttonStyle}
                className={
                  "w-full flex justify-center items-center  text-white py-1 rounded-md"
                }
              >
                {statusPaket}
              </div>
            </div>
            <div className=" w-full">
              <a href={`/order/detail/${id}`}>
                <button className="w-full flex justify-center items-center bg-blue-600 text-white px-5 py-1 rounded-md hover:scale-110 duration-100">
                  Detail
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-600 min-w-full"></div>
    </div>
  );
}

export default ContentTableOrder;
