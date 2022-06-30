import { InferGetServerSidePropsType, NextPage } from "next";
import { Header } from "src/components/Header";
import { UsersComponent } from "src/components/Users";
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
      <SWRConfig value={{ fallback }}>
        <Header />
        <UsersComponent />
      </SWRConfig>
    </div>
  );
};

export default Users;
