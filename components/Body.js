import React from "react";
import { useState } from "react";
import Banner from "../components/Banner";
import Post from "../components/Post";
import Menu from "../components/Menu";
import TabSelector from "./TabSelector";
function Body({ banner, tabOption, isOpen }) {
  return (
    <div className="mb-14 md:mb-0 md:mr-8 3xl:mr-0 ">
      <div
        className={`hidden lg:inline-flex  shadow-md fixed w-72 fixed?md:h-(screen-18) top-12 sm:top-16 md:top-18 bg-white z-10  overflow-x-hidden overflow-y-auto menuheight transform ${
          isOpen
            ? "translate-x-0 ease-out transition duration-200"
            : "-translate-x-full ease-in transition duration-200"
        }  `}
      >
        <Menu />
      </div>
      <div className="grid grid-cols-1  md:grid-cols-5 mt-4 max-w-screen-xl lg:ml-72 3xl:mx-auto">
        <div className="h-full col-span-4 ">
          {banner && <Banner />}
          {tabOption && <TabSelector tabOption={tabOption} />}
        </div>
        <div
          className={`hidden md:inline-flex ${
            isOpen ? "bg-blue-500" : "bg-red-500"
          } h-40`}
        ></div>
      </div>
    </div>
  );
}

export default Body;
{
  /* <div className="grid grid-cols-1 h-full md:grid-cols-4 ">
      <div className="hidden md:flex h-full overflow-auto">
        <Menu />
      </div>
      <div className="col-span-2 my-4 h-full overflow-y-visible">
        <Banner />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="hidden md:flex  h-48 my-4"></div>
    </div> */
}
