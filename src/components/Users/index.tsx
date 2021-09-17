import Link from "next/link";
import { useUsers } from "src/hooks/useUsers";

export const UsersComponent: React.VFC = () => {
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
    <ol>
      {data?.map(({ id, name, email }) => {
        return (
          <li key={id}>
            <Link href={`/users/${id}`}>
              <a>{`${name} (${email})`}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};