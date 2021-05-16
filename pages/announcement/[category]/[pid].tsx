import React, { useEffect } from "react";
import { ArticlePageComponent } from "../../../components/Page/ArticlePageComponent";
import BasePage from "../../../components/Page/BasePage";
import type { GetServerSideProps } from "next";
import { GetAnnouncement, ListAnnouncements } from "schweb-parser/dist";
import { AnnouncementContent } from "schweb-parser/dist/types/announcements/types";
import parse from "html-react-parser";
import Link from "next/link";
import {
  AnnouncementCategory,
  AnnouncementCategoryMetadata,
} from "../../../common/AnnouncementCategory";
import FieldsGroup from "../../../components/Field/FieldsGroup";
import AnnouncementCards from "../../../components/Announcements/Cards";

export interface AnnouncementPageProps {
  category: AnnouncementCategory;
  pid: string;
  data: AnnouncementContent<unknown> | string;
}

export default function AnnouncementPage({
  data,
  pid,
  category,
}: AnnouncementPageProps) {
  if (typeof data === "string") {
    useEffect(() => {
      location.href = data;
    });
    return null;
  }

  return (
    <BasePage id="announcement-page">
      <FieldsGroup>
        <AnnouncementCards
          maxColumns={1}
          category={category}
        ></AnnouncementCards>
        <div>
          <ArticlePageComponent
            title={data.title}
            subtitle={AnnouncementCategoryMetadata[category].type}
          >
            <div className="announcement content mb-6">
              {parse(data.contentHTML)}
            </div>
            {data.attachments.length > 0 && (
              <div className="announcement attachments">
                <h2 className="text-xl font-bold mb-2">附件</h2>
                <ul className="list-disc">
                  {data.attachments.map(({ name, url }) => {
                    return (
                      <li key={`announcement-details-${name}-${url}`}>
                        <a download className="text-blue-500" href={url}>
                          {name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </ArticlePageComponent>
        </div>
      </FieldsGroup>
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

      if (announcementData?.data)
        return {
          props: {
            category,
            pid,
            data: announcementData?.data,
          },
        };
    } catch (e: unknown) {
      // Maybe it is a link to an external site?
      const announcementsData = await ListAnnouncements(category);
      const data = announcementsData.data.filter(
        (announce) => announce.id === pid
      );

      if (data[0]?.url)
        return {
          props: {
            category,
            pid,
            data: data[0].url,
          },
        };
    }
  }

  return {
    notFound: true,
  };
};
