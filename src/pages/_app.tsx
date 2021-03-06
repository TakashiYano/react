import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { AppLayout } from "src/layouts/AppLayout";
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
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
