import React from "react";

export default function Demo() {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-4 min-h-44 px-5 md:py-10 mt-5 md:mt-0">
      <div className="flex md:justify-end">
        <div className="h-44 w-[171px] md:w-[215px] rounded-md bg-[#EAF4DE] border-2 border-black shadow-md"></div>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <p className="text-grayText text-xs">Demo</p>
        <p className="text-sm font-bold text-foreground-light dark:text-foreground-dark">Something else</p>
        <p className=" text-foreground-light dark:text-foreground-dark font-normal text-xs mt-2">
          Lorem ipsum dolor sit amet, consectetur adpincing eit Nunc maximus,
          nulla ut commodo sagittis, sopien dui mattis dul non pulvinar
        </p>
      </div>
    </div>
  );
}
