import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";
import { UsersByUserIdType, UserType } from "src/types/types";

export const UserByUserId: React.FC<UsersByUserIdType> = (props) => {
  const { data, error } = useSWR<UserType, Error>(
    props.id ? `https://jsonplaceholder.typicode.com/users/${props.id}` : null,
    fetcher
  );

  if (!data && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return <div>Created by {data?.name}</div>;
};
