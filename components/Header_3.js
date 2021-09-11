import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.svg";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { MenuIcon, AccountIcon } from "../data/svgs";
import { SearchIcon } from "@heroicons/react/solid";
function Header_2({ isOpen, SetIsOpen }) {
  return (
    <header className="header sticky top-0 z-50 h-[58px]  md:h-[64px] w-full shadow-md text-base 4xl:text-lg bg-white">
      <div className="py-3 sm:py-2  h-full">
        <div className="flex h-full items-center">
          {/* Menu Icon */}
          <div className="ml-6 hidden lg:inline-flex ">
            <button onClick={() => SetIsOpen(!isOpen)} className="">
              <MenuIcon className="text-gray-600 h-6 w-6" />
            </button>
          </div>
          {/* Logo */}
          <div className=" relative h-[20px] w-[80px] sm:h-[28px] sm:w-[110px] flex items-center ml-4 md:ml-6">
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

          {/*<div className="md:ml-8">
            <img src="/logo.svg" alt="LOGO" height={48} width={132} />
          </div> */}

          {/* Links */}
          <div className="ml-6 hidden xl:inline-flex">
            <div className="w-full h-full flex items-center">
              <div className="hover:text-primaryBlue1 text-customGray">
                <Link href="/nra">National Recruitement Agency</Link>
              </div>
              <div className="ml-8 hover:text-primaryBlue1 text-customGray">
                <Link href="/skillcet">SkillCET</Link>
              </div>
              <div className="ml-8 hover:text-primaryBlue1 text-customGray">
                <Link href="/newbatches">New Batches</Link>
              </div>
            </div>
          </div>
          {/* SearchBar */}
          <div className="flex flex-1 ml-2 h-full items-center bg-customSearchBar text-gray max-w-[720px] sm:py-3 md:ml-6 rounded-lg">
            <SearchIcon className="h-6 px-3 sm:px-6 text-gray-600" />
            <input
              type="text"
              placeholder="Search for anything"
              className="bg-transparent text-xs md:text-base border-none w-full outline-none pr-6"
            />
          </div>
          {/* Student Login */}
          <div className=" mr-4 ml-3 md:mr-6 md:ml-6 3xl:flex-1 ">
            <div className="flex items-center h-full w-full justify-end">
              <div className="mr-6 hidden md:inline-flex">Student Login</div>
              <div className="flex items-center text-gray-500">
                <NotificationsNoneIcon className="" />
                <AccountIcon className="h-6 w-6 text-gray-500 cursor-pointer ml-3" />
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
