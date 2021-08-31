import Layout from "../components/layout";
import Body from "../components/Body";
import Post from "../components/Post";
export default function Home({ data }) {
  return <Layout pageTitle="Home" banner="true" data={data}></Layout>;
}

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.API_URL}/homepage`);
//   const data = await res.json();
//   return {
//     props: { data },
//   };
// }
export async function getStaticProps(context) {
  const res = await fetch(
    `https://mighty-wave-83703.herokuapp.com/homepage-posts`
  );
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 10,
  };
}
