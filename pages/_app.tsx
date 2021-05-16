import React from "react";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
