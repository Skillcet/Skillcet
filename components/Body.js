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
}) {
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
      <div className="grid grid-cols-1 mx-auto md:grid-cols-5  mt-6 max-w-screen-xl lg:ml-72 3xl:mx-auto">
        {/* Feed */}
        <div className="h-full col-span-4  w-[95%] mx-auto">
          {banner && <Banner />}
          {tabOption && <TabSelector tabNames={tabNames} tabData={tabData} />}
          {!tabOption && data && (
            <div>
              {data?.map((object) => {
                return (
                  <Post
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
        <div className={`hidden md:inline-flex col-span-1 h-40`}>
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
