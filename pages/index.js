import Image from "next/image";
import { Inter } from "next/font/google";
import Swap from "@/components/HeroSection/Swap";
import Navbar from "@/components/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="App">
      <div className="mainWindow">
        <Swap />
      </div>
    </main>
  );
}
