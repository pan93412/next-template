import React from "react";
import { AnnouncementsMeta } from "../../common/Announcements";
import Card from "../Base/BaseCard";
import Field from "./Field";

export default function AnnouncementsField() {
  return (
    <div>
      <Field title="公告" actions={[]}>
        {
          Object.keys(AnnouncementsMeta).map((category) => {
            return (
              <Card href={`/announcement/${category}`} key={`announcement-in-${category}`} flexRow justifyBetween>
                { AnnouncementsMeta[category].type }
              </Card>
            );
          })
        }
      </Field>
    </div>
  );
}
