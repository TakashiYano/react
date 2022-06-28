import { AppProps } from "next/app";
import { Layout } from "src/components/Layout";
import "tailwindcss/tailwind.css";
const App = (props: AppProps) => {
  return (
    <>
      <Layout>
        <props.Component {...props.pageProps} />
      </Layout>
    </>
  );
};

export default App;
