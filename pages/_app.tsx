import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/fonts/stylesheet.css'
import Cursor from '@/components/cursor'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div>
      {/* <Cursor /> */}
       <Component {...pageProps} />
    </div>
  )
}
