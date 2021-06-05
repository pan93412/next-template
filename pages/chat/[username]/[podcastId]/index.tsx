import React from "react";
import router from "next/router";
import BasePage from "../../../../components/Page/BasePage";
import type { GetServerSideProps } from "next";

interface ChatPageProps {
  username: string;
  podcastId: string;
  people: number;
}

export default function ChatPage({
  username,
  podcastId,
  people,
}: ChatPageProps) {
  return (
    <BasePage title="Podcast" id="podcast-chatroom" full>
      <div className="flex justify-between mx-32">
        <div>
          <p className="text-md">{username}</p>
          <p className="text-2xl">{podcastId}</p>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="rounded bg-red-800 text-white py-1 px-4 mt-2"
          >
            Leave
          </button>
        </div>
        <div>
          {people}
          <p>
            Seems like no audience here :(
            <br />
            Do you want to invite some?
          </p>
        </div>
      </div>
    </BasePage>
  );
}

export const getServerSideProps: GetServerSideProps<ChatPageProps> = async (
  context
) => {
  if (context.params) {
    const { username, podcastId } = context.params;
    const { people } = context.query;

    if (
      username &&
      podcastId &&
      typeof username === "string" &&
      typeof podcastId === "string"
    ) {
      const thePeople = people ? Number(people) : 0;

      return {
        props: {
          username,
          podcastId,
          people: thePeople,
        },
      };
    }
  }

  return {
    notFound: true,
  };
};
