import type { GetServerSideProps, NextPage } from "next";
import { Header } from "src/components/Header";
import { UserComponent } from "src/components/User";
import { PostType, ServerSideUserProps, UserType } from "src/types/types";
import { SWRConfig } from "swr";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  // ユーザー情報の取得
  const USER_API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await fetch(USER_API_URL);
  const userData: UserType = await user.json();
  // ユーザーの投稿の取得
  const POSTS_API_URL = `https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`;
  const posts = await fetch(POSTS_API_URL);
  const postsData: PostType = await posts.json();

  return {
    props: {
      fallback: {
        [USER_API_URL]: userData,
        [POSTS_API_URL]: postsData,
      },
    },
  };
};

const UsersId: NextPage<ServerSideUserProps> = (props) => {
  const { fallback } = props;
  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      <UserComponent />
    </SWRConfig>
  );
};

export default UsersId;
