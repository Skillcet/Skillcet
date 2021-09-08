import React from "react";
import Banner from "../components/Banner";
import Post from "../components/Post";
import Menu from "../components/Menu";
import TabSelector from "./TabSelector";
import WidgetBar from "./WidgetBar";
function Body({
  data,
  widgetData,
  banner,
  tabOption,
  tabData,
  tabNames,
  isOpen,
  topPicture,
}) {
  return (
    <div className="mb-14 md:mb-0 mx-auto">
      <div
        className={`hidden lg:inline-flex hover:shadow-lg fixed w-[308px] border-r top-12 sm:top-16 md:top-18 bg-white z-10 overflow-x-hidden overflow-y-auto menuheight transform ${
          isOpen
            ? "translate-x-0 ease-out transition duration-200"
            : "-translate-x-full ease-in transition duration-200"
        }  `}
      >
        <Menu topPicture={topPicture} />
      </div>
      {/* Body */}
      <div className="md:flex align-top grid grid-cols-1 mx-auto mt-6 max-w-screen-xl lg:ml-[308px] 3xl:mx-auto">
        {/* Feed */}
        <div className="h-full w-11/12 lg:w-[717px] lg:mx-8 mx-auto">
          {banner && <Banner />}
          {tabOption && <TabSelector tabNames={tabNames} tabData={tabData} />}
          {!tabOption && data && (
            <div>
              {data?.map((object) => {
                return (
                  <Post
                    key={object._id}
                    title={object.Title}
                    subTitle={object.SubTitle}
                    time={object.updatedAt}
                    points={object.Points}
                    picture={object.PostPicture.url}
                    alt={object.alternativeText}
                  />
                );
              })}
            </div>
          )}
          {/* Footer */}
        </div>
        {/* Widgets */}
        <div className={`hidden md:inline-flex w-[265px] `}>
          <WidgetBar widgetData={widgetData} />
        </div>
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
