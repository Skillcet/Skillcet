import React from "react";
import { MenuIcon } from "../data/svgs";
import menuOptions from "../data/menuOptions";
import { useRouter } from "next/router";
import Link from "next/link";
function Menu({ topPicture }) {
  const router = useRouter();

  const menuItems = menuOptions.map((item) => (
    <div
      className={`mb-4 text-sm flex items-center
      ${
        router.pathname == item.link
          ? "bg-primaryBlue1 rounded-r-3xl text-white"
          : " hover:text-primaryBlue1"
      }
      `}
      key={item.key}
    >
      <Link href={item.link}>
        <a
          className="inline-flex w-full"
          style={{
            paddingTop: "8px",
            paddingBottom: "8px",
            width: "100%",
          }}
        >
          <div className="flex px-8">
            <MenuIcon className="h-5 w-5 mr-2" />
            {item.name}
          </div>
        </a>
      </Link>
    </div>
  ));
  return (
    <div className="bg-white w-full text-sm h-full ">
      {topPicture && (
        <div className="h-[185px] w-[265px] mx-auto my-6 bg-green-200 rounded-lg"></div>
      )}

      <div className="  mx-auto ">
        {topPicture && <hr className=" w-4/5 mx-auto border-secondaryBlue1 " />}
        <div className=" mt-4 ">{menuItems}</div>
      </div>
    </div>
  );
}

export default Menu;
