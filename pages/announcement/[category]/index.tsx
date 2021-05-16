import React, { useEffect } from "react";
import { AnnouncementsMeta, isAnnouncements } from "../../../common/Announcements";
import AnnouncementCards from "../../../components/Announcements/Cards";
import Field from "../../../components/Field/Field";
import BasePage from "../../../components/Page/BasePage";
import { useRouter } from 'next/router'
import FieldsGroup from "../../../components/Field/FieldsGroup";
import AnnouncementsField from "../../../components/Field/AnnouncementsField";

export default function AnnouncementOverviewPage() {
  const router = useRouter();
  const category = router.query.category as string;

  if (!isAnnouncements(category)) {
    useEffect(() => {
      router.push("/announcement/school");
    });
    return null;
  }

  return (
    <BasePage id="announcement overview">
      <div className="p-10">
        <FieldsGroup>
          <AnnouncementsField />
          <div>
            <Field title={`公告 / ${AnnouncementsMeta[category].type}`} actions={[]}>
              <div className="p-3">
                <AnnouncementCards maxColumns={2} category={category}></AnnouncementCards>
              </div>
            </Field>
          </div>
        </FieldsGroup>
      </div>
    </BasePage>
  );
}
