import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
export default function App({ Component, pageProps }) {
  return <div>
  
    <Component {...pageProps} />

  </div>
}
