import React from "react";
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

interface Props {
  category: AnnouncementCategory;
}

export default function AnnouncementOverviewPage({ category }: Props) {
  return (
    <BasePage id="announcement overview">
      <div className="p-4">
        <FieldsGroup>
          <Field
            title={`公告 / ${AnnouncementCategoryMetadata[category].type}`}
          >
            <AnnouncementCards maxColumns={4} category={category} />
          </Field>
        </FieldsGroup>
      </div>
    </BasePage>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.query;

  if (!isValidAnnouncementCategory(category as string)) {
    return {
      redirect: {
        destination: "/announcement/category/school",
        permanent: true,
      },
    };
  }

  return {
    props: {
      category,
    },
  };
};
