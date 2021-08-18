import React from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="top-0 z-50 sticky w-full grid grid-cols-4 h-16 md:h-18 items-center py-0 bg-white shadow-md">
      {/* logo */}
      <div className="relative flex-shrink-0   flex justify-around items-center">
        <p>Logo</p>
      </div>
      {/* menu */}
      <div className=" hidden md:flex flex-row gap-1 items-center  justify-around">
        {/* menu items(3) */} <p>Menu</p>
      </div>
      {/* search */}
      <div className="flex items-center justify-around col-span-2 md:col-span-1  ">
        <p>Search</p>
      </div>
      {/* user icons*/}
      <div className="px-4  flex items-center justify-around">
        <p>Login</p>
      </div>
    </header>
  );
}

export default Header;
