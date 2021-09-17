import type { NextPage } from "next";
import { Header } from "src/components/shared/Header";
import { Post } from "src/components/Post";

const PostsId: NextPage = () => {
  return (
    <div>
      <Header />
      <Post />
    </div>
  );
};

export default PostsId;
