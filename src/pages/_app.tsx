import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DarkModeProvider } from "@/context/DarkModeContext";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}
