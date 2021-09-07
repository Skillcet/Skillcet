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

function WidgetBar({ widgetData }) {
  const JobAlertsData = widgetData
    .filter((option) => option.WidgetOptions == "JobAlerts")[0]
    .Points.map((point) => <li key={point._id}>{point.ThePoint}</li>);
  const NewBatchesData = widgetData
    .filter((option) => option.WidgetOptions == "NewBatches")[0]
    .Points.map((point) => <li key={point._id}>{point.ThePoint}</li>);
  const TestMarketingData = widgetData
    .filter((option) => option.WidgetOptions == "TestMarketing")[0]
    .Points.map((point) => <li key={point._id}>{point.ThePoint}</li>);

  return (
    <div className="w-full">
      {/* Job Alerts */}
      <div className="mb-3">
        <div className=" bg-blue-100 w-full pb-4">
          <h1 className="pt-2 text-center">Job Alerts</h1>
          <hr className="border-t-w-[2px] border-black w-11/12 mx-auto my-2" />
          <Marquee
            marqueeItems={JobAlertsData}
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
            marqueeItems={NewBatchesData}
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
