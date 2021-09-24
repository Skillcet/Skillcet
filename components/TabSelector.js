import React from "react";
import { Tab } from "@headlessui/react";

function TabSelector({ tabNames, tabData }) {
  //

  return (
    <div className="w-full mx-auto">
      <Tab.Group defaultIndex="0">
        <div className="fadeaway bg-white pt-[24px] top-[64px] sticky z-[5]">
          <Tab.List className="flex bg-primaryBlue1 px-6 rounded-xl text-white ">
            {tabNames}
          </Tab.List>
          <div className="gradient-mask h-4"></div>
        </div>
        <Tab.Panels>{tabData}</Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default TabSelector;
