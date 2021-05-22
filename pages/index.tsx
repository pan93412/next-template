import React from "react";
import BasePage from "../components/Page/BasePage";
import PopupGroup from "../components/Popups/PopupGroup";
import Popup, { PopupLevel } from "../components/Popups/Popup";
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
      <PopupGroup>
        <Popup level={PopupLevel.INFO}>
          這個是 Schweb
          概念初版。介面未來會再重做或調整。若有任何問題與建議，歡迎與我們聯絡。
        </Popup>
      </PopupGroup>
    </BasePage>
  );
}
