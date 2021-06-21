import type { NextPage } from "next";
import { Links } from "../components/Links";
import { Footer } from "../components/shared/Footer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Index Page</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <Links />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
