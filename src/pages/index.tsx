import type { NextPage } from "next";
import { Main } from "../components/Main";
import { Footer } from "../components/shared/Footer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Main page="index" />
      <Footer />
    </div>
  );
};

export default Home;
