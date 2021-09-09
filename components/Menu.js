import React from "react";
import topImage from "../public/topImage.png";
import { MenuIcon } from "../data/svgs";
import menuOptions from "../data/menuOptions";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
function Menu({ topPicture }) {
  const router = useRouter();

  const menuItems = menuOptions.map((item) => (
    <div
      className={`mb-4 text-sm flex items-center
      ${
        router.pathname == item.link
          ? "bg-primaryBlue1 rounded-r-xl text-white"
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
          <div className="flex px-6">
            <MenuIcon className="h-5 w-5 mr-4" />
            {item.name}
          </div>
        </a>
      </Link>
    </div>
  ));
  return (
    <div className="bg-white w-full text-sm h-full ">
      {topPicture && (
        <div className="h-[185px] m-6  relative">
          <Image
            src={topImage}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            alt="Top Sample Image"
          ></Image>
        </div>
      )}

      <div className="  mx-auto ">
        {topPicture && <hr className=" w-4/5 mx-auto border-secondaryBlue1 " />}
        <div className=" mt-6 ">{menuItems}</div>
      </div>
    </div>
  );
}

export default Menu;
