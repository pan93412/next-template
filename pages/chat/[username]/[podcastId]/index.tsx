import React, { useEffect, useState } from "react";
import router from "next/router";
import { MessageType } from "circle-stream/sdk/dist/types/MessageArchitect";
import useCSSDK from "../../../../components/CSSDK/useCSSDK";
import BasePage from "../../../../components/Page/BasePage";
import styles from "../../../../styles/ChatPage.module.css";
import GetOrGenerateUsername from "../../../../components/DynamicContent/Username/utils";
import BaseInput from "../../../../components/BaseElements/BaseInput";
import type { ReactNode } from "react";
import type { GetServerSideProps } from "next";

interface ChatPageProps {
  username: string;
  podcastId: string;
  // people: number;
}

const endpoint = process.env.CS_ENDPOINT || "127.0.0.1:3001";

export default function ChatPage({ username, podcastId }: ChatPageProps) {
  const [thisUsername, setThisUsername] = useState("");
  const [messages, setMessages] = useState<JSX.Element[]>([]);
  const [messageToSent, setMessageToSent] = useState("");
  const [sdk, onlineUsers] = useCSSDK(endpoint, podcastId, thisUsername);

  useEffect(() => {
    setThisUsername(GetOrGenerateUsername());
    if (sdk?.User === thisUsername) {
      sdk.onMessageListeners.push(({ as, data, type }) => {
        const buildElement = (message: string | ReactNode) => (
          <div
            className="message"
            // eslint-disable-next-line react/no-array-index-key
            key={`message-${type}-${as}-${data}-${Date.now()}`}
          >
            {message}
          </div>
        );
        const pushMessage = (element: JSX.Element) =>
          setMessages([...messages, element]);

        switch (type) {
          case MessageType.PLAIN:
            pushMessage(buildElement(`${as}: ${data}`));
            break;
          case MessageType.DATA_URI:
            pushMessage(
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              buildElement(<img src={data} alt={`a photo from ${as}`} />)
            );
            break;
          default:
            break;
        }
      });
    }
  });

  if (!sdk) return <p>正在載入 CircleStream SDK⋯⋯</p>;

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
          <ul>
            {onlineUsers.map((user) => (
              <li key={`online-user-${user}`}>{user}</li>
            ))}
          </ul>
        </div>
        <div className={`${styles.chatArea}`}>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              sdk.sendMessage({
                type: MessageType.PLAIN,
                data: messageToSent,
              });
              setMessageToSent("");
            }}
          >
            <div className="messages">{messages}</div>
            <div>
              <BaseInput
                id="message-sent-box"
                label="Message to sent..."
                value={messageToSent}
                onChange={setMessageToSent}
              />
            </div>
            <button
              type="submit"
              className="rounded bg-blue-50 text-black py-1 px-4 mt-2"
            >
              Send
            </button>
          </form>
        </div>
        <div
          className={`${styles.controlArea} justify-self-center bg-gray-200`}
        >
          WIP: Functions
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
