import React from "react";
import { GetAnnouncement, ListAnnouncements } from "schweb-parser/dist";
import BasePage from "../../../components/Page/BasePage";
import { ArticlePageComponent } from "../../../components/Page/ArticlePageComponent";
import FieldsGroup from "../../../components/Field/FieldsGroup";
import Field from "../../../components/Field/Field";
import AnnouncementBody from "../../../components/Announcements/AnnouncementBody";
import { HumanReadableCategory } from "../../../common/AnnouncementCategory";
import type { AnnouncementCategory } from "../../../common/AnnouncementCategory";
import type { GetServerSideProps } from "next";
import type { AnnouncementContent } from "schweb-parser/dist/types/announcements/types";

export interface AnnouncementPageProps {
  category: AnnouncementCategory;
  pid: string;
  data: AnnouncementContent;
}

export default function AnnouncementPage({
  data,
  category,
}: AnnouncementPageProps) {
  const categoryName = HumanReadableCategory(category);
  const announcementTitle = data.title;

  return (
    <BasePage
      id="announcement-page"
      title={`${categoryName}：${announcementTitle}`}
    >
      <FieldsGroup>
        <Field title={`公告 / ${categoryName} / ${announcementTitle}`}>
          <ArticlePageComponent
            title={data.title}
            subtitle={HumanReadableCategory(category)}
          >
            <AnnouncementBody data={data} />
          </ArticlePageComponent>
        </Field>
      </FieldsGroup>
    </BasePage>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params || !context.params.category || !context.params.pid)
    throw new Error("unexpected: params, category or pid is null");
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
            data: announcementData.data,
          },
        };
    } catch (e: unknown) {
      // Maybe it is a link to an external site?
      const announcementsData = await ListAnnouncements(category);
      const data = announcementsData?.data.filter(
        (announce) => announce.id === pid
      );

      if (data && data[0]?.url)
        return {
          redirect: {
            destination: data[0].url,
            permanent: false,
          },
        };
    }
  }

  return {
    notFound: true,
  };
};
