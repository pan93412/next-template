import React from "react";
import Card from "../Card/BaseCard";
import Field from "../Field/Field";

export default function InfoField() {
  return (
    <div className="min-w-field">
      <Field title="資訊卡">
        <Card
          subtitle="COVID-19 疫情"
          background="url(/testpage/virus.png)"
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
