import Link from "next/link";
import React from "react";
import BasePage from "../components/Page/BasePage";

export default function NotFoundPage() {
  return (
    <BasePage id="not-found">
      <div className="not-found-title">
        <div className="text-4xl font-mono font-black opacity-70 p-3 mb-4 bg-black text-white rounded w-max">
          &gt; 404
        </div>
        <h2 className="text-2xl font-bold mb-3">找不到頁面。</h2>
      </div>
      <div className="not-found-suggestion leading-relaxed">
        <p>試試看：</p>
        <ul className="list-disc ml-9 text-blue-600">
          <li>
            <Link href="/">回到首頁？</Link>
          </li>
        </ul>
      </div>
    </BasePage>
  );
}
