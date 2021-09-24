import Layout from "../components/layout";
import { graduationTabOptions } from "../data/tabOptions";
import { Tab } from "@headlessui/react";
import Post from "../components/Post";

import { StyledTab, TabPanel } from "../components/SampleTabs";

const tabNames = graduationTabOptions.map((option) => (
  <StyledTab label={option.title} key={option.key} />
));

export default function NRA({ data, widgetData }) {
  const Tab1Data = data.filter((option) => option.Tab == "Syllabus");
  const Tab2Data = data.filter((option) => option.Tab == "Material");
  const Tab3Data = data.filter((option) => option.Tab == "Tests");
  const Tab4Data = data.filter((option) => option.Tab == "CareerProgress");
  const Tab5Data = data.filter((option) => option.Tab == "Batches");

  const TabData = [Tab1Data, Tab2Data, Tab3Data, Tab4Data, Tab5Data];

  return (
    <Layout
      pageTitle="Graduate Level"
      tabOption={1}
      tabNames={tabNames}
      tabData={TabData}
      widgetData={widgetData}
    ></Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://mighty-wave-83703.herokuapp.com/graduation-posts`
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
