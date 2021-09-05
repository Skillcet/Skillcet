import Layout from "../components/layout";
import { graduationTabOptions } from "../data/tabOptions";
import { Tab } from "@headlessui/react";
import Post from "../components/Post";

const tabNames = graduationTabOptions.map((option) => (
  <Tab
    key={option.key}
    className={({ selected }) =>
      selected
        ? "bg-blue-600 font-semibold h-full w-1/5 py-2"
        : "w-1/5 font-semibold"
    }
  >
    {option.title}
  </Tab>
));

export default function NRA({ data, widgetData }) {
  const Tab1Data = data.filter((option) => option.Tab == "Syllabus");
  const Tab2Data = data.filter((option) => option.Tab == "Material");
  const Tab3Data = data.filter((option) => option.Tab == "Tests");
  const Tab4Data = data.filter((option) => option.Tab == "CareerProgress");
  const Tab5Data = data.filter((option) => option.Tab == "Batches");

  // const TabData = [Tab1Data, Tab2Data, Tab3Data, Tab4Data, Tab5Data];

  const TabPanels = [
    <Tab.Panel key={1}>
      {Tab1Data.map((option) => {
        return (
          <Post
            key={option.Post._id}
            title={option.Post.PostTitle}
            subTitle={option.Post.SubTitle}
            time={option.updatedAt}
            points={option.Post.Points}
            picture={option.Post.PostPicture.url}
            alt={option.Post.PostPicture.alternativeText}
          />
        );
      })}
    </Tab.Panel>,
    ,
    <Tab.Panel key={2}>
      {Tab2Data.map((option) => (
        <Post
          key={option.Post._id}
          title={option.Post.PostTitle}
          subTitle={option.Post.SubTitle}
          time={option.updatedAt}
          points={option.Post.Points}
          picture={option.Post.PostPicture.url}
          alt={option.Post.PostPicture.alternativeText}
        />
      ))}
    </Tab.Panel>,
    ,
    <Tab.Panel key={3}>
      {Tab3Data.map((option) => (
        <Post
          key={option.Post._id}
          title={option.Post.PostTitle}
          subTitle={option.Post.SubTitle}
          time={option.updatedAt}
          points={option.Post.Points}
          picture={option.Post.PostPicture.url || null}
          alt={option.Post.PostPicture.alternativeText}
        />
      ))}
    </Tab.Panel>,
    ,
    <Tab.Panel key={4}>
      {Tab4Data.map((option) => (
        <Post
          key={option.Post._id}
          title={option.Post.PostTitle}
          subTitle={option.Post.SubTitle}
          time={option.updatedAt}
          points={option.Post.Points}
          picture={option.Post.PostPicture.url || null}
          alt={option.Post.PostPicture.alternativeText}
        />
      ))}
    </Tab.Panel>,
    ,
    <Tab.Panel key={5}>
      {Tab5Data.map((option) => (
        <Post
          key={option._id}
          title={option.Post.PostTitle}
          subTitle={option.Post.SubTitle}
          time={option.updatedAt}
          points={option.Post.Points}
          picture={option.Post.PostPicture.formats.small.url}
          alt={option.Post.PostPicture.alternativeText}
        />
      ))}
    </Tab.Panel>,
  ];

  return (
    <Layout
      pageTitle="Graduate Level"
      tabOption={1}
      tabNames={tabNames}
      tabData={TabPanels}
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
