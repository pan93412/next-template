import React from "react";
import router from "next/router";
import BasePage from "../../../../components/Page/BasePage";
import styles from "../../../../styles/ChatPage.module.css";
import type { GetServerSideProps } from "next";

interface ChatPageProps {
  username: string;
  podcastId: string;
  // people: number;
}

export default function ChatPage({ username, podcastId }: ChatPageProps) {
  return (
    <BasePage title="Podcast" id="podcast-chatroom" full>
      <div className={`grid items-center ${styles.podcastGrid} w-full h-full`}>
        <div className={`${styles.informationArea} text-xl justify-self-start`}>
          @{username} - <b>{podcastId}</b>
        </div>
        <div className={`${styles.quickBtnArea} justify-self-end`}>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="rounded bg-red-800 text-white py-1 px-4 mt-2"
          >
            Leave
          </button>
        </div>
        <div className={`${styles.audiencesArea}`}>
          <p>
            Seems like no audience here :(
            <br />
            Do you want to invite some?
          </p>
        </div>
        <div className={`${styles.chatArea}`}>Speaker here!</div>
        <div
          className={`${styles.controlArea} justify-self-center bg-gray-200`}
        >
          WIP: Functions
        </div>
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
