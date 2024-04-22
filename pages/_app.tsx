import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/fonts/stylesheet.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-[1920px] ">
      {/* <Cursor /> */}
      <Component {...pageProps} />
    </div>
  );
}
