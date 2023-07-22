import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Swap from '@/components/HeroSection/Swap'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className='App'>
    <Navbar/>

    <div className='mainWindow'>
    <Swap/>
    </div>
   </main>
  )
}