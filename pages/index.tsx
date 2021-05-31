import React from "react";
import BasePage from "../components/Page/BasePage";
import FieldsGroup from "../components/Field/FieldsGroup";
import AnnouncementsField from "../components/Announcements/AnnouncementsField";
import { AnnouncementCategory } from "../common/AnnouncementCategory";

export default function Home() {
  return (
    <BasePage id="home" title="首頁">
      <FieldsGroup>
        {/*
            <InfoField />
            <ArticleField />
          */}
        <AnnouncementsField category={AnnouncementCategory.School} />
        <AnnouncementsField category={AnnouncementCategory.Study} />
        <AnnouncementsField category={AnnouncementCategory.Contest} />
        <AnnouncementsField category={AnnouncementCategory.Grade} />
        <AnnouncementsField category={AnnouncementCategory.Law} />
        <AnnouncementsField category={AnnouncementCategory.Documents} />
        <AnnouncementsField
          category={AnnouncementCategory.WirelessAndTimetable}
        />
      </FieldsGroup>
    </BasePage>
  );
}
