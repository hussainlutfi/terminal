import * as React from "react";

interface EmailTemplateProps {
  question: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  question,
}) => (
  <div>
    <h1>وصلكم سؤال</h1>
    <h2>{question}</h2>
    <h3>
      لمراجعة السؤال
      <a href="https://dashboard.mostaqbli.co/">الداشبورد</a>
    </h3>
  </div>
);
