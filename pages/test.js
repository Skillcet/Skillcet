import { Tab } from "@headlessui/react";

export default function MyTabs() {
  return (
    <div className="w-1/2 mx-auto">
      <Tab.Group defaultIndex="0">
        <Tab.List className="w-full  bg-gray-700 py-2 px-7 flex justify-between text-white">
          <Tab
            className={({ selected }) =>
              selected ? "bg-blue-500 text-white" : "bg-white text-black"
            }
          >
            Tab 1
          </Tab>
          <Tab
            className={({ selected }) =>
              selected ? "bg-blue-500 text-white" : "bg-white text-black"
            }
          >
            Tab 2
          </Tab>
          <Tab
            className={({ selected }) =>
              selected ? "bg-blue-500 text-white" : "bg-white text-black"
            }
          >
            Tab 3
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
