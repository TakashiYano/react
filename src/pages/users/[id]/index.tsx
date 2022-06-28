import type { NextPage } from "next";
import { Header } from "src/components/Header";
import { UserComponent } from "src/components/User";

const UsersId: NextPage = () => {
  return (
    <div>
      <Header />
      <UserComponent />
    </div>
  );
};

export default UsersId;
