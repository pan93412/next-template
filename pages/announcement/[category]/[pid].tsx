import React, { useEffect } from 'react';
import { ArticlePageComponent } from '../../../components/Page/ArticlePageComponent';
import BasePage from '../../../components/Page/BasePage';
import type { GetServerSideProps } from "next";
import { GetAnnouncement, ListAnnouncements } from "schweb-parser/dist";
import { AnnouncementContent } from 'schweb-parser/dist/types/announcements/types';
import parse from "html-react-parser";
import Link from 'next/link';

export interface AnnouncementPageProps {
  category: string;
  pid: string;
  data: AnnouncementContent<unknown> | string | null;
}

export default function AnnouncementPage({ data, pid, category }: AnnouncementPageProps) {
  if (!data) {
    return (
      <BasePage id="announcement-page not-found">
        <div className="p-6">
          <h2 className="text-4xl font-mono mb-3">404</h2>
          <p>找不到 {category} 之下的 {pid} 公告。</p>
          <p>試試<span className="text-blue-500"><Link href="/">返回首頁</Link></span>看看更有趣的東西？</p>
        </div>
      </BasePage>
    );
  }

  if (typeof data === "string") {
    useEffect(() => {
      location.href = data;
    })
    return null;
  }

  return (
    <BasePage id="announcement-page">
      <ArticlePageComponent title={data.title} subtitle={category}>
        <div className="announcement content mb-6">
          {parse(data.contentHTML)}
        </div>
        {
          data.attachments.length > 0
          && (
            <div className="announcement attachments">
              <h2 className="text-xl font-bold mb-2">附件</h2>
              <ul className="list-disc">
                {data.attachments.map(({ name, url }) => {
                  return (
                    <li key={name+url}><a download className="text-blue-500" href={url}>{name}</a></li>
                  )
                })}
              </ul>
            </div>
          )
        }
      </ArticlePageComponent>
    </BasePage>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category, pid } = context.params;

  if (
    category &&
    pid &&
    typeof category === "string" &&
    typeof pid === "string"
  ) {
    try {
      const announcementData = await GetAnnouncement(category, pid);

      return {
        props: {
          category,
          pid,
          data: announcementData?.data || null,
        },
      };
    } catch (e: unknown) {
      // Maybe it is a link to an external site?
      const announcementsData = await ListAnnouncements(category);
      const data = announcementsData.data.filter(announce => announce.id === pid);

      return {
        props: {
          category,
          pid,
          data: data[0]?.url || null,
        },
      };
    }
  }

  return {
    props: {
      category,
      pid,
      data: null,
    }
  }
};
