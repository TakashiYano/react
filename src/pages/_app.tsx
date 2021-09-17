import { AppProps } from "next/app";
import toast, { Toaster, ToastBar } from "react-hot-toast";
import { Layout } from "src/components/Layout";
import "src/styles/globals.css";
const App = (props: AppProps) => {
  return (
    <div>
      <Layout>
        <props.Component {...props.pageProps} />
      </Layout>
      <Toaster>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button onClick={() => toast.dismiss(t.id)}>X</button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
      ;
    </div>
  );
};

export default App;
