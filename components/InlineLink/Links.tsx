/* eslint-disable import/prefer-default-export */
import Link from "next/link";
import React from "react";

export const AnnouncementLink = () => <Link href="/">公告</Link>;
export const AnnouncementCategoryLink = ({
  category,
  name,
}: {
  category: string;
  name: string;
}) => <Link href={`/announcement/${category}`}>{name}</Link>;
