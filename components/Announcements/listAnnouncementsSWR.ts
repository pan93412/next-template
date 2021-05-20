import { ListAnnouncementsMeta } from "schweb-parser/dist";
import useSWR from "swr";
import type { Announcement } from "schweb-parser/dist/types/announcements/types";

export default async function listAnnouncementsSWR(
  input: RequestInfo,
  init?: RequestInit
): Promise<Announcement[] | never> {
  const resp = await fetch(input, init);
  if (!resp.ok) throw new Error(`failed to fetch: ${input.toString()}`);

  const json = (await resp.json()) as Promise<unknown>;

  if (!ListAnnouncementsMeta.checker(json)) {
    throw new Error(`data is invalid: ${JSON.stringify(json)}`);
  }

  return json.data;
}

export const useListAnnouncementsSWR = (category: string) =>
  useSWR(ListAnnouncementsMeta.endpoint(category), listAnnouncementsSWR);
