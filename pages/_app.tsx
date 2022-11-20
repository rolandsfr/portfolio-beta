import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/reset.css";
import "../styles/locomotive-scroll.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
