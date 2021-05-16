export enum AnnouncementCategory {
  School = "school",
  Contest = "contest",
  Grade = "grade",
  Law = "law",
  Study = "study",
};

export function isValidAnnouncementCategory(stuff: string): stuff is AnnouncementCategory {
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

export const AnnouncementCategoryMetadata: Record<AnnouncementCategory, { type: string }> = {
  school: {
    type: "學校 SCHOOL",
  },
  contest: {
    type: "競賽 CONTEST",
  },
  grade: {
    type: "升學 GRADE",
  },
  law: {
    type: "法規 LAW",
  },
  study: {
    type: "研習 STUDY",
  },
};
