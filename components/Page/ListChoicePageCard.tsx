import React from "react";
import FullWidthColoredButton from "../Elements/Button/FullWidthColoredButton";
import type { HeaderPageCardProps } from "./HeaderPageCard";
import HeaderPageCard from "./HeaderPageCard";

export interface ListChoicePageCardProps extends HeaderPageCardProps {
  /**
   * The choices.
   *
   * Example:
   *
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
  title,
  desc,
  icon,
  children: content,
  message,
}: ListChoicePageCardProps) {
  const noContent = content.length === 0;
  const hasMessage = !!message;
  const shouldShowMessage = hasMessage || noContent;

  return (
    <HeaderPageCard
      title={title}
      desc={desc}
      icon={icon}
      // we add padding if the message will show.
      contentPadding={shouldShowMessage}
    >
      <div className="flex flex-col w-full options">
        {(() => {
          // if user specified the message
          if (message) {
            return <p>{message}</p>;
          }

          // if there is no any content
          if (content.length === 0) {
            return <p>無資料。</p>;
          }

          return content.map(({ id: cid, name, redirect }) => (
            <div key={`${title}-${cid}`}>
              <FullWidthColoredButton onClick={redirect}>
                {name}
              </FullWidthColoredButton>
            </div>
          ));
        })()}
      </div>
    </HeaderPageCard>
  );
}
