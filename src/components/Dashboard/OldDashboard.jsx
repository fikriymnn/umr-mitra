import React from "react";

function OldDashboard() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-[33.2px] mb-[28px]">
        <div className="h-[254px] bg-white rounded-[10px_10px_10px_10px]">
          {/* paket saya */}
          <div className="flex items-center justify-start h-[94px] w-full bg-black  rounded-[10px_10px_0px_0px] ">
            <p className="ml-[67px] yellowtext text-[35px] font-[500]">
              paket Saya
            </p>
          </div>
          <div className="flex items-center justify-start w-full ">
            <p className="ml-[67px] text-black text-[109px] font-medium">9</p>
          </div>
        </div>
        {/* order berjalan */}
        <div className="h-[254px] bg-white rounded-[10px_10px_10px_10px]">
          <div className="flex items-center justify-start h-[94px] w-full bg-black  rounded-[10px_10px_0px_0px] ">
            <p className="ml-[67px] yellowtext text-[35px] font-[500]">
              Order Berjalan
            </p>
          </div>
          <div className="flex items-center justify-start w-full ">
            <p className="ml-[67px] text-black text-[109px] font-medium">159</p>
          </div>
        </div>
        {/* rating */}
        <div className="h-[254px] bg-white rounded-[10px_10px_10px_10px]">
          <div className="flex items-center justify-start h-[94px] w-full bg-black  rounded-[10px_10px_0px_0px] ">
            <p className="ml-[67px] yellowtext text-[35px] font-[500]">
              Rating
            </p>
          </div>
          <div className="flex items-center justify-start w-full ">
            <div>
              <p className="ml-[67px] text-black text-[39px] font-medium">
                ini rating
              </p>
              <p className="ml-[67px] text-black text-[39px] font-medium">
                260 Penilaian
              </p>
            </div>
          </div>
        </div>
        {/* order selesai */}
        <div className="h-[254px] bg-white rounded-[10px_10px_10px_10px]">
          <div className="flex items-center justify-start h-[94px] w-full bg-black  rounded-[10px_10px_0px_0px] ">
            <p className="ml-[67px] yellowtext text-[35px] font-[500]">
              Order Selesai
            </p>
          </div>
          <div className="flex items-center justify-start w-full ">
            <p className="ml-[67px] text-black text-[109px] font-medium">480</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OldDashboard;
