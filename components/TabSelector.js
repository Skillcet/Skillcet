import React from "react";
import { Tab } from "@headlessui/react";

function TabSelector({ tabNames, tabData }) {
  //

  return (
    <div className="w-11/12 mx-auto">
      <Tab.Group defaultIndex="0">
        <Tab.List className="flex bg-blue-500 px-6 rounded-xl text-white">
          {tabNames}
        </Tab.List>
        <Tab.Panels>{tabData}</Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default TabSelector;
