import { InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import { UserList } from "src/components/User/UserList";
import { UserType } from "src/types/types";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps = async () => {
  const USERS_API_URL = `${API_URL}/users`;
  const users = await fetch(USERS_API_URL);
  const usersData: UserType[] = await users.json();

  return {
    props: {
      fallback: {
        [USERS_API_URL]: usersData,
      },
    },
  };
};

const Users: NextPage<Props> = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <UserList />
      </SWRConfig>
    </div>
  );
};

export default Users;
