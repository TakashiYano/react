import type { NextPage } from "next";
import styles from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Footer } from "src/components/shared/Footer";
import { Header } from "src/components/shared/Header";

type Props = {
  count: number;
  isShow: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleDisplay: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  array: string[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdd: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Home: NextPage<Props> = (props) => {
  const {
    count,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleChange,
    handleAdd,
  } = props;

  return (
    <div className={styles.container}>
      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="index" />
      <Footer />
    </div>
  );
};

export default Home;
