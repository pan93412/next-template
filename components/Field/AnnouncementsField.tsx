import React from "react";
import { AnnouncementCategoryMetadata } from "../../common/AnnouncementCategory";
import Card from "../Base/BaseCard";
import Field from "./Field";

export default function AnnouncementsField() {
  return (
    <div>
      <Field title="公告" actions={[]}>
        {
          Object.keys(AnnouncementCategoryMetadata).map((category) => {
            return (
              <Card href={`/announcement/${category}`} key={`announcement-in-${category}`} flexRow justifyBetween>
                { AnnouncementCategoryMetadata[category].type }
              </Card>
            );
          })
        }
      </Field>
    </div>
  );
}
