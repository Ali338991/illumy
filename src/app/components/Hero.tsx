import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-4 min-h-44 md:bg-darkGrayBg px-5 mt-5 md:mt-0">
      <div className="">
        <div className="h-52 w-full md:w-[255px] -mb-5 rounded-md bg-[#856CE5]"></div>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <p className="text-grayText text-xs">We are Creative Agency</p>
        <p className="text-sm font-bold text-black">
          Innovative and Advisory <br/> Solutions
        </p>
        <p className="text-black font-normal text-xs mt-2">
          Lorem ipsum dolor sit amet, consectetur adpincing eit Nunc maximus,
          nulla ut commodo sagittis, sopien dui mattis dul non pulvinar
        </p>
      </div>
    </div>
  );
}
