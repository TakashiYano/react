import type { NextPage } from "next";
import { CommentsComponent } from "src/components/Comments";
import { Header } from "src/components/Header";

const Comments: NextPage = () => {
  return (
    <div>
      <Header />
      <CommentsComponent />
    </div>
  );
};

export default Comments;
