import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="top-0 z-50 sticky w-full grid grid-cols-4 h-16 md:h-18 items-center py-0 bg-white shadow-md">
      {/* logo */}
      <div className="relative flex-shrink-0   flex justify-around items-center">
        <Link href="/">
          <a>
            <p>Logo</p>
          </a>
        </Link>
      </div>
      {/* menu */}
      <div className=" hidden md:flex flex-row gap-1 items-center  justify-around">
        {/* menu items(3) */} <p>Menu</p>
      </div>

      {/* search */}
      <div className="flex w-4/5 py-2 px-2 rounded-lg  col-span-2 md:col-span-1 bg-blue-100 ">
        <SearchIcon className="object-contain h-7 pr-4 text-gray-600 " />
        <input
          type="text"
          placeholder="Search For Something"
          className="bg-blue-100 placeholder-gray-400 w-full outline-none border-none"
        />
      </div>
      {/* user icons*/}
      <div className="px-4  flex items-center justify-around">
        <p>Login</p>
      </div>
    </header>
  );
}

export default Header;
