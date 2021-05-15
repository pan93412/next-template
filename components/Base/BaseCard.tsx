import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";

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
   * 背景圖
   */
  backgroundImage?: string;
  /**
   * 標題部分
   */
  children: ReactNode;
  /**
   * 全部擠在一列
   */
  flexRow?: boolean;
  /**
   * 使用 justify-between
   */
  justifyBetween?: boolean;
}

export default function Card({
  subtitle,
  children,
  href,
  backgroundImage,
  flexRow,
  justifyBetween,
}: CardProps) {
  return (
    <div
      className={`card w-80 rounded-lg px-4 py-6 mb-3 flex ${
        flexRow || "flex-col justify-center"
      } ${justifyBetween && "justify-between"} space-y-1`}
      style={{
        background: backgroundImage ? `url(${backgroundImage})` : `#F2F2F2`,
        backgroundSize: "cover",
      }}
    >
      {subtitle && <div className="font-light text-sm">{subtitle}</div>}
      <div className="font-bold text-lg break-words">{children}</div>
      {href && (
        <a href={href}>
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      )}
    </div>
  );
}
