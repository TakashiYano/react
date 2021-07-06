import type { NextPage } from "next";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/shared/Header";
import { Posts } from "src/components/Posts";

const Home: NextPage = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Posts />
    </div>
  );
};

export default Home;
