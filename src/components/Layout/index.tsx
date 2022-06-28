import classes from "src/components/Layout/Layout.module.css";
import { LayoutType } from "src/types/types";

export const Layout: React.FC<LayoutType> = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};
