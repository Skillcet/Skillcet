import Layout from "../components/layout";
import { nraTabOptions } from "../data/tabOptions";
import Body from "../components/Body";

export default function NRA() {
  return <Layout pageTitle="NRA" tabOption={nraTabOptions}></Layout>;
}
