import React from "react";
import { MenuIcon } from "../data/svgs";
import menuOptions from "../data/menuOptions";
import { useRouter } from "next/router";
import Link from "next/link";
function Menu() {
  const router = useRouter();

  const menuItems = menuOptions.map((item) => (
    <div
      className={`mb-4 pl-8 text-base flex items-center pr-8
      ${
        router.pathname == item.link
          ? "bg-primaryBlue1 rounded-r-3xl text-white"
          : " hover:text-primaryBlue1"
      }
      `}
      key={item.key}
    >
      <MenuIcon className="h-5 w-5 mr-2" />
      <Link href={item.link}>
        <a
          className="inline-flex "
          style={{
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
        >
          {item.name}
        </a>
      </Link>
    </div>
  ));
  return (
    <div className="bg-white w-full text-sm md:text-base h-full ">
      <div className="h-[185px] w-[265px] mx-auto my-6 bg-green-200 "></div>
      <div className="  mx-auto ">
        <hr className=" w-4/5 mx-auto border-secondaryBlue1 " />
        <div className=" mt-4 ">{menuItems}</div>
      </div>
    </div>
  );
}

export default Menu;
