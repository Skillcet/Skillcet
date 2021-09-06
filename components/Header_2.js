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
          <div className="flex items-center justify-between mr-[32px]">
            {/* Header-Left__Items */}
            <button
              onClick={() => SetIsOpen(!isOpen)}
              className="hidden lg:inline-flex "
            >
              <div className="hover:bg-blue-300 hover:bg-opacity-40 p-2 mr-[32px] rounded-full cursor-pointer">
                <MenuIcon className="text-gray-600 h-6 w-6" />
              </div>
            </button>

            <div className=" relative h-[20px] w-[80px] sm:h-[34px] sm:w-[131px] flex items-center">
              <Link href="/">
                <a>
                  <Image
                    src={Logo}
                    alt="Logo"
                    objectFit="contain"
                    objectPosition="left"
                    layout="fill"
                  />
                </a>
              </Link>
            </div>
          </div>

          {/* Header-Middle */}
          <div className="h-full w-4/5 flex items-center justify-between mx-auto text-base 3xl:text-[20px]">
            {/* Header-Middle__Items */}

            <div className="hidden md:inline-flex mr-6">NRA</div>
            <div className="hidden md:inline-flex mr-6">SkillCET</div>
            <div className="hidden md:inline-flex mr-[32px]">New Batches</div>
            <div className="h-full flex items-center bg-customSearchBar rounded-lg px-3 w-4/5 sm:w-4/5 max-w-[710px] flex-shrink">
              <SearchIcon className="h-6 text-gray-600 ml-3 mr-6" />
              <input
                type="text"
                placeholder="Search for anything"
                className="bg-transparent outline-none border-none w-full"
              />
            </div>
          </div>
          {/* Header-Right */}
          <div className=" flex sm:w-[200px] items-center justify-between ml-[32px]">
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
