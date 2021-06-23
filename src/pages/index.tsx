import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { Main } from "src/components/Main";
import { Footer } from "src/components/shared/Footer";
import { Header } from "src/components/shared/Header";
import styles from "src/styles/Home.module.css";

const Home: NextPage = () => {
  const [count, setCount] = useState(1);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (count < 10) {
      setCount(count => count + 1);
    }
    e.preventDefault();
  }, [count]);

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
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  );
};

export default Home;
