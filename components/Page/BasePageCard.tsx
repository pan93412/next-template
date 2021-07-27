import React from "react";
import type { ReactNode } from "react";
import BaseCard from "../Elements/Card/BaseCard";
import type { BasePageProps } from "./BasePage";
import BasePage from "./BasePage";

export interface BasePageCardProps extends BasePageProps {
  children: ReactNode;
}

export default function BasePageCard({ title, children }: BasePageCardProps) {
  return (
    <BasePage title={title}>
      <div className="flex content-center justify-center">
        <BaseCard>{children}</BaseCard>
      </div>
    </BasePage>
  );
}
