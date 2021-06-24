import { VFC } from "react";
import toast from "react-hot-toast";
import classes from "src/components/Links/Links.module.css";

type Props = {
  items: { href: string; title: string; description: string }[];
};

export const Links: VFC<Props> = (props) => {
  const handleClick = () => {
    toast.success("Got the data");
  };

  return (
    <div className={classes.grid}>
      <button onClick={handleClick} className={classes.card}>
        <h3 className={classes.title}>Documentation &rarr;</h3>
        <p className={classes.description}>
          Find in-depth information about Next.js features and API.
        </p>
      </button>

      {props.items.map((item) => {
        return (
          <a key={item.href} href={item.href} className={classes.card}>
            <h3 className={classes.title}>{item.title}</h3>
            <p className={classes.description}>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
};
