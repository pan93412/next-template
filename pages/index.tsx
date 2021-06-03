import React from "react";
import Navbar from "../components/Navbar/Navbar";
import BasePage from "../components/Page/BasePage";

export default function Home() {
  return (
    <BasePage id="home" title="首頁">
      <Navbar />
    </BasePage>
  );
}
