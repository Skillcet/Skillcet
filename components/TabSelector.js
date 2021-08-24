import React from "react";
import { Tab } from "@headlessui/react";
import Post from "../components/Post";
function TabSelector({ tabOption }) {
  const tabOptions = tabOption.map((option) => (
    <Tab
      key={option.key}
      className={({ selected }) =>
        selected ? "bg-red-500 h-full w-1/5 py-7" : "w-1/5"
      }
    >
      {option.title}
    </Tab>
  ));
  const tabContent = tabOption.map((option) => (
    <Tab.Panel key={option.key}>{option.content}</Tab.Panel>
  ));
  return (
    <div className="w-11/12 mx-auto rounded-xl">
      <Tab.Group defaultIndex="0">
        <Tab.List className="flex justify-between rounded-xl bg-blue-500 text-white">
          {tabOptions}
        </Tab.List>
        <Tab.Panels>
          {tabContent}
          <div className="my-4">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default TabSelector;
