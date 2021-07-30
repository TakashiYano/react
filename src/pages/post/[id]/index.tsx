import type { NextPage } from "next";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/shared/Header";
import { Post } from "src/components/Post";

const PostId: NextPage = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Post />
    </div>
  );
};

export default PostId;