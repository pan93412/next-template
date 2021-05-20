import React from "react";
import type { AnnouncementContent } from "schweb-parser/dist/types/announcements/types";

export interface AnnouncementBodyProps {
  data: AnnouncementContent;
}

export default function AnnouncementBody({ data }: AnnouncementBodyProps) {
  return (
    <>
      <div className="announcement content mb-6">{data.contentHTML}</div>
      {data.attachments.length > 0 && (
        <div className="announcement attachments">
          <h2 className="text-xl font-bold mb-2">附件</h2>
          <ul className="list-disc">
            {data.attachments.map(({ name, url }) => {
              return (
                <li key={`announcement-details-${name}-${url}`}>
                  <a download className="text-blue-500" href={url}>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
