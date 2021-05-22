import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
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
  return (
    <div
      className="card rounded-lg p-6 flex flex-col justify-center space-y-1"
      style={{
        background,
        backgroundSize: "cover",
      }}
    >
      {subtitle && <div className="font-light text-sm">{subtitle}</div>}
      <div className="font-bold text-lg">{children}</div>
      {href && (
        <button type="button" className="w-min">
          <Link href={href}>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </button>
      )}
    </div>
  );
}
