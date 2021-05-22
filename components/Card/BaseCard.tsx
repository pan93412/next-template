import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRouter } from "next/dist/client/router";
import type { ReactNode } from "react";

export interface CardProps {
  /**
   * 子標題
   */
  subtitle?: string;
  /**
   * 連結
   */
  href?: string;
  /**
   * 背景圖 (url()) 或 Hex 顏色
   */
  background?: string;
  /**
   * 標題部分
   */
  children: ReactNode;
}

export default function BaseLargeCard({
  subtitle,
  children,
  href,
  background = "#F2F2F2",
}: CardProps) {
  const router = useRouter();
  const onClickRedirect = async () => {
    if (href) await router.push(href);
  };

  return (
    <div
      role="link"
      className="card cursor-pointer rounded-lg p-6 flex flex-col justify-center space-y-1 shadow-md"
      style={{
        background,
        backgroundSize: "cover",
      }}
      onClick={onClickRedirect}
      onKeyPress={async (key) => {
        if (key.code === "Enter") await onClickRedirect();
      }}
      tabIndex={0}
    >
      {subtitle && <div className="font-light text-sm">{subtitle}</div>}
      <div className="font-bold text-lg">{children}</div>
      {href && <FontAwesomeIcon icon={faArrowRight} />}
    </div>
  );
}
