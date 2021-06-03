import React from "react";
import Head from "next/head";
import type { ReactNode } from "react";

export interface BasePageProps {
  id: string;
  children: ReactNode;
  title: string;
}

export default function BasePage({ title, id, children }: BasePageProps) {
  return (
    <>
      <Head>
        <title>Inficast - {title}</title>
      </Head>
      <div className={`page-${id}`}>
        {/* <Navbar /> */}
        <div className="p-8">{children}</div>
      </div>
    </>
  );
}
