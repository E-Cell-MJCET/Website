import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/fonts/stylesheet.css";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-[1920px] ">
      {/* <Cursor /> */}
      <Component {...pageProps} />
      <Script
        type="application/javascript"
        src="https://sdki.truepush.com/sdk/v2.0.4/app.js"
        async
      >
        {`
          var truepush = window.truepush || [];
          truepush.push(function() {
            truepush.Init(
              {
                id: "65be0e6997ef0f660c1a5ffb",
              },
              function (error: any) {
                if (error) console.error(error);
              }
            );
          });
        `}
      </Script>
    </div>
  );
}
