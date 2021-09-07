import React from "react";
import menuOptions from "../data/menuOptions";
import { useRouter } from "next/router";
import Link from "next/link";
function Menu() {
  const router = useRouter();

  const menuItems = menuOptions.map((item) => (
    <div
      className={` mb-4 pl-14 text-base 3xl:text-[20px]
      ${
        router.pathname == item.link
          ? "bg-primaryBlue1 rounded-r-3xl px-5  text-white "
          : " hover:text-primaryBlue1"
      }
      `}
      key={item.key}
    >
      <Link href={item.link}>
        <a
          className="w-full inline-flex"
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
      <div className="h-60 w-full my-6 bg-green-200 border-2 border-black"></div>
      <div className="  mx-auto ">
        <hr className=" w-4/5 mx-auto border-secondaryBlue1 " />
        <div className=" mt-6 ">{menuItems}</div>
      </div>
    </div>
  );
}

export default Menu;
