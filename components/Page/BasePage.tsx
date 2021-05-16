import React from "react";
import type { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";

export interface BasePageProps {
  id: string;
  children: ReactNode;
}

export default function BasePage({ id, children }: BasePageProps) {
  return (
    <div className={`page-${id}`}>
      <Navbar />
      {children}
    </div>
  );
}
