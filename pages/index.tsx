import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/home/header";
import Banner from "@/components/team/team";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import About from "@/components/home/about";
import Footers from "@/components/home/footer2";
import Blog from "@/components/home/bloghome";
import Gallery from "@/components/home/gallery";
import Coordinator from "@/components/home/coordinator";
import Head from "next/head";
import elnwt from "../public/assets/favicon.png";
import { useEffect } from "react";
import SpeedDial from "@/components/home/speedDial";
import { Hero } from "@/components/home/hero";

import { GoogleAnalytics } from "@next/third-parties/google";

export default function Home() {
  // useEffect(() => {
  //   analytics.logEvent("page_view", {
  //     page_location: "https://ecellmjcet.com",
  //     page_path: "/",
  //     page_title: "E-Cell MJCET",
  //   });
  // }, []);
  return (
    <div>
      <Head>
        <title>E-Cell MJCET</title>
        <meta
          name="description"
          content="This is the official website of E-Cell MJCET"
          key="desc"
        />
        <meta property="og:title" content="E-Cell MJCET" />
        <meta
          property="og:description"
          content="This is the official website of E-Cell MJCET"
        />
        <meta property="og:image" content={elnwt.src} />
        <link
          href="../public/splashscreens/iphone5_splash.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="../public/splashscreens/iphone6_splash.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="../public/splashscreens/iphoneplus_splash.png"
          media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="../public/splashscreens/iphonex_splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="../public/splashscreens/iphonexr_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="../public/splashscreens/iphonexsmax_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="../public/splashscreens/ipad_splash.png"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="../public/splashscreens/ipadpro1_splash.png"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="../public/splashscreens/ipadpro3_splash.png"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image "
        />
        <link
          href="../public/splashscreens/ipadpro2_splash.png"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
      </Head>
      <GoogleAnalytics gaId="G-RVM88W3QHK" />
      <SpeedDial />
      <Header />
      <Hero />

      <About />
      {/* <Banner /> */}
      <Coordinator />

      {/*<Blog />*/}
      {/* <button onClick={subscribeToPushNotifications}>
        Subscribe to Push Notifications
      </button> */}

      <Footer />
      <Footers />
    </div>
  );
}
