import Layout from "../components/layout";
import { nraTabOptions } from "../data/tabOptions";
import { Tab } from "@headlessui/react";
import Post from "../components/Post";
import { StyledTab, TabPanel } from "../components/SampleTabs";

const tabNames = nraTabOptions.map((option) => (
  <StyledTab label={option.title} key={option.key} />
));

export default function NRA({ data, widgetData }) {
  const Tab1Data = data.filter((option) => option.Tab == "Tab1");
  const Tab2Data = data.filter((option) => option.Tab == "Tab2");
  const Tab3Data = data.filter((option) => option.Tab == "Tab3");
  const Tab4Data = data.filter((option) => option.Tab == "Tab4");
  const Tab5Data = data.filter((option) => option.Tab == "Tab5");

  const tabData = [Tab1Data, Tab2Data, Tab3Data, Tab4Data, Tab5Data];

  // const TabPanels = [
  //   <Tab.Panel key={1}>
  //     {Tab1Data.map((option) => {
  //       return (
  //         <Post
  //           key={option.Post._id}
  //           title={option.Post.PostTitle}
  //           subTitle={option.Post.SubTitle}
  //           time={option.updatedAt}
  //           points={option.Post.Points}
  //           picture={option.Post.PostPicture.url}
  //           alt={option.Post.PostPicture.alternativeText}
  //         />
  //       );
  //     })}
  //   </Tab.Panel>,
  //   ,
  //   <Tab.Panel key={2}>
  //     {Tab2Data.map((option) => (
  //       <Post
  //         key={option.Post._id}
  //         title={option.Post.PostTitle}
  //         subTitle={option.Post.SubTitle}
  //         time={option.updatedAt}
  //         points={option.Post.Points}
  //         picture={option.Post.PostPicture.url}
  //         alt={option.Post.PostPicture.alternativeText}
  //       />
  //     ))}
  //   </Tab.Panel>,
  //   ,
  //   <Tab.Panel key={3}>
  //     {Tab3Data.map((option) => (
  //       <Post
  //         key={option.Post._id}
  //         title={option.Post.PostTitle}
  //         subTitle={option.Post.SubTitle}
  //         time={option.updatedAt}
  //         points={option.Post.Points}
  //         picture={option.Post.PostPicture.url || null}
  //         alt={option.Post.PostPicture.alternativeText}
  //       />
  //     ))}
  //   </Tab.Panel>,
  //   ,
  //   <Tab.Panel key={4}>
  //     {Tab4Data.map((option) => (
  //       <Post
  //         key={option.Post._id}
  //         title={option.Post.PostTitle}
  //         subTitle={option.Post.SubTitle}
  //         time={option.updatedAt}
  //         points={option.Post.Points}
  //         picture={option.Post.PostPicture.url || null}
  //         alt={option.Post.PostPicture.alternativeText}
  //       />
  //     ))}
  //   </Tab.Panel>,
  //   ,
  //   <Tab.Panel key={5}>
  //     {Tab5Data.map((option) => (
  //       <Post
  //         key={option._id}
  //         title={option.Post.PostTitle}
  //         subTitle={option.Post.SubTitle}
  //         time={option.updatedAt}
  //         points={option.Post.Points}
  //         picture={option.Post.PostPicture.formats.small.url}
  //         alt={option.Post.PostPicture.alternativeText}
  //       />
  //     ))}
  //   </Tab.Panel>,
  // ];

  return (
    <Layout
      pageTitle="NRA"
      tabOption={1}
      tabNames={tabNames}
      tabData={tabData}
      widgetData={widgetData}
    ></Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://mighty-wave-83703.herokuapp.com/nra-posts`);
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
