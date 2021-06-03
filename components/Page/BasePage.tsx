import React from "react";
import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import type { ReactNode } from "react";

export interface BasePageProps {
  id: string;
  children: ReactNode;
  full?: boolean;
  title: string;
}

export default function BasePage({
  title,
  id,
  full = false,
  children,
}: BasePageProps) {
  return (
    <>
      <Head>
        <title>Inficast - {title}</title>
      </Head>
      <div className={`page-${id} ${full && "w-screen h-screen"}`}>
        <Navbar />
        <div className={`p-8 ${full && "w-full h-full"}`}>{children}</div>
      </div>
    </>
  );
}
