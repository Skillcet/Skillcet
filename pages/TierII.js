import Layout from "../components/layout";
import { TierIITabOptions } from "../data/tabOptions";
import { Tab } from "@headlessui/react";
import Post from "../components/Post";

import { StyledTab, TabPanel } from "../components/SampleTabs";

const tabNames = TierIITabOptions.map((option) => (
  <StyledTab label={option.title} key={option.key} />
));

export default function NRA({ data, widgetData }) {
  const Tab1Data = data.filter((option) => option.Tab == "SSC");
  const Tab2Data = data.filter((option) => option.Tab == "IBPS");
  const Tab3Data = data.filter((option) => option.Tab == "RRB");
  const Tab4Data = data.filter((option) => option.Tab == "Skillcet");
  const Tab5Data = data.filter((option) => option.Tab == "Others");

  const TabData = [Tab1Data, Tab2Data, Tab3Data, Tab4Data, Tab5Data];

  return (
    <Layout
      pageTitle="Tier II"
      tabOption={1}
      tabNames={tabNames}
      tabData={TabData}
      widgetData={widgetData}
    ></Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://mighty-wave-83703.herokuapp.com/tier-ii-posts`
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
