import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import OldHome from "@/components/coming-soon/old-main";

export const metadata: Metadata = {
  title: "E-Cell MJCET",
  description: "This is the official website of E-Cell MJCET",
};

export default function Home() {
  return (
    <div>
      <GoogleAnalytics gaId="G-RVM88W3QHK" />
      {/* <BackgroundBeams /> */}
      {/* <Main />
      <CanvasCursor /> */}
      <OldHome />
    </div>
  );
}
