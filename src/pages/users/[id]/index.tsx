import type { GetServerSideProps, NextPage } from "next";
import { Header } from "src/components/Header";
import { UserComponent } from "src/components/User";
import { ServerSideIndexProps, UserType } from "src/types/types";
import { SWRConfig } from "swr";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await fetch(API_URL);
  const userData: UserType = await user.json();

  return {
    props: {
      fallback: {
        [API_URL]: userData,
      },
    },
  };
};

const UsersId: NextPage<ServerSideIndexProps> = (props) => {
  const { fallback } = props;
  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      <UserComponent />
    </SWRConfig>
  );
};

export default UsersId;
