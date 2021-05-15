import Head from "next/head";
import React from "react";
import Card from "../components/Base/BaseCard";
import Field from "../components/Field/Field";
import Navbar from "../components/Navbar/Navbar";
import AnnouncementsInnerField from "../components/Field/AnnouncementsInnerField";
import BasePage from "../components/Page/BasePage";
import { Announcements } from "../common/Announcements";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <BasePage id="home">
      <div className="flex justify-between m-8">
        <div>
          <Field title="資訊卡" actions={[]}>
            <Card
              subtitle="COVID-19 疫情"
              backgroundImage="/testpage/virus.png"
              href="https://google.com"
            >
              停班停課，
              <br />
              怎麼使用遠距上課系統？
            </Card>
            <Card subtitle="溫度">
              33℃
              <br />
              溫度炎熱，注意防曬。
            </Card>
          </Field>
        </div>
        <div>
          <Field title="專欄" actions={[]}>
            <Card
              subtitle="你是學生，他是老師，你就錯了。"
              backgroundImage="/testpage/no-discussion.png"
              href="https://google.com"
            >
              學生一定是錯的嗎？
            </Card>
          </Field>
        </div>
        <div>
          <Field title="公告" actions={[
            {
              icon: faFilter,
              action: () => {}
            }
          ]}>
            <AnnouncementsInnerField category={Announcements.Law}></AnnouncementsInnerField>
          </Field>
        </div>
      </div>
    </BasePage>
  );
}
