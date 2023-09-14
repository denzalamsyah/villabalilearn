import Layout from "@/components/layout/layout";
import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Villa Bali Paradise</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Layout />
      <Component {...pageProps} />
    </div>
  );
}
