import { ListAnnouncementsMeta } from "schweb-parser/dist";
import useSWR from "swr";
import type { Announcement } from "schweb-parser/dist/types/announcements/types";

export default async function ListAnnouncementsSWR(
  input: RequestInfo,
  init?: RequestInit
): Promise<Announcement[] | null> {
  const resp = await fetch(input, init);
  if (!resp.ok) return null;  aaa

  const json = (await resp.json()) as Promise<unknown>;
  if (!ListAnnouncementsMeta.checker(json)) return null;

  return json.data;
}

export const useListAnnouncementsSWR = (category: string) =>
  useSWR(ListAnnouncementsMeta.endpoint(category), ListAnnouncementsSWR);
