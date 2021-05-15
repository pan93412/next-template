import React from "react";
import { ListAnnouncementsMeta } from "schweb-parser/dist";
import { Announcement } from "schweb-parser/dist/types/announcements/types";
import useSWR, { SWRResponse } from "swr";
import { Announcements, AnnouncementsMeta } from "../../common/Announcements";
import Card from "../Base/BaseCard";

async function getAnnouncements(
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
  category: Announcements;
  maxColumns: number;
  // maxCards?: number;
}

export default function AnnouncementCards({
  category, maxColumns
}: AnnouncementCardsProps) {
  const endp = ListAnnouncementsMeta.endpoint;
  const useMySWR = (category: string) =>
    useSWR(endp(category), getAnnouncements, {
      revalidateOnMount: true,
    });

  const data = useMySWR(category);

  return (
    <div className={`grid grid-flow-row grid-cols-${maxColumns} auto-cols-fr`}>
      {data.data?.map((announce) => (
        <Card
          subtitle={AnnouncementsMeta[category].type}
          href={`/announcement/${category}/${announce.id}`}
          key={announce.id}
        >
          {announce.title}
        </Card>
      ))}
    </div>
  );
}
