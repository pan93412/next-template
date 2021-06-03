import React from "react";
// import Navbar from "../../components/Navbar/Navbar";
import BasePage from "../../components/Page/BasePage";

export default function Home() {
  return (
    <BasePage id="home" title="設定">
      {/* <Navbar /> */}
      <div className="flex w-full h-full content-center items-center space-x-14">
        <div>
          <p className="text-3xl font-bold leading-relaxed">Welcome.</p>
          <p className="text-xl leading-relaxed">
            Let’s set up your identification.
          </p>
        </div>
        <div>
          <p>Hello, World!</p>
        </div>
      </div>
    </BasePage>
  );
}
