import { NextPage } from "next";
import classes from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Button } from "src/components/shared/Button";
import { Footer } from "src/components/shared/Footer";
import { Header } from "src/components/shared/Header";

const test: NextPage = () => {
  return (
    <div className={classes.container}>
      <Header />
      <div>
        <Button color="red" />
        <Button color="blue" />
      </div>
      <Main page="test" />
      <Footer />
    </div>
  );
};

export default test;
