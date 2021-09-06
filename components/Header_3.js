import React from "react";
import Image from "next/image";
import Logo from "../public/logo.svg";
import { MenuIcon, AccountIcon } from "../data/svgs";
import { SearchIcon } from "@heroicons/react/solid";
function Header_2({ isOpen, SetIsOpen }) {
  return (
    <header className="header sticky top-0 z-50 h-[64px] w-full shadow-md text-base 4xl:text-lg bg-white">
      <div className="p-2  h-full">
        <div className="flex h-full items-center">
          {/* Menu Icon */}
          <div className="ml-8">
            <button
              onClick={() => SetIsOpen(!isOpen)}
              className="hidden lg:inline-flex "
            >
              <MenuIcon className="text-gray-600 h-6 w-6" />
            </button>
          </div>
          {/* Logo */}
          <div className="md:ml-8">
            <Image src={Logo} objectFit="contain" width={132} height={48} />
          </div>
          {/* Links */}
          <div className="ml-10 hidden xl:inline-flex">
            <div className="w-full h-full flex items-center">
              <div className="">National Recruitement Agency</div>
              <div className="ml-8">SkillCET</div>
              <div className="ml-8">New Batches</div>
            </div>
          </div>
          {/* SearchBar */}
          <div className="flex flex-1 bg-customSearchBar text-gray max-w-[720px] py-3 ml-10 rounded-xl">
            <SearchIcon className="h-6 px-6" />
            <input
              type="text"
              placeholder="Search for anything"
              className="bg-transparent border-none w-full outline-none pr-6"
            />
          </div>
          {/* Student Login */}
          <div className="mr-8 ml-10 3xl:flex-1">
            <div className="flex items-center h-full w-full justify-end">
              <div className="mr-8 hidden md:inline-flex">Student Login</div>
              <div className="">
                <AccountIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
              </div>
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
