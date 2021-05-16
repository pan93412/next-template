import React from "react";
import { ListAnnouncementsMeta } from "schweb-parser/dist";
import type { Announcement } from "schweb-parser/dist/types/announcements/types";
import useSWR from "swr";
import { AnnouncementCategory, AnnouncementCategoryMetadata } from "../../common/AnnouncementCategory";
import Card from "../Base/BaseCard";

async function getAnnouncementsSWR(
  input: RequestInfo,
  init?: RequestInit
): Promise<Announcement[] | never> {
  const resp = await fetch(input, init);
  if (!resp.ok)
    throw new Error(`getAnnouncements: failed to fetch: ${input.toString()}`);

  const json = await resp.json();
  if (!ListAnnouncementsMeta.checker(json)) {
    throw new Error(
      `getAnnouncements: data is invalid: ${JSON.stringify(json)}`
    );
  }

  return json.data;
}

export interface AnnouncementCardsProps {
  category: AnnouncementCategory;
  maxColumns: number;
  // maxCards?: number;
}

const endp = ListAnnouncementsMeta.endpoint;
const useMySWR = (category: string) =>
  useSWR(endp(category), getAnnouncementsSWR);

export default function AnnouncementCards({
  category, maxColumns
}: AnnouncementCardsProps) {
  const data = useMySWR(category);

  return (
    <div className={`grid grid-flow-row grid-cols-${maxColumns} gap-3 auto-cols-fr`}>
      {data.data?.map((announce) => (
        <Card
          subtitle={AnnouncementCategoryMetadata[category].type}
          href={`/announcement/${category}/${announce.id}`}
          key={`announcement-card-${announce.id}`}
        >
          {announce.title}
        </Card>
      ))}
    </div>
  );
}
