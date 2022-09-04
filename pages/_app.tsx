import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Warrior Cats Namensgenerator</title>
      </Head>
      {/* <div className="bg-[url('/ffflurry.svg')]"> */}
      <Component {...pageProps} />
    </div>
  );
}

export { reportWebVitals } from "next-axiom";

export default MyApp;
