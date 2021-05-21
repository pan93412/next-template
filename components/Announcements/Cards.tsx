import React from "react";
import { HumanReadableCategory } from "../../common/AnnouncementCategory";
import BaseLargeCard from "../Base/BaseCardV2";
import type { Announcement } from "schweb-parser/dist/types/announcements/types";
import type { AnnouncementCategory } from "../../common/AnnouncementCategory";

export interface AnnouncementCardsProps {
  data: Announcement[];
  category: AnnouncementCategory;
  maxColumns: number;
}

export default function AnnouncementCards({
  data,
  category,
  maxColumns,
}: AnnouncementCardsProps) {
  return (
    <div
      className={`grid grid-flow-row grid-cols-${maxColumns} gap-3 auto-cols-fr`}
    >
      {data.map(({ id, title }) => (
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
