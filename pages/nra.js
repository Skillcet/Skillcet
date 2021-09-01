import Layout from "../components/layout";
import { nraTabOptions } from "../data/tabOptions";
import { Tab } from "@headlessui/react";
import Post from "../components/Post";

const tabNames = nraTabOptions.map((option) => (
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

export default function NRA({ data }) {
  const Tab1Data = data.filter((option) => option.Tab == "Tab1");
  const Tab2Data = data.filter((option) => option.Tab == "Tab2");
  const Tab3Data = data.filter((option) => option.Tab == "Tab3");
  const Tab4Data = data.filter((option) => option.Tab == "Tab4");
  const Tab5Data = data.filter((option) => option.Tab == "Tab5");

  console.log(Tab3Data);
  // const TabData = [Tab1Data, Tab2Data, Tab3Data, Tab4Data, Tab5Data];

  const TabPanels = [
    <Tab.Panel>
      {Tab1Data.map((option) => {
        return (
          <Post
            key={option.Post._id}
            title={option.Post.PostTitle}
            subTitle={option.Post.SubTitle}
            time={option.Post.published_at}
            points={option.Post.Points}
            picture={option.Post.PostPicture.url}
          />
        );
      })}
    </Tab.Panel>,
    ,
    <Tab.Panel>
      {Tab2Data.map((option) => (
        <Post
          title={option.Post.PostTitle}
          subTitle={option.Post.SubTitle}
          time={option.Post.published_at}
          points={option.Post.Points}
          picture={option.Post.PostPicture.url}
        />
      ))}
    </Tab.Panel>,
    ,
    <Tab.Panel>
      {Tab3Data.map((option) => (
        <Post
          title={option.Post.PostTitle}
          subTitle={option.Post.SubTitle}
          time={option.Post.published_at}
          points={option.Post.Points}
          picture={option.Post.PostPicture.url || null}
        />
      ))}
    </Tab.Panel>,
    ,
    <Tab.Panel>
      {Tab4Data.map((option) => (
        <Post
          title={option.Post.PostTitle}
          subTitle={option.Post.SubTitle}
          time={option.Post.published_at}
          points={option.Post.Points}
          picture={option.Post.PostPicture.url || null}
        />
      ))}
    </Tab.Panel>,
    ,
    <Tab.Panel>
      {Tab5Data.map((option) => (
        <Post
          title={option.Post.PostTitle}
          subTitle={option.Post.SubTitle}
          time={option.Post.published_at}
          points={option.Post.Points}
          picture={option.Post.PostPicture.url}
        />
      ))}
    </Tab.Panel>,
  ];
  console.log(TabPanels);
  return (
    <Layout
      pageTitle="NRA"
      tabOption={1}
      tabNames={tabNames}
      tabData={TabPanels}
    ></Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://mighty-wave-83703.herokuapp.com/nra-posts`);

  // `https://mighty-wave-83703.herokuapp.com/nra-posts?_sort=Tab:ASC`
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 10,
  };
}
