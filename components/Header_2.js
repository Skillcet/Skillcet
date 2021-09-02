import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.svg";
import { MenuIcon, AccountIcon } from "../data/svgs";
import { SearchIcon } from "@heroicons/react/solid";
function Header_2({ isOpen, SetIsOpen }) {
  return (
    <header className="sticky top-0 z-50 h-[64px] w-full shadow-md">
      <div className="h-full bg-white p-[8px] ">
        <div className="flex items-center h-full lg:mx-[26px]">
          {/* Header-Left */}
          <div className="flex items-center justify-between ">
            {/* Header-Left__Items */}
            <button
              onClick={() => SetIsOpen(!isOpen)}
              className="hidden lg:inline-flex "
            >
              <div className="hover:bg-blue-300 hover:bg-opacity-40 p-2 mr-[32px] rounded-full cursor-pointer">
                <MenuIcon className="text-gray-600 h-6 w-6" />
              </div>
            </button>

            <div className=" relative h-[20px] w-[80px] sm:h-[24px] sm:w-[100px] flex items-center">
              <Link href="/">
                <a>
                  <Image
                    src={Logo}
                    objectFit="contain"
                    objectPosition="left"
                    layout="fill"
                  />
                </a>
              </Link>
            </div>
          </div>

          {/* Header-Middle */}
          <div className="h-full flex items-center justify-around w-full text-sm">
            {/* Header-Middle__Items */}
            <div className="hidden md:inline-flex">NRA</div>
            <div className="hidden md:inline-flex">SkillCET</div>
            <div className="hidden md:inline-flex">New Batches</div>
            <div className="h-full flex items-center bg-blue-100 rounded-lg px-3 w-11/12 sm:w-4/5 max-w-3xl">
              <SearchIcon className="h-6 text-gray-600" />
              <input
                type="text"
                placeholder="Search for anything"
                className="bg-transparent ml-2 outline-none border-none w-full"
              />
            </div>
          </div>
          {/* Header-Right */}
          <div className=" flex sm:w-[200px] items-center justify-between">
            {/* Header-Right__Items */}
            <div className="text-sm hidden sm:inline-flex">Student Login</div>
            <div className="pr-2 ml-[32px]">
              <AccountIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
{
}
export default Header_2;
