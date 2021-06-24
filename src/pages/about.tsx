import type { NextPage } from "next";
import styles from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Footer } from "src/components/shared/Footer";
import { Header } from "src/components/shared/Header";

type Props = {
  doubleCount: number;
  isShow: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleDisplay: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  array: string[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdd: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const About: NextPage<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Header />

      {props.isShow ? <h1>{props.doubleCount}</h1> : null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>

      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="about" />
      <Footer />
    </div>
  );
};

export default About;
