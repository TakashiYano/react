import { NextPage } from "next";
import { Header } from "src/components/Header";
import { UsersComponent } from "src/components/Users";
import { ServerSideUsersProps, UserType } from "src/types/types";
import { SWRConfig } from "swr";

export const getServerSideProps = async () => {
  const USERS_API_URL = `https://jsonplaceholder.typicode.com/users`;
  const users = await fetch(USERS_API_URL);
  const usersData: UserType = await users.json();

  return {
    props: {
      fallback: {
        [USERS_API_URL]: usersData,
      },
    },
  };
};

const Users: NextPage<ServerSideUsersProps> = (props) => {
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
