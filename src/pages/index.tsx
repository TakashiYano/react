import type { NextPage } from "next";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/shared/Header";

const Index: NextPage = () => {
  return (
    <div className={classes.container}>
      <Header />
      <h1>title</h1>
      <p>JSONPlaceholder</p>
    </div>
  );
};

export default Index;
