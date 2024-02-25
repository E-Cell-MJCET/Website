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

export default function Home() {
  const subscribeToPushNotifications = async () => {
    try {
      const register = await navigator.serviceWorker.register("/sw.js");

      const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey:
          "BAs_w6kZa5wYbd_LXpW5Y24Fo914Dn7wA4PWxqp-wUQNdp7Bk-m5BY-nLJCe_L2voIAhwLbjXjKjEylypvMHbao",
      });

      const res = await fetch("http://localhost:4000/subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error registering service worker:", error);
    }
  };

  useEffect(() => {
    // Check if service worker is supported
    if ("serviceWorker" in navigator) {
      // Register service worker
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

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
          rel="apple-touch-startup-image"
        />
        <link
          href="../public/splashscreens/ipadpro2_splash.png"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
      </Head>
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
