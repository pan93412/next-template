import React from "react";
import { isValidAnnouncementCategory } from "../../../common/AnnouncementCategory";
import AnnouncementCards from "../../../components/Announcements/Cards";
import BasePage from "../../../components/Page/BasePage";
import FieldsGroup from "../../../components/Field/FieldsGroup";
import AnnouncementsField from "../../../components/Field/AnnouncementsField";
import type { AnnouncementCategory } from "../../../common/AnnouncementCategory";
import type { GetServerSideProps } from "next";

interface Props {
  category: AnnouncementCategory;
}

export default function AnnouncementOverviewPage({ category }: Props) {
  return (
    <BasePage id="announcement overview">
      <div className="p-10">
        <FieldsGroup>
          <div className="opacity-40">
            <AnnouncementsField />
          </div>
          <div>
            <AnnouncementCards maxColumns={2} category={category} />
          </div>
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
