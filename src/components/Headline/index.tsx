import type { ReactNode, VFC } from "react";
import classes from "src/components/Headline/Headline.module.css";

type Props = {
  children: ReactNode;
  page: String;
  number?: number;
  array?: number[];
  obj?: object;
  boolean?: boolean;
};

export const Headline: VFC<Props> = (props) => {
  return (
    <div>
      <h1 className={classes.title}>{props.page} Page</h1>
      <p className={classes.description}>
        Get started by editing {props.children}
      </p>
    </div>
  );
};
