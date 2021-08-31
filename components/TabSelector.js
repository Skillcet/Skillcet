import React from "react";
import { Tab } from "@headlessui/react";

function TabSelector({ tabNames, tabData }) {
  //

  return (
    <div className="rounded-xl w-11/12 mx-auto">
      <Tab.Group defaultIndex="0">
        <Tab.List className="flex justify-between rounded-xl bg-blue-500 text-white">
          {tabNames}
        </Tab.List>
        <Tab.Panels>{tabData}</Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default TabSelector;
