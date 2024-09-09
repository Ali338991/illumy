import React from "react";
import { SERVICES } from "../constant";

export default function Services() {
  return (
    <div className="flex flex-col gap-4 p-5 bg-[#DDE1E1] dark:bg-darkBlue transition-colors duration-500">
      <p className="text-sm font-bold text-black">Services</p>
      <div className="flex flex-col md:flex-row gap-6 md:gap-7 ">
        {SERVICES.map((item, index) => {
          const isOdd = index % 2 !== 0;
          return (
            <div
              key={index}
              style={{ backgroundColor: item?.bgColor }}
              className={`h-[175px] md:h-[115px] w-[90%] md:w-[170px] border-2 border-black rounded-md ${
                isOdd && "ml-auto md:ml-0"
              } `}
            />
          );
        })}
      </div>
    </div>
  );
}
