import Head from "next/head";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Body from "../components/Body";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Body />
      <MobileHeader />
    </div>
  );
}
