import React from "react";
import type { ReactNode } from "react";

export interface ArticlePageProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  submittedDate?: Date;
}

export function ArticlePageComponent({
  title,
  subtitle,
  children,
  submittedDate,
}: ArticlePageProps) {
  return (
    <div className="flex flex-col w-full align-left items-left items-center space-y-5">
      <div className="article w-full md:w-4/5 lg:w-3/5 meta bg-gray-50 p-5 rounded space-y-1 shadow">
        {submittedDate && (
          <p className="article date">{submittedDate.toLocaleString()}</p>
        )}
        <p className="article subtitle font-light text-md">{subtitle}</p>
        <h2 className="article title font-bold text-3xl">{title}</h2>
      </div>
      <div className="article w-full md:w-4/5 lg:w-3/5 content text-md p-5 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
