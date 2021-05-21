import React from "react";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@fontsource/noto-sans-tc";
import "@fontsource/noto-serif-tc";
import "jetbrains-mono-webfont";

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
