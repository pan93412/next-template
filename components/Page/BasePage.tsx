import React from "react";
import Head from "next/head";
import type { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "../../styles/BasePage.module.css";
import { PRODUCT_NAME } from "../../consts";

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
        <title>
          {PRODUCT_NAME} - {title}
        </title>
      </Head>
      <section
        className={`page-root page-${id} grid ${styles.basepageGrid} ${
          full && "w-screen h-screen"
        }`}
      >
        <section
          className={`page-${id}`}
          style={{
            gridArea: "navbar",
          }}
        >
          <Navbar />
        </section>
        <section
          className={`p-8 ${full && "h-full w-full"}`}
          style={{
            gridArea: "content",
          }}
        >
          {children}
        </section>
      </section>
    </>
  );
}
