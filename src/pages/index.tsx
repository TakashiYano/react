import type { NextPage } from "next";
import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import { Footer } from "../components/shared/Footer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Headline page="index" />
        <Links />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
