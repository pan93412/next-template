import React from "react";
import { AnnouncementCategoryMetadata } from "../../common/AnnouncementCategory";
import BaseLargeCard from "../Base/BaseCardV2";
import type { Announcement } from "schweb-parser/dist/types/announcements/types";
import type { AnnouncementCategory } from "../../common/AnnouncementCategory";

// export async function getAnnouncementsSWR(
//   input: RequestInfo,
//   init?: RequestInit
// ): Promise<Announcement[] | never> {
//   const resp = await fetch(input, init);
//   if (!resp.ok)
//     throw new Error(`getAnnouncements: failed to fetch: ${input.toString()}`);

//   const json = (await resp.json()) as Promise<unknown>;

//   if (!ListAnnouncementsMeta.checker(json)) {
//     throw new Error(
//       `getAnnouncements: data is invalid: ${JSON.stringify(json)}`
//     );
//   }

//   return json.data;
// }

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
          subtitle={AnnouncementCategoryMetadata[category].type}
          href={`/announcement/${category}/${id}`}
          key={`announcement-card-${id}`}
        >
          {title}
        </BaseLargeCard>
      ))}
    </div>
  );
}
