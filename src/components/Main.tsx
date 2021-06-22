import type { VFC } from "react";
import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import classes from "../styles/Main.module.css";

type Props = {
  page: String;
};

export const Main: VFC<Props> = (props) => {
  return (
    <main className={classes.main}>
      <Headline
        page={props.page}
        number={111}
        array={[1, 2, 3]}
        obj={{ foo: "foo", bar: "bar" }}
        boolean
      >
        <code className={classes.code}>pages/{props.page}.tsx</code>
      </Headline>
      <Links />
    </main>
  );
};
