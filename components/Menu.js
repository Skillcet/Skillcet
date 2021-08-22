import React from "react";
import menuOptions from "../data/menuOptions";
import { useRouter } from "next/router";
import Link from "next/link";
function Menu() {
  const router = useRouter();
  const menuItems = menuOptions.map((item) => (
    <div
      className={
        router.pathname == item.link
          ? "bg-blue-500 py-2 rounded-r-3xl my-2 px-4 text-white"
          : "my-4 px-4"
      }
      key={item.key}
    >
      <Link href={item.link}>
        <a className="w-full inline-flex">{item.name}</a>
      </Link>
    </div>
  ));
  return (
    <div className="bg-white w-full h-full ">
      <div className="h-60 w-full my-4 bg-green-200"></div>
      <div className=" border-t-2 border-b-2 my-8 border-black mx-auto">
        {menuItems}
      </div>
    </div>
  );
}

export default Menu;
