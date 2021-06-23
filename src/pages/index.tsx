import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { Main } from "src/components/Main";
import { Footer } from "src/components/shared/Footer";
import { Header } from "src/components/shared/Header";
import styles from "src/styles/Home.module.css";

const Home: NextPage = () => {
  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    // mount
    document.body.style.backgroundColor = "lightblue";
    return () => {
      // unmount
      document.body.style.backgroundColor = "";
    }
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  );
};

export default Home;
