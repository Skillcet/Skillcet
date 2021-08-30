import Head from "next/head";
import Header from "../components/Header_2";
import MobileHeader from "../components/MobileHeader";
import Body from "../components/Body";
import { useState } from "react";
export default function Layout({
  children,
  pageTitle,
  banner,
  tabOption,
  data,
}) {
  const [isOpen, SetIsOpen] = useState(1);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header SetIsOpen={SetIsOpen} isOpen={isOpen} />
      <Body banner={banner} tabOption={tabOption} isOpen={isOpen} data={data} />
      <main>{children}</main>
      <MobileHeader />
    </>
  );
}
