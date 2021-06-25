import { VFC } from "react";
import classes from "src/components/shared/Button/Button.module.css";
import cc from "classcat";

type Props = { color: "red" | "blue" };

export const Button: VFC<Props> = (props) => {
  return (
    <button
      className={cc([
        classes.large,
        {
          [classes.red]: props.color === "red",
          [classes.blue]: props.color === "blue",
        },
      ])}
    >
      <span>ボタン</span>
    </button>
  );
};
