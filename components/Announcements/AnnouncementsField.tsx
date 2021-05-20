import React from "react";
import {
  AnnouncementCategoryMetadata,
  isValidAnnouncementCategory,
} from "../../common/AnnouncementCategory";
import Card from "../Base/BaseCard";
import Field from "../Field/Field";

export default function AnnouncementsField() {
  return (
    <div className="w-80">
      <Field title="公告">
        {Object.keys(AnnouncementCategoryMetadata).map((category: string) => {
          if (isValidAnnouncementCategory(category)) {
            return (
              <Card
                href={`/announcement/${category}`}
                key={`${category}-announcements`}
                flexRow
                justifyBetween
              >
                {AnnouncementCategoryMetadata[category].type}
              </Card>
            );
          }

          console.error(
            "Unexpected, recoverable error: a key in AnnouncementCategoryMetadata is not in AnnouncementCategory"
          );
          return null;
        })}
      </Field>
    </div>
  );
}
