import type { GetServerSideProps } from "next";

export default function AnnouncementRootRedirector() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: "/announcement/school",
    permanent: false,
  },
});
