import Layout from "../components/layout";
import { NewBatchesTabOptions } from "../data/tabOptions";
import { Tab } from "@headlessui/react";
import Post from "../components/Post";

import { StyledTab, TabPanel } from "../components/SampleTabs";

const tabNames = NewBatchesTabOptions.map((option) => (
  <StyledTab label={option.title} key={option.key} />
));

export default function NRA({ data, widgetData }) {
  const Tab1Data = data.filter((option) => option.Tab == "FreeBatches");
  const Tab2Data = data.filter((option) => option.Tab == "TalkWithToppers");
  const Tab3Data = data.filter((option) => option.Tab == "OnlineBatches");
  const Tab4Data = data.filter((option) => option.Tab == "HybridBatches");
  const Tab5Data = data.filter((option) => option.Tab == "ClassroomBatches");

  const TabData = [Tab1Data, Tab2Data, Tab3Data, Tab4Data, Tab5Data];

  return (
    <Layout
      pageTitle="New Batches"
      tabOption={1}
      tabNames={tabNames}
      tabData={TabData}
      widgetData={widgetData}
    ></Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://mighty-wave-83703.herokuapp.com/new-batches`
  );
  const data = await res.json();
  const res1 = await fetch(
    `https://mighty-wave-83703.herokuapp.com/notifications`
  );

  // `https://mighty-wave-83703.herokuapp.com/nra-posts?_sort=Tab:ASC`

  const widgetData = await res1.json();

  return {
    props: { data, widgetData }, // will be passed to the page component as props
    revalidate: 10,
  };
}
