export enum Announcements {
  School = "school",
  Contest = "contest",
  Grade = "grade",
  Law = "law",
  Study = "study",
};

export const AnnouncementsMeta: Record<Announcements, { type: string }> = {
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
