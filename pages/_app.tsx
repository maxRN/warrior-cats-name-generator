import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <div className="bg-[url('/ffflurry.svg')]"> */}
      <Component {...pageProps} />
    </div>
  );
}

export { reportWebVitals } from "next-axiom";

export default MyApp;
