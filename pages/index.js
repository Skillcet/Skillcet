import Layout from "../components/layout";
import Body from "../components/Body";
import Post from "../components/Post";
export default function Home({ data }) {
  return <Layout pageTitle="Home" banner="true"></Layout>;
}

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.API_URL}/homepage`);
//   const data = await res.json();
//   return {
//     props: { data },
//   };
// }
