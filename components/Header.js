import React, { useState } from "react";
import image from "../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@material-ui/icons/Menu";
import { SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header({ isOpen, SetIsOpen }) {
  const router = useRouter();
  return (
    <header className="w-full top-0 z-50 sticky  shadow-md bg-white">
      <div className="max-w-screen-3xl mx-auto text-sm 2xl:text-base w-full flex justify-evenly h-16 md:h-18 items-center py-0 bg-white ">
        <div className="w-1/4 md:w-1/2 flex justify-around">
          {/* logo and hamBurger */}
          <div className="relative w-1/2 flex justify-center items-center">
            <div className="hidden lg:inline-flex">
              <button onClick={() => SetIsOpen(!isOpen)}>
                <div className="hover:bg-blue-100 hover:bg-opacity-40 p-3 rounded-full">
                  <MenuIcon className="h-6" />
                </div>
              </button>
            </div>

            <div className="w-1/2 flex items-center h-full">
              <Link href="/">
                <a>
                  <img src="/logo.png" className="logo ob" />
                </a>
              </Link>
            </div>
          </div>
          {/* menu */}
          <div className=" hidden flex-auto md:flex flex-row gap-1 items-center justify-evenly">
            <div
              className={
                router.pathname == "/nra" ? "text-gray-700 font-semibold" : ""
              }
            >
              <Link href="/nra">
                <a>
                  <p>National Recruitment Agency</p>
                </a>
              </Link>
            </div>
            <div
              className={
                router.pathname == "/skillcet"
                  ? "text-gray-700 font-semibold"
                  : ""
              }
            >
              <Link href="/skillcet">
                <a>
                  <p>Skillcet</p>
                </a>
              </Link>
            </div>
            <div
              className={
                router.pathname == "/newbatches"
                  ? "text-gray-700 font-semibold"
                  : ""
              }
            >
              <Link href="/newbatches">
                <a>
                  <p>New Batches</p>
                </a>
              </Link>
            </div>
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
            <AccountCircleIcon
              style={{ fontSize: 28 }}
              className=" text-gray-600 object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
