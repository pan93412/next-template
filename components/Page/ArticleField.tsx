import React from "react";
import Card from "../Card/BaseCard";
import Field from "../Field/Field";

export default function ArticleField() {
  return (
    <div className="min-w-field">
      <Field title="專欄">
        <Card
          subtitle="你是學生，他是老師，你就錯了。"
          background="url(/testpage/no-discussion.png)"
          href="https://google.com"
        >
          學生一定是錯的嗎？
        </Card>
      </Field>
    </div>
  );
}
