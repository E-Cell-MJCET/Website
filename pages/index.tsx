import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/home/header'
import Banner from '@/components/home/team'
import Navbar from '@/components/home/navbar'
import Footer from '@/components/home/footer'
import About from '@/components/home/about'
import Footers from '@/components/home/footer2'
import Blog from '@/components/home/bloghome'
import Gallery from '@/components/home/gallery'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      
      <Header />
      <Navbar />
      <About />
      <Banner />
      {/* <Gallery /> */}
      <Blog />
      <Footer />
      <Footers />
    </div>
  )
}
