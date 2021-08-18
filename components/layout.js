import Head from "next/head";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <MobileHeader />
    </>
  );
}
