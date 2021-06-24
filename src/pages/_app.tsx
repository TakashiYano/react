import { AppProps } from "next/app";
import toast, { Toaster, ToastBar } from "react-hot-toast";
import "src/styles/globals.css";
import { useBgColor } from "src/hooks/useBgColor";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";

const App = (props: AppProps) => {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

  return (
    <div>
      <props.Component {...props.pageProps} {...counter} {...inputArray} />
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
