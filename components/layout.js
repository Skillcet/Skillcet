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
  tabData,
  tabNames,
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
      <Body
        banner={banner}
        tabOption={tabOption}
        isOpen={isOpen}
        tabNames={tabNames}
        tabData={tabData}
        data={data}
      />
      <main>{children}</main>
      <MobileHeader />
    </>
  );
}
