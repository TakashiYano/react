import { useRouter } from "next/dist/client/router";
import { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    return router.pathname === "/" ? "lightblue" : "beige";
  }, [router.pathname]);

  useEffect(() => {
    // mount
    document.body.style.backgroundColor = bgColor;
    return () => {
      // unmount
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
