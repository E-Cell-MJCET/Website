import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Cell MJCET",
  description: "This is the official website of E-Cell MJCET",
};

import { GoogleAnalytics } from "@next/third-parties/google";
import Main from "@/components/coming-soon/main";

export default function Home() {
  return (
    <div>
      <GoogleAnalytics gaId="G-RVM88W3QHK" />
      <Main />
    </div>
  );
}
