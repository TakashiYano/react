import type { NextPage } from "next";
import { Main } from "../components/Main";
import { Footer } from "../components/shared/Footer";
import styles from "../styles/Home.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Main page="about" />
      <Footer />
    </div>
  );
};

export default About;
