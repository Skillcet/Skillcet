import Layout from "../components/layout";
/* import loadable from "@loadable/component"; */
import Body from "../components/Body";
/* const Body = loadable(() => import("../components/Body")); */
export default function Home() {
  return (
    <Layout pageTitle="NRA">
      <Body />
    </Layout>
  );
}
