import type { NextPage } from "next";
import { Main } from "src/components/Main";
import { Footer } from "src/components/shared/Footer";
import { Header } from "src/components/shared/Header";
import styles from "src/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main page="index" />
      <Footer />
    </div>
  );
};

export default Home;
