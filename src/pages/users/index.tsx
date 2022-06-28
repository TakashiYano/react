import type { NextPage } from "next";
import { Header } from "src/components/Header";
import { UsersComponent } from "src/components/Users";

const Users: NextPage = () => {
  return (
    <div>
      <Header />
      <UsersComponent />
    </div>
  );
};

export default Users;
