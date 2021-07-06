import type { NextPage } from "next";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/shared/Header";
import { useCallback, useEffect, useState } from "react";

const Home: NextPage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className={classes.container}>
      <Header />
      {posts.length > 0 ? (
        <ol>
          {posts.map(({ id, title }) => {
            return <li key={id}>{title}</li>;
          })}
        </ol>
      ) : null}
    </div>
  );
};

export default Home;
