import React, { useState } from "react";
import { NAV_LINKS } from "../constant";

const Navbar = () => {
  const [opemMenu, setOpemMenu] = useState(false);
  return (
    <div className="relative">
      <nav className="p-4 hidden md:flex justify-center items-center md:bg-darkGrayBg">
        <ul className="flex space-x-6">
          {NAV_LINKS.map((item, index) => {
            return (
              <li key={index}>
                <a href="#" className={"text-black text-xs font-norma"}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 flex justify-center items-center md:hidden">
        <div
          className="w-6 h-6 bg-[#929191] rounded-sm"
          onClick={() => setOpemMenu(true)}
        />
        <div className="flex flex-1 items-center justify-center">
          <p className="text-black text-xs font-normal">Home</p>
        </div>
      </div>
      {opemMenu && (
        <div className="absolute top-0 left-0 p-4 w-full h-screen bg-black bg-opacity-90 md:hidden ">
          <p className="text-end text-white" onClick={() => setOpemMenu(false)}>
            Close
          </p>
          <div className="flex flex-col justify-center items-center h-full">
            <div className="flex flex-col justify-center items-center">
              <ul className="flex flex-col justify-center items-center space-y-6">
                {NAV_LINKS.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href="#" className={"text-white text-xs font-normal"}>
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
