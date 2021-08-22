import Layout from "../components/layout";
import Body from "../components/Body";

export default function Home({ data }) {
  return (
    <Layout pageTitle="Home">
      <h1 className="ml-60">{data.hero.title}</h1>
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
