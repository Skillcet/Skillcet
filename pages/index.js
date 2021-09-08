import Layout from "../components/layout";
export default function Home({ data, widgetData }) {
  return (
    <Layout
      pageTitle="Home"
      banner="true"
      data={data}
      widgetData={widgetData}
      topPicture={1}
    ></Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.API_URL}/homepage`);
//   const data = await res.json();
//   return {
//     props: { data },
//   };
// }
export async function getStaticProps() {
  const res = await fetch(
    `https://mighty-wave-83703.herokuapp.com/homepage-posts`
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
