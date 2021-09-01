import React from "react";
import Link from "next/link";
import menuOptions from "../data/menuOptions";
import { useRouter } from "next/router";
function MobileHeader() {
  const router = useRouter();

  return (
    <div className="bottom-0  w-full flex items-start lg:hidden fixed overflow-hidden h-14 shadow-mobile-footer bg-white shadow-md">
      <div className=" grid grid-cols-14 overflow-x-scroll flex-grow-0 flex-shrink-1 w-full text-xs">
        {menuOptions.map((menu) => (
          <div
            className={
              router.pathname == menu.link
                ? "bg-blue-500 pt-4 rounded-b-lg text-white transition duration-1000 ease-in-out "
                : "pt-4 "
            }
          >
            <Link href={menu.link}>
              <a>{menu.name}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileHeader;
/*<div
          className={
            router.pathname == "/"
              ? "bg-blue-500 pt-4 rounded-b-lg text-white transition duration-1000 ease-in-out"
              : "pt-4"
          }
        >
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>*/
