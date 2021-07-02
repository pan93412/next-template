// Mostly from https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/lib/gtag.js
// Thanks to vercel/next.js!

import { ENABLE_GA } from "../consts";

export const GA_TRACKING_ID = ENABLE_GA ? process.env.NEXT_PUBLIC_GA_ID : "";

if (ENABLE_GA && !GA_TRACKING_ID) {
  throw new Error("you should specify NEXT_PUBLIC_GA_ID environment variable.");
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (ENABLE_GA) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    globalThis.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (ENABLE_GA) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    globalThis.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
