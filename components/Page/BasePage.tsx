import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";

export interface BasePageProps {
  id: string;
  children: ReactNode;
}

export default function BasePage(props: BasePageProps) {
  return (
    <div className={`page-${props.id}`}>
      <Navbar></Navbar>
      { props.children }
    </div>
  )
}
