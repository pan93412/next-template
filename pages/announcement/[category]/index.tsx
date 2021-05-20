import React from "react";
import { ListAnnouncements } from "schweb-parser/dist";
import {
  AnnouncementCategoryMetadata,
  isValidAnnouncementCategory,
} from "../../../common/AnnouncementCategory";
import AnnouncementCards from "../../../components/Announcements/Cards";
import BasePage from "../../../components/Page/BasePage";
import FieldsGroup from "../../../components/Field/FieldsGroup";
import Field from "../../../components/Field/Field";
import type { AnnouncementCategory } from "../../../common/AnnouncementCategory";
import type { GetServerSideProps } from "next";
import type { Announcement } from "schweb-parser/dist/types/announcements/types";

interface Props {
  category: AnnouncementCategory;
  data: Announcement[];
}

export default function AnnouncementOverviewPage({ data, category }: Props) {
  return (
    <BasePage id="announcement overview">
      <div className="p-4">
        <FieldsGroup>
          <Field
            title={`公告 / ${AnnouncementCategoryMetadata[category].type}`}
          >
            <AnnouncementCards data={data} maxColumns={4} category={category} />
          </Field>
        </FieldsGroup>
      </div>
    </BasePage>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  if (!context.query.category) throw new Error("unexpected: category is null");
  const { category } = context.query;
  if (Array.isArray(category))
    throw new Error("unexpected: category is an array");

  if (isValidAnnouncementCategory(category)) {
    const data = await ListAnnouncements(category);
    if (data) {
      return {
        props: {
          category,
          data: data.data,
        },
      };
    }
  }

  return {
    redirect: {
      destination: "/announcement/category/school",
      permanent: true,
    },
  };
};
