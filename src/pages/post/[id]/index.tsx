import type { NextPage } from "next";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/shared/Header";
import { useRouter } from "next/dist/client/router";

const PostId: NextPage = () => {
  const router = useRouter();

  return (
    <div className={classes.container}>
      <Header />
      <div>{router.query.id}</div>
    </div>
  );
};

export default PostId;
