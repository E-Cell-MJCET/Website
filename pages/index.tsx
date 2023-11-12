import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/home/header";
import Banner from "@/components/home/team";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import About from "@/components/home/about";
import Footers from "@/components/home/footer2";
import Blog from "@/components/home/bloghome";
import Gallery from "@/components/home/gallery";
import Coordinator from "@/components/home/coordinator";
import Head from "next/head";
import elnwt from "../public/assets/ewnlt.png";

export default function Home() {
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
      </Head>
      <Header />
      <Navbar />
      <About />
      {/* <Banner /> */}
      <Coordinator />
      <Gallery />
      {/*<Blog />*/}
      <Footer />
      <Footers />
    </div>
  );
}
