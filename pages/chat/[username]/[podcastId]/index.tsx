import React from "react";
import router from "next/router";
import BasePage from "../../../../components/Page/BasePage";
import type { GetServerSideProps } from "next";

interface ChatPageProps {
  username: string;
  podcastId: string;
  // people: number;
}

export default function ChatPage({ username, podcastId }: ChatPageProps) {
  return (
    <BasePage title="Podcast" id="podcast-chatroom" full>
      <div className="grid items-center podcast-grid w-full h-full">
        <div className="information-area justify-self-start">
          @{username} - {podcastId}
        </div>
        <div className="quick-btn-area justify-self-end">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="rounded bg-red-800 text-white py-1 px-4 mt-2"
          >
            Leave
          </button>
        </div>
        <div className="audiences-area-1#">Speaker here!</div>
        <div className="audiences-area">
          <p>
            Seems like no audience here :(
            <br />
            Do you want to invite some?
          </p>
        </div>
        <div className="control-area justify-self-center bg-gray-200">Null</div>
        <style jsx scoped>
          {`
            .podcast-grid {
              grid-template:
                "information quick-btn" min-content
                "speaker audiences" auto
                "control control" min-content;
            }

            .information-area {
              grid-area: information;
            }

            .quick-btn-area {
              grid-area: quick-btn;
            }

            .audiences-area-1# {
              grid-area: speaker;
            }

            .audiences-area {
              grid-area: audiences;
            }

            .control-area {
              grid-area: control;
            }
          `}
        </style>
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
