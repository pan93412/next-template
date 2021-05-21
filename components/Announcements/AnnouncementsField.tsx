import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/dist/client/router";
import React from "react";
import Field from "../Field/Field";
import { HumanReadableCategory } from "../../common/AnnouncementCategory";
import AnnouncementCards from "./AnnouncementCards";
import { useListAnnouncementsSWR } from "./listAnnouncementsSWR";
import type { AnnouncementCategory } from "../../common/AnnouncementCategory";

export interface AnnouncementsFieldProps {
  category: AnnouncementCategory;
}

export default function AnnouncementsField({
  category,
}: AnnouncementsFieldProps) {
  const router = useRouter();
  const { data } = useListAnnouncementsSWR(category);

  return (
    <div className="w-80">
      <Field
        title={HumanReadableCategory(category)}
        actions={[
          {
            icon: faArrowRight,
            action: () => router.push(`/announcement/${category}`),
          },
        ]}
      >
        {data ? (
          <AnnouncementCards
            data={data}
            category={category}
            maxColumns={1}
            maxCards={3}
          />
        ) : (
          <div>⚠️ 找不到這個分類的公告</div>
        )}
      </Field>
    </div>
  );
}
