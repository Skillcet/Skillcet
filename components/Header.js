import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  return (
    <header className="top-0 z-50 sticky text-sm 2xl:text-base w-full flex justify-evenly h-16 md:h-18 items-center py-0 bg-white shadow-md">
      <div className="w-1/4 md:w-1/2 flex justify-around">
        {/* logo */}
        <div className="relative flex-auto flex justify-around items-center">
          <Link href="/">
            <a>
              <p>Logo</p>
            </a>
          </Link>
        </div>
        {/* menu */}
        <div className=" hidden flex-auto md:flex flex-row gap-1 items-center justify-evenly">
          {/* menu items(3) */} <p>National Recruitment Agency</p>
          {/* menu items(3) */} <p>Skillcet</p>
          {/* menu items(3) */} <p>New Batches</p>
        </div>
      </div>
      <div className="w-3/4 md:w-1/2 flex justify-around">
        {/* search */}
        <div className="flex w-3/4 py-2 px-2 rounded-lg  bg-blue-100 ">
          <SearchIcon className="object-contain h-6 pr-4 text-gray-600 " />
          <input
            type="text"
            placeholder="Search For Something"
            className="bg-blue-100 w-full placeholder-gray-400 outline-none border-none"
          />
        </div>
        {/* user icons*/}
        <div className="flex flex-auto items-center justify-evenly">
          <p className="hidden md:flex">Student Login</p>
          <AccountCircleIcon className="h-7 text-gray-600 object-contain cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
