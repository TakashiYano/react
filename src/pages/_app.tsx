import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Layout } from "src/components/Layout";
import { SWRConfig } from "swr";

const fetcher = async (...args: [string]) => {
  const res = await fetch(...args);
  const json = await res.json();
  return json;
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
