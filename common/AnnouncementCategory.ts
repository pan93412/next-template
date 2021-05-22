export enum AnnouncementCategory {
  Contest = "contest",
  Documents = "documents",
  Grade = "grade",
  Law = "law",
  School = "school",
  Study = "study",
  WirelessAndTimetable = "wireless-and-timetable",
}

export function isValidAnnouncementCategory(
  stuff: string
): stuff is AnnouncementCategory {
  switch (stuff) {
    case "contest":
    case "documents":
    case "grade":
    case "law":
    case "school":
    case "study":
    case "wireless-and-timetable":
      return true;
    default:
      return false;
  }
}

export const AnnouncementCategoryMetadata: Record<
  AnnouncementCategory,
  { type: string }
> = {
  contest: {
    type: "競賽資訊",
  },
  documents: {
    type: "公文資訊",
  },
  grade: {
    type: "升學資訊",
  },
  law: {
    type: "法規資訊",
  },
  school: {
    type: "校園公告",
  },
  study: {
    type: "研習資訊",
  },
  "wireless-and-timetable": {
    type: "無線網路資訊 / 課表",
  },
};

export const HumanReadableCategory = (category: AnnouncementCategory) =>
  AnnouncementCategoryMetadata[category].type;
