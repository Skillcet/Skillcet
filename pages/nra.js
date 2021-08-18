import Layout from "../components/layout";
import loadable from "@loadable/component";

const Body = loadable(() => import("../components/Body"));
export default function Home() {
  return (
    <Layout pageTitle="NRA">
      <Body />
    </Layout>
  );
}
