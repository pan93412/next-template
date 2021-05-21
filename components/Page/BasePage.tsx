import React from "react";
import Navbar from "../Navbar/Navbar";
import type { ReactNode } from "react";

export interface BasePageProps {
  id: string;
  children: ReactNode;
}

export default function BasePage({ id, children }: BasePageProps) {
  return (
    <div className={`page-${id}`}>
      <Navbar />
      <div className="p-8">{children}</div>
    </div>
  );
}
