import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function MobileHeader() {
  const router = useRouter();
  return (
    <div className="bottom-0  w-full flex justify-center items-start lg:hidden fixed overflow-hidden h-14 shadow-mobile-footer bg-white shadow-md">
      <div className="grid grid-cols-4 justify-center w-full items-strech text-center h-12 px-2 ">
        <div
          className={
            router.pathname == "/"
              ? "bg-blue-500 pt-4 rounded-b-lg text-white transition duration-1000 ease-in-out"
              : "pt-4"
          }
        >
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div
          className={
            router.pathname == "/nra"
              ? "bg-blue-500 pt-4 rounded-b-lg text-white transition duration-100 ease-in-out"
              : "pt-4"
          }
        >
          <Link href="/nra">
            <a>NRA</a>
          </Link>
        </div>
        <div
          className={
            router.pathname == "/XIILevel"
              ? "bg-blue-500 pt-4 rounded-b-lg text-white transition duration-100 ease-in-out"
              : "pt-4"
          }
        >
          <Link href="/XIILevel">
            <a>XII Level</a>
          </Link>
        </div>
        <div
          className={
            router.pathname == "/TierII"
              ? "bg-blue-500 pt-4 rounded-b-lg text-white transition duration-100 ease-in-out"
              : "pt-4"
          }
        >
          <Link href="/TierII">
            <a>Tier II</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
