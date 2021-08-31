import React from "react";
import { useState } from "react";
import Banner from "../components/Banner";
import Post from "../components/Post";
import Menu from "../components/Menu";
import TabSelector from "./TabSelector";
function Body({ data, banner, tabOption, tabData, tabNames, isOpen }) {
  console.log(tabData);
  return (
    <div className="mb-14 md:mb-0 md:mr-8 3xl:mr-0 mx-auto">
      <div
        className={`hidden lg:inline-flex hover:shadow-lg fixed w-72 pr-2 border-r top-12 sm:top-16 md:top-18 bg-white z-10  overflow-x-hidden overflow-y-auto menuheight transform ${
          isOpen
            ? "translate-x-0 ease-out transition duration-200"
            : "-translate-x-full ease-in transition duration-200"
        }  `}
      >
        <Menu />
      </div>
      <div className="grid grid-cols-1 mx-auto md:grid-cols-5 mt-4 max-w-screen-xl lg:ml-72 3xl:mx-auto">
        <div className="h-full col-span-4 ">
          {banner && <Banner />}
          {tabOption && <TabSelector tabNames={tabNames} tabData={tabData} />}
          {!tabOption && data && (
            <div>
              {data?.map((object) => {
                return (
                  <Post
                    title={object.Title}
                    subTitle={object.SubTitle}
                    time="5 hours ago."
                    points={object.Points}
                    picture={object.PostPicture.url}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div
          className={`hidden md:inline-flex col-span-1  ${
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
