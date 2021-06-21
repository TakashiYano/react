import { AppProps } from "next/app";
import toast, { Toaster, ToastBar } from "react-hot-toast";

const App = (props: AppProps) => {
  return (
    <div>
      <props.Component {...props.pageProps} />
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
