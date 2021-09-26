import React from "react";
import Banner from "../components/Banner";
import Post from "../components/Post";
import Menu from "../components/Menu";
import TabSelector from "./TabSelector";
import WidgetBar from "./WidgetBar";
import Footer from "./Footer";
import CustomizedTabs from "./SampleTabs";
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
        className={` menudiv hidden lg:inline-flex fixed  top-12 sm:top-16 md:top-18 bg-white z-10  menuheight transform ${
          isOpen
            ? "translate-x-0 ease-out transition duration-200"
            : "-translate-x-full ease-in transition duration-200"
        }  `}
      >
        <Menu topPicture={topPicture} />
      </div>
      {/* Body */}
      <div className="mx-4 align-top grid grid-cols-1 max-w-[1128px] lg:ml-[304px] 3xl:mx-auto lg:mx-6">
        <div className=" sm_1:grid sm_1:grid-cols-12 sm_1:gap-8">
          {/* Feed */}
          <div className="h-full w-full sm_1:col-span-8 flex flex-col min-h-[90vh]">
            {banner && <Banner />}
            {tabOption && (
              <CustomizedTabs StyledTab={tabNames} tabData={tabData} />
            )}
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
            <div className="flex-grow"></div>
            <Footer />
            {/* Footer */}
          </div>
          {/* Widgets */}
          <div className={`hidden sm_1:inline-flex sm_1:col-span-4 `}>
            <WidgetBar widgetData={widgetData} />
          </div>
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
