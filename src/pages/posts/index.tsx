import type { NextPage } from "next";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/shared/Header";
import { Posts as PostsComponent } from "src/components/Posts";

const Posts: NextPage = () => {
  return (
    <div className={classes.container}>
      <Header />
      <PostsComponent />
    </div>
  );
};

export default Posts;
