import type { NextPage } from "next";
import { Header } from "src/components/shared/Header";
import { UsersComponent } from "src/components/Users";
import { useUsers } from "src/hooks/useUsers";

const Users: NextPage = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isEmpty) {
    return <p>No users found.</p>;
  }

  return (
    <div>
      <Header />
      <UsersComponent />
    </div>
  );
};

export default Users;
