import type { NextPage } from "next";
import { Header } from "src/components/shared/Header";
import { Posts as PostsComponent } from "src/components/Posts";

const Posts: NextPage = () => {
  return (
    <div>
      <Header />
      <PostsComponent />
    </div>
  );
};

export default Posts;
