import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Cell MJCET",
  description: "This is the official website of E-Cell MJCET",
};

import { GoogleAnalytics } from "@next/third-parties/google";
import Main from "@/components/coming-soon/main";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Social from "@/components/coming-soon/social";
import CanvasCursor from "@/components/coming-soon/canvas-cursor";
import OldHome from "@/components/coming-soon/old-main";

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
