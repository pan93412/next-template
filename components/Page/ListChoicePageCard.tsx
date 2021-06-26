import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { randBackgroundColor } from "../../utilities/randcolor";

import HeaderPageCard from "./HeaderPageCard";

export interface ListChoicePageCardProps {
  id: string;
  title: string;
  desc: string;
  /**
   * The choices.
   *
   * @example
   * ```tsx
   * <ListChoicePageCard {...props}>{
   *  [
   *    {
   *      id: "",
   *      name: "",
   *      redirect: () => ...,
   *    }
   *  ]
   * }</ListChoicePageCard>
   * ```
   */
  children: {
    id: string;
    name: string;
    redirect: () => void;
  }[];
  message?: string | null;
}

export default function ListChoicePageCard({
  id: pid,
  title,
  desc,
  children: content,
  message,
}: ListChoicePageCardProps) {
  const noContent = content.length === 0;
  const hasMessage = !!message;
  const shouldShowMessage = hasMessage || noContent;

  return (
    <HeaderPageCard
      id={pid}
      title={title}
      desc={desc}
      // we add padding if the message will show.
      contentPadding={shouldShowMessage}
    >
      <div className="flex flex-col w-full options">
        {(() => {
          // if user specified the message
          if (message) {
            return <p>{message}</p>;
          }

          // if there isn't any content
          if (content.length === 0) {
            return <p>無資料。</p>;
          }

          return content.map(({ id: cid, name, redirect }) => (
            <div key={`${pid}-${cid}`}>
              <button
                className={`w-full px-6 py-10 text-left outline-none text-black hover:text-white transition-all duration-300 rounded-none ${randBackgroundColor(
                  true
                )}`}
                type="button"
                onClick={redirect}
              >
                <div className="flex justify-between">
                  <div>{name}</div>
                  <div>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
              </button>
            </div>
          ));
        })()}
      </div>
    </HeaderPageCard>
  );
}
