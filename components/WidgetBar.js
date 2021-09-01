import React from "react";
import Marquee from "react-marquee-master";

const marqueeItems = [
  "First",
  "First",
  "First",
  "First",
  "First",
  "Second",
  "Second",
  "Second",
];

function WidgetBar() {
  return (
    <div className="w-full">
      {/* Notifications */}
      <div className="mb-3">
        <div className=" bg-blue-100 w-full pb-4">
          <h1 className="pt-2 text-center">Notifications</h1>
          <hr className="border-t-w-[2px] border-black w-11/12 mx-auto my-2" />
          <Marquee
            marqueeItems={marqueeItems}
            marqueeClassName="text-sm"
            marqueeContainerClassName="w-11/12 mx-auto min-h-full"
          />
        </div>
      </div>
      {/* Job Alerts */}
      <div className="my-3">
        <div className=" bg-blue-100 w-full pb-4">
          <h1 className="pt-2 text-center">Job Alerts</h1>
          <hr className="border-t-w-[2px] border-black w-11/12 mx-auto my-2" />
          <Marquee
            marqueeItems={marqueeItems}
            marqueeClassName="text-sm"
            marqueeContainerClassName="w-11/12 mx-auto min-h-full"
          />
        </div>
      </div>
      {/* New Batches */}
      <div className="my-3">
        <div className=" bg-blue-100 w-full pb-4">
          <h1 className="pt-2 text-center">New Batches</h1>
          <hr className="border-t-w-[2px] border-black w-11/12 mx-auto my-2" />
          <Marquee
            marqueeItems={marqueeItems}
            marqueeClassName="text-sm"
            marqueeContainerClassName="w-11/12 mx-auto min-h-full"
          />
        </div>
      </div>
      {/* Material */}
      <div className="my-3">
        <div className=" bg-blue-100 w-full pb-4">
          <h1 className="pt-2 text-center">Material</h1>
          <hr className="border-t-w-[2px] border-black w-11/12 mx-auto my-2" />
        </div>
      </div>
      {/* Test Marketing */}
      <div className="my-3">
        <div className=" bg-blue-100 w-full pb-4">
          <h1 className="pt-2 text-center">test Marketing</h1>
          <hr className="border-t-w-[2px] border-black w-11/12 mx-auto my-2" />
          <Marquee
            marqueeItems={marqueeItems}
            marqueeClassName="text-sm"
            marqueeContainerClassName="w-11/12 mx-auto min-h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default WidgetBar;
