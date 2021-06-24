import { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    // mount
    document.body.style.backgroundColor = "lightblue";
    return () => {
      // unmount
      document.body.style.backgroundColor = "";
    }
  }, []);
};