import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/fonts/stylesheet.css";
import Cursor from "@/components/cursor";
import Head from "next/head";
import { Html } from "next/document";
import { DarkModeProvider } from "@/components/DarkModeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <div className="max-w-[1920px] bg-black">
        {/* <Cursor /> */}
        <Component {...pageProps} />
      </div>
    </DarkModeProvider>
  );
}
