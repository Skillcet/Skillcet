import React from "react";
import menuOptions from "../data/menuOptions";
import { useRouter } from "next/router";
import Link from "next/link";
function Menu() {
  const router = useRouter();
  const menuItems = menuOptions.map((item) => (
    <div
      className={`hover:text-blue-700 pl-14 text-sm
      ${
        router.pathname == item.link
          ? "bg-blue-100 rounded-r-3xl px-5 text-blue-700 "
          : ""
      }
      `}
      style={{
        paddingTop: "11px",
        paddingBottom: "11px",
      }}
      key={item.key}
    >
      <Link href={item.link}>
        <a className="w-full inline-flex">{item.name}</a>
      </Link>
    </div>
  ));
  return (
    <div className="bg-white w-full text-sm md:text-base h-full ">
      <div className="h-60 w-full my-4 bg-green-200"></div>
      <div className="  my-8 mx-auto">
        <hr className=" w-4/5 mx-auto " />
        <div className=" my-5">{menuItems}</div>
      </div>
    </div>
  );
}

export default Menu;
