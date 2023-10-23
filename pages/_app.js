import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/components/Navbar/Navbar";
import { SwapContextProvider } from "@/context/SwapContext";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <SwapContextProvider >
        <Navbar />
        <Component {...pageProps} />
      </SwapContextProvider>
    </div>
  );
}
