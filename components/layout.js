import Head from "next/head";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Body from "../components/Body";
import { useState } from "react";
export default function Layout({ children, pageTitle, banner, tabOption }) {
  const [isOpen, SetIsOpen] = useState(1);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header SetIsOpen={SetIsOpen} isOpen={isOpen} />
      <Body banner={banner} tabOption={tabOption} isOpen={isOpen} />
      <main>{children}</main>
      <MobileHeader />
    </>
  );
}
