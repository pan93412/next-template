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
      <div
        className={`page-root page-${id} grid basepage-grid ${
          full && "w-screen h-screen"
        }`}
      >
        <style jsx scoped>{`
          .basepage-grid {
            grid-template:
              "navbar" min-content
              "content" auto / 100vw;
          }
        `}</style>
        <div
          className={`page-${id}`}
          style={{
            gridArea: "navbar",
          }}
        >
          <Navbar />
        </div>
        <div
          className={`p-8 ${full && "h-full w-full"}`}
          style={{
            gridArea: "content",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
