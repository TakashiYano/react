import { ReactNode } from "react";
import classes from "src/components/Layout/Layout.module.css";

export const Layout = (props: { children: ReactNode }) => {
  return <div className={classes.container}>{props.children}</div>;
};
