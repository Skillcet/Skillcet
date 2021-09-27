import React from "react";
import Marquee from "react-marquee-master";
import Image from "next/image";
import MaterialSample from "../public/material_1.png";
import Material from "./Material";
function WidgetBar({ widgetData }) {
  const JobAlertsData = widgetData
    .filter((option) => option.WidgetOptions == "JobAlerts")[0]
    .Points.map((point) => (
      <p
        className="py-[12.8px] list-item list-disc list-outside w-[90%] mx-auto"
        key={point._id}
      >
        {point.ThePoint}
      </p>
    ));
  const NewBatchesData = widgetData
    .filter((option) => option.WidgetOptions == "NewBatches")[0]
    .Points.map((point) => (
      <p
        className="py-[12.8px] list-item list-disc list-outside w-[90%] mx-auto"
        key={point._id}
      >
        {point.ThePoint}
      </p>
    ));
  const TestMarketingData = widgetData
    .filter((option) => option.WidgetOptions == "TestMarketing")[0]
    .Points.map((point) => (
      <p
        className="py-[12.8px] list-item list-disc list-outside w-[90%] mx-auto"
        key={point._id}
      >
        {point.ThePoint}
      </p>
    ));

  return (
    <div className="w-full mt-6">
      {/* Job Alerts */}
      <div className="mb-3 ">
        <div className=" bg-customSearchBar w-full pb-4 rounded-lg">
          <h1 className="py-[12.8px] text-center">Job Alerts</h1>
          <hr className="border-t-w-[2px] border-secondaryBlue1 mx-6 mb-2" />
          <Marquee
            marqueeItems={JobAlertsData}
            marqueeClassName="text-sm list-outside"
            marqueeContainerClassName="w-[86%] mx-auto min-h-full"
            delay={20}
          />
        </div>
      </div>
      {/* New Batches */}
      <div className="my-3">
        <div className=" bg-customSearchBar w-full pb-4 rounded-lg">
          <h1 className="py-[12.8px] text-center">New Batches</h1>
          <hr className="border-t-w-[2px] border-secondaryBlue1 mx-6 mb-2" />
          {/* <Marquee
            marqueeItems={NewBatchesData}
            marqueeClassName="text-sm"
            marqueeContainerClassName="w-11/12 mx-auto min-h-full"
          /> */}
          <div className="w-[86%] mx-auto min-h-full text-sm">
            {NewBatchesData}
          </div>
        </div>
      </div>
      {/* Material */}
      <Material />
      {/* Test Marketing */}
      <div className="my-3">
        <div className=" bg-customSearchBar w-full pb-4 rounded-lg">
          <h1 className="py-[12.8px] text-center">test Marketing</h1>
          <hr className="border-t-w-[2px] border-secondaryBlue1 mx-6 mb-2" />
          <Marquee
            marqueeItems={TestMarketingData}
            marqueeClassName="text-sm list-outside w-full"
            marqueeContainerClassName="w-[86%] mx-auto min-h-full"
            delay={20}
          />
        </div>
      </div>
    </div>
  );
}

export default WidgetBar;
{
  /* <div className="my-3">
      <div className=" bg-customSearchBar w-full pb-4 rounded-lg">
        <h1 className="pt-2 text-center">Material</h1>
        <hr className="border-t-w-[2px] border-secondaryBlue1 mx-6 mt-2 mb-4" />
        <div className="mx-auto">
          <div className=" mx-[48px] relative border-2 border-red-500">
            <Image
              className="mx-auto"
              src={MaterialSample}
              alt="Material"
              objectFit="fill"
            />
          </div>
        </div>
      </div>
    </div> */
}
