import type { GetServerSideProps } from "next";

export default function AnnouncementRootRedirector() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/announcement/category/school",
      permanent: false,
    },
  };
};
