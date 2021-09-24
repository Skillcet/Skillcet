import Layout from "../components/layout";
import { OurBranchesTabOptions } from "../data/tabOptions";
import { Tab } from "@headlessui/react";
import Post from "../components/Post";

import { StyledTab, TabPanel } from "../components/SampleTabs";

const tabNames = OurBranchesTabOptions.map((option) => (
  <StyledTab label={option.title} key={option.key} />
));

export default function NRA({ data, widgetData }) {
  const Tab1Data = data.filter((option) => option.Tab == "Dilshuknagar");
  const Tab2Data = data.filter((option) => option.Tab == "Ashoknagar");
  const Tab3Data = data.filter((option) => option.Tab == "Ameerpet");
  const Tab4Data = data.filter((option) => option.Tab == "LocateOurBranches");
  const Tab5Data = data.filter((option) => option.Tab == "Y");

  const TabData = [Tab1Data, Tab2Data, Tab3Data, Tab4Data, Tab5Data];

  return (
    <Layout
      pageTitle="Our Branches"
      tabOption={1}
      tabNames={tabNames}
      tabData={TabData}
      widgetData={widgetData}
    ></Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://mighty-wave-83703.herokuapp.com/our-branches-posts`
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
