import React from "react";
import Marquee from "react-marquee-master";
import Image from "next/image";
import MaterialSample from "../public/material_1.png";
function WidgetBar({ widgetData }) {
  const JobAlertsData = widgetData
    .filter((option) => option.WidgetOptions == "JobAlerts")[0]
    .Points.map((point) => (
      <li className="py-2" key={point._id}>
        {point.ThePoint}
      </li>
    ));
  const NewBatchesData = widgetData
    .filter((option) => option.WidgetOptions == "NewBatches")[0]
    .Points.map((point) => (
      <li className="py-2" key={point._id}>
        {point.ThePoint}
      </li>
    ));
  const TestMarketingData = widgetData
    .filter((option) => option.WidgetOptions == "TestMarketing")[0]
    .Points.map((point) => (
      <li className="py-2" key={point._id}>
        {point.ThePoint}
      </li>
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
            marqueeClassName="text-sm"
            marqueeContainerClassName="w-11/12 mx-auto min-h-full"
          />
        </div>
      </div>
      {/* New Batches */}
      <div className="my-3">
        <div className=" bg-customSearchBar w-full pb-4 rounded-lg">
          <h1 className="pt-2 text-center">New Batches</h1>
          <hr className="border-t-w-[2px] border-secondaryBlue1 mx-6 my-2" />
          {/* <Marquee
            marqueeItems={NewBatchesData}
            marqueeClassName="text-sm"
            marqueeContainerClassName="w-11/12 mx-auto min-h-full"
          /> */}
          <div className="w-11/12 mx-auto min-h-full text-sm">
            {NewBatchesData}
          </div>
        </div>
      </div>
      {/* Material */}
      <div className="my-3">
        <div className=" bg-customSearchBar w-full pb-4 rounded-lg">
          <h1 className="pt-2 text-center">Material</h1>
          <hr className="border-t-w-[2px] border-secondaryBlue1 mx-6 mt-2 mb-4" />
          <div className="mx-auto">
            <div className=" mx-[48px] relative">
              <Image
                className="mx-auto"
                src={MaterialSample}
                alt="Material"
                objectFit="fill"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Test Marketing */}
      <div className="my-3">
        <div className=" bg-customSearchBar w-full pb-4 rounded-lg">
          <h1 className="pt-2 text-center">test Marketing</h1>
          <hr className="border-t-w-[2px] border-secondaryBlue1 mx-6 my-2" />
          <Marquee
            marqueeItems={TestMarketingData}
            marqueeClassName="text-sm"
            marqueeContainerClassName="w-11/12 mx-auto min-h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default WidgetBar;
