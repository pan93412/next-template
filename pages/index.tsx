import React, { useState, useEffect } from "react";
import Link from "next/link";
import LocalDB from "../components/LocalDB";
import BasePage from "../components/Page/BasePage";
import SessionDB from "../components/SessionDB";
import { displayNameId } from "../components/LocalDB/consts";
import { podcastIdId } from "../components/SessionDB/consts";
import { URLEncoder } from "../components/URLEncoder";
import type { GetServerSideProps } from "next";

const localDB = LocalDB.getInstance();
const sessionDB = SessionDB.getInstance();

export interface HomeProps {
  hostUrl: string;
}

export default function Home({ hostUrl }: HomeProps) {
  const [podcastId, setPodcastId] = useState("");
  const [username, setUsername] = useState("");
  const [relativeURL, setRelativeURL] = useState("/");
  const podcastInputId = `podcast-id-input`;
  const podcastLabelId = `${podcastInputId}-label`;

  useEffect(() => {
    const v = localDB.get(displayNameId);
    if (v) setUsername(v);
  });

  useEffect(() => {
    if (podcastId.length === 0) {
      setPodcastId(sessionDB.get(podcastIdId) || "");
    }
  });

  useEffect(() => {
    setRelativeURL(`/chat/${URLEncoder(username)}/${URLEncoder(podcastId)}`);
  });

  return (
    <>
      <div className="bg-wrapper w-full h-full">
        <BasePage id="home" title="首頁" full>
          <div className="set-podcast-block flex justify-end justify-items-end content-center items-center w-full h-full">
            <div
              style={{
                width: "30%",
                marginRight: "2em",
              }}
            >
              <div className="set-podcast-id">
                <label
                  className={podcastLabelId}
                  htmlFor={podcastInputId}
                  aria-label={podcastLabelId}
                >
                  <input
                    id="display-name-input"
                    type="input"
                    className="p-2 border-b-2 border-gray-600 outline-none text-2xl w-full"
                    placeholder="Your Podcast ID"
                    value={podcastId}
                    onChange={(event) => {
                      setPodcastId(event.target.value);
                      sessionDB.set(podcastIdId, event.target.value);
                    }}
                  />
                </label>
              </div>
              {podcastId.length > 0 && (
                <div className="podcast-join-step w-full">
                  <div className="podcast-join-url cursor-pointer break-all">
                    <Link href={relativeURL}>
                      <p>
                        {hostUrl}
                        {relativeURL}
                      </p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </BasePage>
        <style jsx>{`
          .bg-wrapper {
            background: url("/bg.svg");
            background-position: cover;
            background-repeat: no-repeat;
          }
        `}</style>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => ({
  props: {
    hostUrl: process.env.HOST_URL || "https://127.0.0.1",
  },
});
