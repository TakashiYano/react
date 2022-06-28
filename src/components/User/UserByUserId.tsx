import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";
import { UsersByUserIdType, UserType } from "src/types/types";

export const UserByUserId: React.FC<UsersByUserIdType> = (props) => {
  const { data, error } = useSWR<UserType, Error>(
    props.id ? `https://jsonplaceholder.typicode.com/users/${props.id}` : null,
    fetcher
  );

  if (!data && !error) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>Created by {data?.name}</div>;
};
