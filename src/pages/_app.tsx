import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DarkModeProvider } from "@/context/DarkModeContext";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Navbar />
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}
