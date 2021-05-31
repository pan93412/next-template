import React from "react";
import { HumanReadableCategory } from "../../common/AnnouncementCategory";
import BaseLargeCard from "../Card/BaseCard";
import type { Announcement } from "schweb-parser/dist/types/announcements/types";
import type { AnnouncementCategory } from "../../common/AnnouncementCategory";

export interface AnnouncementCardsProps {
  data: Announcement[];
  category: AnnouncementCategory;
  maxColumns: number;
  maxCards?: number;
}

export default function AnnouncementCards({
  data,
  category,
  maxColumns,
  maxCards,
}: AnnouncementCardsProps) {
  const myData = maxCards ? data.slice(0, maxCards) : data;

  return (
    <div
      className={`grid grid-flow-row grid-cols-1 md:grid-cols-${maxColumns} gap-3 auto-cols-fr`}
    >
      {myData.map(({ id, title }) => (
        <BaseLargeCard
          subtitle={HumanReadableCategory(category)}
          href={`/announcement/${category}/${id}`}
          key={`announcement-card-${id}`}
        >
          {title}
        </BaseLargeCard>
      ))}
    </div>
  );
}
