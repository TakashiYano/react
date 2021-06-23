import Link from "next/link";
import classes from "src/components/shared/Header/Header.module.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a className={classes.anchor}>Index</a>
      </Link>
      <Link href="/about">
        <a className={classes.anchor}>About</a>
      </Link>
    </header>
  );
};
