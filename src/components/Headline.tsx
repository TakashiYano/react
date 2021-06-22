import type { ReactNode, VFC } from "react";
import styles from "../styles/Home.module.css";

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
      <h1 className={styles.title}>{props.page} Page</h1>
      <p className={styles.description}>
        Get started by editing {props.children}
      </p>
    </div>
  );
};
