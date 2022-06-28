import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Layout } from "src/components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
