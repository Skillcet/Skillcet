import Layout from "../components/layout";
import Body from "../components/Body";

export default function Home({ data }) {
  return (
    <Layout pageTitle="Home">
      {console.log(data.hero?.title)}
      <Body />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/homepage`);
  const data = await res.json();
  return {
    props: { data },
  };
}
