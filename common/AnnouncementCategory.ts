export enum AnnouncementCategory {
  School = "school",
  Contest = "contest",
  Grade = "grade",
  Law = "law",
  Study = "study",
}

export function isValidAnnouncementCategory(
  stuff: string
): stuff is AnnouncementCategory {
  switch (stuff) {
    case "school":
    case "contest":
    case "grade":
    case "law":
    case "study":
      return true;
    default:
      return false;
  }
}

export const AnnouncementCategoryMetadata: Record<
  AnnouncementCategory,
  { type: string }
> = {
  school: {
    type: "校園公告",
  },
  contest: {
    type: "競賽資訊",
  },
  grade: {
    type: "升學資訊",
  },
  law: {
    type: "法規資訊",
  },
  study: {
    type: "研習資訊",
  },
};

export const HumanReadableCategory = (category: AnnouncementCategory) =>
  AnnouncementCategoryMetadata[category].type;
