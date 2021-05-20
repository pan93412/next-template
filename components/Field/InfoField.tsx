import React from "react";
import Card from "../Base/BaseCard";
import Field from "./Field";

export default function InfoField() {
  return (
    <div className="w-80">
      <Field title="資訊卡">
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
  );
}
